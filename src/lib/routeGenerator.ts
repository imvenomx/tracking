// City coordinates and route generation utilities

interface City {
  name: string;
  country: string;
  lat: number;
  lng: number;
}

// Major cities database with coordinates
const majorCities: City[] = [
  // France
  { name: "Paris", country: "France", lat: 48.8566, lng: 2.3522 },
  { name: "Lyon", country: "France", lat: 45.7640, lng: 4.8357 },
  { name: "Marseille", country: "France", lat: 43.2965, lng: 5.3698 },
  { name: "Bordeaux", country: "France", lat: 44.8378, lng: -0.5792 },
  { name: "Toulouse", country: "France", lat: 43.6047, lng: 1.4442 },
  { name: "Nice", country: "France", lat: 43.7102, lng: 7.2620 },
  { name: "Nantes", country: "France", lat: 47.2184, lng: -1.5536 },
  { name: "Strasbourg", country: "France", lat: 48.5734, lng: 7.7521 },
  { name: "Montpellier", country: "France", lat: 43.6108, lng: 3.8767 },
  { name: "Perpignan", country: "France", lat: 42.6986, lng: 2.8954 },

  // Spain
  { name: "Madrid", country: "Spain", lat: 40.4168, lng: -3.7038 },
  { name: "Barcelona", country: "Spain", lat: 41.3851, lng: 2.1734 },
  { name: "Valencia", country: "Spain", lat: 39.4699, lng: -0.3763 },
  { name: "Seville", country: "Spain", lat: 37.3891, lng: -5.9845 },
  { name: "Zaragoza", country: "Spain", lat: 41.6488, lng: -0.8891 },
  { name: "Bilbao", country: "Spain", lat: 43.2630, lng: -2.9350 },
  { name: "Malaga", country: "Spain", lat: 36.7213, lng: -4.4214 },

  // Germany
  { name: "Berlin", country: "Germany", lat: 52.5200, lng: 13.4050 },
  { name: "Munich", country: "Germany", lat: 48.1351, lng: 11.5820 },
  { name: "Frankfurt", country: "Germany", lat: 50.1109, lng: 8.6821 },
  { name: "Hamburg", country: "Germany", lat: 53.5511, lng: 9.9937 },
  { name: "Cologne", country: "Germany", lat: 50.9375, lng: 6.9603 },
  { name: "Stuttgart", country: "Germany", lat: 48.7758, lng: 9.1829 },
  { name: "Dusseldorf", country: "Germany", lat: 51.2277, lng: 6.7735 },
  { name: "Leipzig", country: "Germany", lat: 51.3397, lng: 12.3731 },

  // Italy
  { name: "Rome", country: "Italy", lat: 41.9028, lng: 12.4964 },
  { name: "Milan", country: "Italy", lat: 45.4642, lng: 9.1900 },
  { name: "Naples", country: "Italy", lat: 40.8518, lng: 14.2681 },
  { name: "Turin", country: "Italy", lat: 45.0703, lng: 7.6869 },
  { name: "Florence", country: "Italy", lat: 43.7696, lng: 11.2558 },
  { name: "Bologna", country: "Italy", lat: 44.4949, lng: 11.3426 },
  { name: "Venice", country: "Italy", lat: 45.4408, lng: 12.3155 },
  { name: "Genoa", country: "Italy", lat: 44.4056, lng: 8.9463 },

  // United Kingdom
  { name: "London", country: "United Kingdom", lat: 51.5074, lng: -0.1278 },
  { name: "Manchester", country: "United Kingdom", lat: 53.4808, lng: -2.2426 },
  { name: "Birmingham", country: "United Kingdom", lat: 52.4862, lng: -1.8904 },
  { name: "Edinburgh", country: "United Kingdom", lat: 55.9533, lng: -3.1883 },
  { name: "Glasgow", country: "United Kingdom", lat: 55.8642, lng: -4.2518 },
  { name: "Liverpool", country: "United Kingdom", lat: 53.4084, lng: -2.9916 },
  { name: "Leeds", country: "United Kingdom", lat: 53.8008, lng: -1.5491 },
  { name: "Bristol", country: "United Kingdom", lat: 51.4545, lng: -2.5879 },

  // Netherlands
  { name: "Amsterdam", country: "Netherlands", lat: 52.3676, lng: 4.9041 },
  { name: "Rotterdam", country: "Netherlands", lat: 51.9244, lng: 4.4777 },
  { name: "The Hague", country: "Netherlands", lat: 52.0705, lng: 4.3007 },
  { name: "Utrecht", country: "Netherlands", lat: 52.0907, lng: 5.1214 },

  // Belgium
  { name: "Brussels", country: "Belgium", lat: 50.8503, lng: 4.3517 },
  { name: "Antwerp", country: "Belgium", lat: 51.2194, lng: 4.4025 },
  { name: "Ghent", country: "Belgium", lat: 51.0543, lng: 3.7174 },
  { name: "Liège", country: "Belgium", lat: 50.6326, lng: 5.5797 },

  // Poland
  { name: "Warsaw", country: "Poland", lat: 52.2297, lng: 21.0122 },
  { name: "Krakow", country: "Poland", lat: 50.0647, lng: 19.9450 },
  { name: "Wroclaw", country: "Poland", lat: 51.1079, lng: 17.0385 },
  { name: "Poznan", country: "Poland", lat: 52.4064, lng: 16.9252 },
  { name: "Gdansk", country: "Poland", lat: 54.3520, lng: 18.6466 },

  // Austria
  { name: "Vienna", country: "Austria", lat: 48.2082, lng: 16.3738 },
  { name: "Salzburg", country: "Austria", lat: 47.8095, lng: 13.0550 },
  { name: "Innsbruck", country: "Austria", lat: 47.2692, lng: 11.4041 },
  { name: "Graz", country: "Austria", lat: 47.0707, lng: 15.4395 },

  // Switzerland
  { name: "Zurich", country: "Switzerland", lat: 47.3769, lng: 8.5417 },
  { name: "Geneva", country: "Switzerland", lat: 46.2044, lng: 6.1432 },
  { name: "Bern", country: "Switzerland", lat: 46.9480, lng: 7.4474 },
  { name: "Basel", country: "Switzerland", lat: 47.5596, lng: 7.5886 },

  // Portugal
  { name: "Lisbon", country: "Portugal", lat: 38.7223, lng: -9.1393 },
  { name: "Porto", country: "Portugal", lat: 41.1579, lng: -8.6291 },
  { name: "Faro", country: "Portugal", lat: 37.0194, lng: -7.9322 },

  // Czech Republic
  { name: "Prague", country: "Czech Republic", lat: 50.0755, lng: 14.4378 },
  { name: "Brno", country: "Czech Republic", lat: 49.1951, lng: 16.6068 },

  // Hungary
  { name: "Budapest", country: "Hungary", lat: 47.4979, lng: 19.0402 },
  { name: "Debrecen", country: "Hungary", lat: 47.5316, lng: 21.6273 },

  // Greece
  { name: "Athens", country: "Greece", lat: 37.9838, lng: 23.7275 },
  { name: "Thessaloniki", country: "Greece", lat: 40.6401, lng: 22.9444 },

  // Denmark
  { name: "Copenhagen", country: "Denmark", lat: 55.6761, lng: 12.5683 },
  { name: "Aarhus", country: "Denmark", lat: 56.1629, lng: 10.2039 },

  // Sweden
  { name: "Stockholm", country: "Sweden", lat: 59.3293, lng: 18.0686 },
  { name: "Gothenburg", country: "Sweden", lat: 57.7089, lng: 11.9746 },
  { name: "Malmo", country: "Sweden", lat: 55.6050, lng: 13.0038 },

  // Norway
  { name: "Oslo", country: "Norway", lat: 59.9139, lng: 10.7522 },
  { name: "Bergen", country: "Norway", lat: 60.3913, lng: 5.3221 },

  // Finland
  { name: "Helsinki", country: "Finland", lat: 60.1699, lng: 24.9384 },
  { name: "Tampere", country: "Finland", lat: 61.4978, lng: 23.7610 },

  // Russia
  { name: "Moscow", country: "Russia", lat: 55.7558, lng: 37.6173 },
  { name: "Saint Petersburg", country: "Russia", lat: 59.9343, lng: 30.3351 },

  // USA
  { name: "New York", country: "USA", lat: 40.7128, lng: -74.0060 },
  { name: "Los Angeles", country: "USA", lat: 34.0522, lng: -118.2437 },
  { name: "Chicago", country: "USA", lat: 41.8781, lng: -87.6298 },
  { name: "Houston", country: "USA", lat: 29.7604, lng: -95.3698 },
  { name: "Phoenix", country: "USA", lat: 33.4484, lng: -112.0740 },
  { name: "Philadelphia", country: "USA", lat: 39.9526, lng: -75.1652 },
  { name: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  { name: "Seattle", country: "USA", lat: 47.6062, lng: -122.3321 },
  { name: "Miami", country: "USA", lat: 25.7617, lng: -80.1918 },
  { name: "Denver", country: "USA", lat: 39.7392, lng: -104.9903 },
  { name: "Atlanta", country: "USA", lat: 33.7490, lng: -84.3880 },
  { name: "Boston", country: "USA", lat: 42.3601, lng: -71.0589 },
  { name: "Dallas", country: "USA", lat: 32.7767, lng: -96.7970 },
  { name: "Las Vegas", country: "USA", lat: 36.1699, lng: -115.1398 },

  // Canada
  { name: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832 },
  { name: "Montreal", country: "Canada", lat: 45.5017, lng: -73.5673 },
  { name: "Vancouver", country: "Canada", lat: 49.2827, lng: -123.1207 },
  { name: "Calgary", country: "Canada", lat: 51.0447, lng: -114.0719 },
  { name: "Ottawa", country: "Canada", lat: 45.4215, lng: -75.6972 },

  // China
  { name: "Beijing", country: "China", lat: 39.9042, lng: 116.4074 },
  { name: "Shanghai", country: "China", lat: 31.2304, lng: 121.4737 },
  { name: "Guangzhou", country: "China", lat: 23.1291, lng: 113.2644 },
  { name: "Shenzhen", country: "China", lat: 22.5431, lng: 114.0579 },
  { name: "Hong Kong", country: "China", lat: 22.3193, lng: 114.1694 },
  { name: "Chengdu", country: "China", lat: 30.5728, lng: 104.0668 },

  // Japan
  { name: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503 },
  { name: "Osaka", country: "Japan", lat: 34.6937, lng: 135.5023 },
  { name: "Kyoto", country: "Japan", lat: 35.0116, lng: 135.7681 },
  { name: "Yokohama", country: "Japan", lat: 35.4437, lng: 139.6380 },
  { name: "Nagoya", country: "Japan", lat: 35.1815, lng: 136.9066 },

  // South Korea
  { name: "Seoul", country: "South Korea", lat: 37.5665, lng: 126.9780 },
  { name: "Busan", country: "South Korea", lat: 35.1796, lng: 129.0756 },
  { name: "Incheon", country: "South Korea", lat: 37.4563, lng: 126.7052 },

  // Australia
  { name: "Sydney", country: "Australia", lat: -33.8688, lng: 151.2093 },
  { name: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631 },
  { name: "Brisbane", country: "Australia", lat: -27.4698, lng: 153.0251 },
  { name: "Perth", country: "Australia", lat: -31.9505, lng: 115.8605 },
  { name: "Adelaide", country: "Australia", lat: -34.9285, lng: 138.6007 },

  // UAE
  { name: "Dubai", country: "UAE", lat: 25.2048, lng: 55.2708 },
  { name: "Abu Dhabi", country: "UAE", lat: 24.4539, lng: 54.3773 },

  // India
  { name: "Mumbai", country: "India", lat: 19.0760, lng: 72.8777 },
  { name: "Delhi", country: "India", lat: 28.7041, lng: 77.1025 },
  { name: "Bangalore", country: "India", lat: 12.9716, lng: 77.5946 },
  { name: "Chennai", country: "India", lat: 13.0827, lng: 80.2707 },
  { name: "Kolkata", country: "India", lat: 22.5726, lng: 88.3639 },

  // Brazil
  { name: "Sao Paulo", country: "Brazil", lat: -23.5505, lng: -46.6333 },
  { name: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lng: -43.1729 },
  { name: "Brasilia", country: "Brazil", lat: -15.7942, lng: -47.8822 },

  // Mexico
  { name: "Mexico City", country: "Mexico", lat: 19.4326, lng: -99.1332 },
  { name: "Guadalajara", country: "Mexico", lat: 20.6597, lng: -103.3496 },
  { name: "Monterrey", country: "Mexico", lat: 25.6866, lng: -100.3161 },

  // Turkey
  { name: "Istanbul", country: "Turkey", lat: 41.0082, lng: 28.9784 },
  { name: "Ankara", country: "Turkey", lat: 39.9334, lng: 32.8597 },
  { name: "Izmir", country: "Turkey", lat: 38.4237, lng: 27.1428 },

  // South Africa
  { name: "Johannesburg", country: "South Africa", lat: -26.2041, lng: 28.0473 },
  { name: "Cape Town", country: "South Africa", lat: -33.9249, lng: 18.4241 },
  { name: "Durban", country: "South Africa", lat: -29.8587, lng: 31.0218 },

  // Egypt
  { name: "Cairo", country: "Egypt", lat: 30.0444, lng: 31.2357 },
  { name: "Alexandria", country: "Egypt", lat: 31.2001, lng: 29.9187 },

  // Singapore
  { name: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198 },

  // Malaysia
  { name: "Kuala Lumpur", country: "Malaysia", lat: 3.1390, lng: 101.6869 },

  // Thailand
  { name: "Bangkok", country: "Thailand", lat: 13.7563, lng: 100.5018 },

  // Indonesia
  { name: "Jakarta", country: "Indonesia", lat: -6.2088, lng: 106.8456 },
  { name: "Bali", country: "Indonesia", lat: -8.3405, lng: 115.0920 },

  // Philippines
  { name: "Manila", country: "Philippines", lat: 14.5995, lng: 120.9842 },

  // Vietnam
  { name: "Ho Chi Minh City", country: "Vietnam", lat: 10.8231, lng: 106.6297 },
  { name: "Hanoi", country: "Vietnam", lat: 21.0285, lng: 105.8542 },

  // Argentina
  { name: "Buenos Aires", country: "Argentina", lat: -34.6037, lng: -58.3816 },

  // Chile
  { name: "Santiago", country: "Chile", lat: -33.4489, lng: -70.6693 },

  // Colombia
  { name: "Bogota", country: "Colombia", lat: 4.7110, lng: -74.0721 },

  // Morocco
  { name: "Casablanca", country: "Morocco", lat: 33.5731, lng: -7.5898 },
  { name: "Marrakech", country: "Morocco", lat: 31.6295, lng: -7.9811 },

  // Israel
  { name: "Tel Aviv", country: "Israel", lat: 32.0853, lng: 34.7818 },
  { name: "Jerusalem", country: "Israel", lat: 31.7683, lng: 35.2137 },

  // New Zealand
  { name: "Auckland", country: "New Zealand", lat: -36.8509, lng: 174.7645 },
  { name: "Wellington", country: "New Zealand", lat: -41.2866, lng: 174.7756 },

  // Ireland
  { name: "Dublin", country: "Ireland", lat: 53.3498, lng: -6.2603 },
  { name: "Cork", country: "Ireland", lat: 51.8985, lng: -8.4756 },

  // Romania
  { name: "Bucharest", country: "Romania", lat: 44.4268, lng: 26.1025 },
  { name: "Cluj-Napoca", country: "Romania", lat: 46.7712, lng: 23.6236 },

  // Bulgaria
  { name: "Sofia", country: "Bulgaria", lat: 42.6977, lng: 23.3219 },

  // Croatia
  { name: "Zagreb", country: "Croatia", lat: 45.8150, lng: 15.9819 },
  { name: "Split", country: "Croatia", lat: 43.5081, lng: 16.4402 },

  // Serbia
  { name: "Belgrade", country: "Serbia", lat: 44.7866, lng: 20.4489 },

  // Slovakia
  { name: "Bratislava", country: "Slovakia", lat: 48.1486, lng: 17.1077 },

  // Slovenia
  { name: "Ljubljana", country: "Slovenia", lat: 46.0569, lng: 14.5058 },

  // Luxembourg
  { name: "Luxembourg", country: "Luxembourg", lat: 49.6116, lng: 6.1319 },
];

// Calculate distance between two points using Haversine formula
function haversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Find the closest city by name (fuzzy match)
function findCity(cityName: string, countryName: string): City | null {
  const normalizedCityName = cityName.toLowerCase().trim();
  const normalizedCountry = countryName.toLowerCase().trim();

  // Try exact match first
  let match = majorCities.find(
    (c) =>
      c.name.toLowerCase() === normalizedCityName &&
      c.country.toLowerCase().includes(normalizedCountry)
  );

  if (!match) {
    // Try partial match
    match = majorCities.find(
      (c) =>
        c.name.toLowerCase().includes(normalizedCityName) ||
        normalizedCityName.includes(c.name.toLowerCase())
    );
  }

  if (!match) {
    // Try country match and get capital/major city
    match = majorCities.find((c) =>
      c.country.toLowerCase().includes(normalizedCountry)
    );
  }

  return match || null;
}

// Find cities along the route between two points
function findCitiesAlongRoute(
  fromCity: City,
  toCity: City,
  maxStops: number = 4
): City[] {
  const totalDistance = haversineDistance(
    fromCity.lat,
    fromCity.lng,
    toCity.lat,
    toCity.lng
  );

  // Filter out origin and destination
  const candidates = majorCities.filter(
    (c) =>
      c.name !== fromCity.name &&
      c.name !== toCity.name
  );

  // Calculate how far each city is from the direct route
  const citiesWithScore = candidates
    .map((city) => {
      const distToOrigin = haversineDistance(
        fromCity.lat,
        fromCity.lng,
        city.lat,
        city.lng
      );
      const distToDest = haversineDistance(
        city.lat,
        city.lng,
        toCity.lat,
        toCity.lng
      );
      const totalViaCity = distToOrigin + distToDest;

      // Detour ratio - how much longer is the route via this city
      const detourRatio = totalViaCity / totalDistance;

      // Progress ratio - how far along the route is this city (0 = origin, 1 = destination)
      const progressRatio = distToOrigin / totalDistance;

      return {
        city,
        distToOrigin,
        distToDest,
        detourRatio,
        progressRatio,
      };
    })
    // Only include cities that don't add more than 50% detour
    .filter((c) => c.detourRatio < 1.5 && c.progressRatio > 0.1 && c.progressRatio < 0.9)
    // Sort by progress along the route
    .sort((a, b) => a.progressRatio - b.progressRatio);

  // Select evenly distributed stops
  const result: City[] = [];
  if (citiesWithScore.length === 0) return result;

  const step = Math.max(1, Math.floor(citiesWithScore.length / maxStops));
  for (let i = 0; i < citiesWithScore.length && result.length < maxStops; i += step) {
    result.push(citiesWithScore[i].city);
  }

  return result;
}

export interface TrackingEventData {
  status: string;
  description: string;
  location: string;
  city: string;
  country: string;
  timestamp: Date;
  isCompleted: boolean;
}

// Carrier-specific event descriptions
const carrierEventTemplates: Record<string, Record<string, string[]>> = {
  DHL: {
    pickup: ["Shipment picked up", "Package collected from sender"],
    processing: ["Processed at DHL facility", "Shipment information received"],
    transit: ["In transit to next facility", "Departed DHL facility", "Arrived at DHL sorting center"],
    customs: ["Customs clearance processing", "Released from customs"],
    delivery: ["Out for delivery", "Delivered - Signed by recipient"],
  },
  UPS: {
    pickup: ["UPS Access Point pickup", "Picked up by UPS driver"],
    processing: ["Order processed", "Package received at UPS facility"],
    transit: ["In transit", "Departed from facility", "Arrived at UPS hub"],
    customs: ["Import scan", "Cleared customs"],
    delivery: ["Out for delivery", "Delivered - Left at front door"],
  },
  FedEx: {
    pickup: ["Picked up", "Shipment picked up from sender"],
    processing: ["Shipment information sent to FedEx", "At FedEx origin facility"],
    transit: ["In transit", "Departed FedEx location", "At destination sort facility"],
    customs: ["International shipment release - Import", "Customs cleared"],
    delivery: ["On FedEx vehicle for delivery", "Delivered"],
  },
  GLS: {
    pickup: ["Parcel picked up", "Collection completed"],
    processing: ["Parcel received at GLS depot", "Data entry complete"],
    transit: ["In transit", "Departed GLS depot", "Arrived at destination depot"],
    customs: ["Customs processing", "Released by customs"],
    delivery: ["Out for delivery", "Delivered to recipient"],
  },
  OzonExpress: {
    pickup: ["Order received", "Package picked up from warehouse"],
    processing: ["Processing at sorting center", "Package scanned at facility"],
    transit: ["In transit", "Left sorting facility", "Arrived at regional hub"],
    customs: ["Customs documentation submitted", "Customs cleared"],
    delivery: ["Out for delivery", "Successfully delivered"],
  },
  Aramex: {
    pickup: ["Shipment created", "Picked up from shipper"],
    processing: ["Received at Aramex facility", "Being processed"],
    transit: ["In transit to destination", "Departed origin facility", "Arrived at hub"],
    customs: ["Under customs clearance", "Customs cleared - Released"],
    delivery: ["With delivery courier", "Delivered - Proof of delivery available"],
  },
};

function getRandomEvent(carrier: string, eventType: string): string {
  const templates = carrierEventTemplates[carrier] || carrierEventTemplates.DHL;
  const events = templates[eventType] || templates.transit;
  return events[Math.floor(Math.random() * events.length)];
}

// Generate tracking events based on status and route
export function generateTrackingEvents(
  fromCity: string,
  fromCountry: string,
  toCity: string,
  toCountry: string,
  fromDate: Date,
  deliveredDate: Date | null,
  status: string,
  carrier: string = "DHL"
): TrackingEventData[] {
  const events: TrackingEventData[] = [];

  // Find origin and destination cities
  const origin = findCity(fromCity, fromCountry);
  const destination = findCity(toCity, toCountry);

  if (!origin || !destination) {
    // Fallback: just create basic events without intermediate stops
    const baseDate = new Date(fromDate);

    events.push({
      status: "Picked up",
      description: getRandomEvent(carrier, "pickup"),
      location: `${fromCity}, ${fromCountry}`,
      city: fromCity,
      country: fromCountry,
      timestamp: baseDate,
      isCompleted: true,
    });

    if (status !== "processing") {
      events.push({
        status: "Processing",
        description: getRandomEvent(carrier, "processing"),
        location: `${fromCity}, ${fromCountry}`,
        city: fromCity,
        country: fromCountry,
        timestamp: new Date(baseDate.getTime() + 3600000),
        isCompleted: true,
      });
    }

    if (["shipped", "delivered"].includes(status)) {
      events.push({
        status: "In Transit",
        description: getRandomEvent(carrier, "transit"),
        location: `In transit to ${toCity}`,
        city: toCity,
        country: toCountry,
        timestamp: new Date(baseDate.getTime() + 86400000),
        isCompleted: status === "delivered",
      });
    }

    if (status === "delivered" && deliveredDate) {
      events.push({
        status: "Delivered",
        description: getRandomEvent(carrier, "delivery"),
        location: `${toCity}, ${toCountry}`,
        city: toCity,
        country: toCountry,
        timestamp: deliveredDate,
        isCompleted: true,
      });
    }

    return events;
  }

  // Get intermediate cities
  const intermediateCities = findCitiesAlongRoute(origin, destination, 3);

  // Calculate time intervals
  const startTime = fromDate.getTime();
  const endTime = deliveredDate ? deliveredDate.getTime() : Date.now();
  const totalDuration = endTime - startTime;
  const totalStops = intermediateCities.length + 2; // +2 for origin and destination
  const timePerStop = totalDuration / totalStops;

  // Generate events
  let currentTime = startTime;
  let eventIndex = 0;

  // Pickup event at origin
  events.push({
    status: "Picked up",
    description: getRandomEvent(carrier, "pickup"),
    location: `${origin.name}, ${origin.country}`,
    city: origin.name,
    country: origin.country,
    timestamp: new Date(currentTime),
    isCompleted: true,
  });
  eventIndex++;
  currentTime += timePerStop * 0.3;

  // Processing at origin
  if (status !== "processing" || eventIndex === 1) {
    events.push({
      status: "Processing",
      description: getRandomEvent(carrier, "processing"),
      location: `${carrier} ${origin.name} Facility`,
      city: origin.name,
      country: origin.country,
      timestamp: new Date(currentTime),
      isCompleted: status !== "processing",
    });
    eventIndex++;
    currentTime += timePerStop * 0.7;
  }

  // Intermediate stops (transit events)
  const shouldShowTransit = ["sent", "shipped", "delivered"].includes(status);
  if (shouldShowTransit) {
    for (let i = 0; i < intermediateCities.length; i++) {
      const city = intermediateCities[i];
      const isCompleted = status === "delivered" || (status === "shipped" && i < intermediateCities.length - 1);

      // Arrived event
      events.push({
        status: "In Transit",
        description: `Arrived at ${carrier} ${city.name} Hub`,
        location: `${city.name}, ${city.country}`,
        city: city.name,
        country: city.country,
        timestamp: new Date(currentTime),
        isCompleted,
      });
      eventIndex++;
      currentTime += timePerStop * 0.4;

      // Departed event
      events.push({
        status: "In Transit",
        description: `Departed ${carrier} ${city.name} facility`,
        location: `${city.name}, ${city.country}`,
        city: city.name,
        country: city.country,
        timestamp: new Date(currentTime),
        isCompleted,
      });
      eventIndex++;
      currentTime += timePerStop * 0.6;
    }
  }

  // Customs event if international
  if (origin.country !== destination.country && shouldShowTransit) {
    events.push({
      status: "Customs",
      description: getRandomEvent(carrier, "customs"),
      location: `${destination.name}, ${destination.country}`,
      city: destination.name,
      country: destination.country,
      timestamp: new Date(currentTime),
      isCompleted: status === "delivered",
    });
    eventIndex++;
    currentTime += timePerStop * 0.5;
  }

  // Arrival at destination
  if (["shipped", "delivered"].includes(status)) {
    events.push({
      status: "Arrived",
      description: `Arrived at destination facility`,
      location: `${destination.name}, ${destination.country}`,
      city: destination.name,
      country: destination.country,
      timestamp: new Date(currentTime),
      isCompleted: status === "delivered",
    });
    eventIndex++;
  }

  // Out for delivery and delivered
  if (status === "delivered" && deliveredDate) {
    currentTime = deliveredDate.getTime() - 14400000; // 4 hours before delivery

    events.push({
      status: "Out for Delivery",
      description: getRandomEvent(carrier, "delivery").split(" - ")[0],
      location: `${destination.name}, ${destination.country}`,
      city: destination.name,
      country: destination.country,
      timestamp: new Date(currentTime),
      isCompleted: true,
    });

    events.push({
      status: "Delivered",
      description: getRandomEvent(carrier, "delivery"),
      location: `${toCity}, ${toCountry}`,
      city: toCity,
      country: toCountry,
      timestamp: deliveredDate,
      isCompleted: true,
    });
  }

  return events;
}

export { majorCities, findCity, haversineDistance };
