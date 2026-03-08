import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateTrackingEvents } from "@/lib/routeGenerator";
import { getSession } from "@/lib/auth";

const CARRIERS = ["DHL", "UPS", "FedEx", "GLS", "OzonExpress", "Aramex"] as const;

function generateTrackingNumber(carrier: string): string {
  const prefixes: Record<string, string> = {
    DHL: "DHL",
    UPS: "1Z",
    FedEx: "FX",
    GLS: "GLS",
    OzonExpress: "OZN",
    Aramex: "ARX",
  };
  const prefix = prefixes[carrier] || "TRK";
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}${timestamp}${random}`;
}

export async function GET(request: NextRequest) {
  try {
    // Get current user session
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "100");
    const skip = (page - 1) * limit;

    // Filter trackings by user
    const [trackings, total] = await Promise.all([
      prisma.tracking.findMany({
        where: { userId: session.userId },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.tracking.count({
        where: { userId: session.userId },
      }),
    ]);

    return NextResponse.json({
      trackings,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Get trackings error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get current user session
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const {
      trackingNumber,
      generateNumber,
      status,
      carrier,
      fromCountry,
      fromCity,
      toCountry,
      toCity,
      fromDate,
      deliveredDate,
    } = body;

    const selectedCarrier = carrier || "DHL";
    const finalTrackingNumber = generateNumber
      ? generateTrackingNumber(selectedCarrier)
      : trackingNumber;

    if (!finalTrackingNumber) {
      return NextResponse.json(
        { error: "Tracking number is required" },
        { status: 400 }
      );
    }

    if (!fromCountry || !fromCity || !toCountry || !toCity || !fromDate) {
      return NextResponse.json(
        { error: "All required fields must be provided" },
        { status: 400 }
      );
    }

    const existingTracking = await prisma.tracking.findUnique({
      where: { trackingNumber: finalTrackingNumber },
    });

    if (existingTracking) {
      return NextResponse.json(
        { error: "Tracking number already exists" },
        { status: 400 }
      );
    }

    // Generate tracking events based on route
    const fromDateObj = new Date(fromDate);
    const deliveredDateObj = deliveredDate ? new Date(deliveredDate) : null;
    const trackingEvents = generateTrackingEvents(
      fromCity,
      fromCountry,
      toCity,
      toCountry,
      fromDateObj,
      deliveredDateObj,
      status || "processing",
      selectedCarrier
    );

    // Create tracking with events in a transaction
    const tracking = await prisma.tracking.create({
      data: {
        trackingNumber: finalTrackingNumber,
        status: status || "processing",
        carrier: selectedCarrier,
        fromCountry,
        fromCity,
        toCountry,
        toCity,
        fromDate: fromDateObj,
        deliveredDate: deliveredDateObj,
        userId: session.userId,
        events: {
          create: trackingEvents.map((event) => ({
            status: event.status,
            description: event.description,
            location: event.location,
            city: event.city,
            country: event.country,
            timestamp: event.timestamp,
            isCompleted: event.isCompleted,
          })),
        },
      },
      include: {
        events: {
          orderBy: { timestamp: "desc" },
        },
      },
    });

    const trackingUrl = `${request.headers.get("origin") || ""}/?track=${tracking.trackingNumber}`;

    return NextResponse.json({
      tracking,
      trackingUrl,
    });
  } catch (error) {
    console.error("Create tracking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
