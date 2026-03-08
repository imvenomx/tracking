import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ number: string }> }
) {
  try {
    const { number } = await params;

    const tracking = await prisma.tracking.findUnique({
      where: { trackingNumber: number },
      include: {
        events: {
          orderBy: { timestamp: "desc" },
        },
      },
    });

    if (!tracking) {
      return NextResponse.json(
        { error: "Tracking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ tracking });
  } catch (error) {
    console.error("Get tracking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
