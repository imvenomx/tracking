export interface Country {
  name: string;
  code: string;
  cities: string[];
}

export const countries: Country[] = [
  {
    name: "France",
    code: "FR",
    cities: ["Paris", "Lyon", "Marseille", "Bordeaux", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Lille", "Perpignan", "Rennes"]
  },
  {
    name: "Spain",
    code: "ES",
    cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Bilbao", "Malaga", "Murcia", "Palma", "Granada"]
  },
  {
    name: "Germany",
    code: "DE",
    cities: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne", "Stuttgart", "Dusseldorf", "Leipzig", "Dresden", "Hannover"]
  },
  {
    name: "Italy",
    code: "IT",
    cities: ["Rome", "Milan", "Naples", "Turin", "Florence", "Bologna", "Venice", "Genoa", "Palermo", "Verona"]
  },
  {
    name: "United Kingdom",
    code: "GB",
    cities: ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow", "Liverpool", "Leeds", "Bristol", "Sheffield", "Newcastle"]
  },
  {
    name: "Netherlands",
    code: "NL",
    cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Groningen", "Tilburg", "Almere"]
  },
  {
    name: "Belgium",
    code: "BE",
    cities: ["Brussels", "Antwerp", "Ghent", "Liège", "Bruges", "Charleroi", "Namur", "Leuven"]
  },
  {
    name: "Poland",
    code: "PL",
    cities: ["Warsaw", "Krakow", "Wroclaw", "Poznan", "Gdansk", "Lodz", "Szczecin", "Lublin"]
  },
  {
    name: "Austria",
    code: "AT",
    cities: ["Vienna", "Salzburg", "Innsbruck", "Graz", "Linz", "Klagenfurt"]
  },
  {
    name: "Switzerland",
    code: "CH",
    cities: ["Zurich", "Geneva", "Bern", "Basel", "Lausanne", "Lucerne"]
  },
  {
    name: "Portugal",
    code: "PT",
    cities: ["Lisbon", "Porto", "Faro", "Coimbra", "Braga", "Funchal"]
  },
  {
    name: "Czech Republic",
    code: "CZ",
    cities: ["Prague", "Brno", "Ostrava", "Plzen", "Liberec"]
  },
  {
    name: "Hungary",
    code: "HU",
    cities: ["Budapest", "Debrecen", "Szeged", "Pecs", "Miskolc"]
  },
  {
    name: "Greece",
    code: "GR",
    cities: ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa"]
  },
  {
    name: "Denmark",
    code: "DK",
    cities: ["Copenhagen", "Aarhus", "Odense", "Aalborg"]
  },
  {
    name: "Sweden",
    code: "SE",
    cities: ["Stockholm", "Gothenburg", "Malmo", "Uppsala", "Vasteras"]
  },
  {
    name: "Norway",
    code: "NO",
    cities: ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen"]
  },
  {
    name: "Finland",
    code: "FI",
    cities: ["Helsinki", "Tampere", "Turku", "Oulu", "Espoo"]
  },
  {
    name: "Ireland",
    code: "IE",
    cities: ["Dublin", "Cork", "Galway", "Limerick", "Waterford"]
  },
  {
    name: "USA",
    code: "US",
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Francisco", "Seattle", "Miami", "Denver", "Atlanta", "Boston", "Dallas", "Las Vegas", "San Diego"]
  },
  {
    name: "Canada",
    code: "CA",
    cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Ottawa", "Edmonton", "Quebec City", "Winnipeg"]
  },
  {
    name: "China",
    code: "CN",
    cities: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Hong Kong", "Chengdu", "Hangzhou", "Wuhan", "Xian", "Nanjing"]
  },
  {
    name: "Japan",
    code: "JP",
    cities: ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya", "Sapporo", "Fukuoka", "Kobe"]
  },
  {
    name: "South Korea",
    code: "KR",
    cities: ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju"]
  },
  {
    name: "Australia",
    code: "AU",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra"]
  },
  {
    name: "UAE",
    code: "AE",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"]
  },
  {
    name: "India",
    code: "IN",
    cities: ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad"]
  },
  {
    name: "Brazil",
    code: "BR",
    cities: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Fortaleza", "Belo Horizonte"]
  },
  {
    name: "Mexico",
    code: "MX",
    cities: ["Mexico City", "Guadalajara", "Monterrey", "Cancun", "Tijuana", "Puebla"]
  },
  {
    name: "Turkey",
    code: "TR",
    cities: ["Istanbul", "Ankara", "Izmir", "Antalya", "Bursa", "Adana"]
  },
  {
    name: "Russia",
    code: "RU",
    cities: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan"]
  },
  {
    name: "South Africa",
    code: "ZA",
    cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"]
  },
  {
    name: "Egypt",
    code: "EG",
    cities: ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan"]
  },
  {
    name: "Singapore",
    code: "SG",
    cities: ["Singapore"]
  },
  {
    name: "Malaysia",
    code: "MY",
    cities: ["Kuala Lumpur", "George Town", "Johor Bahru", "Kota Kinabalu", "Malacca"]
  },
  {
    name: "Thailand",
    code: "TH",
    cities: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Hat Yai"]
  },
  {
    name: "Indonesia",
    code: "ID",
    cities: ["Jakarta", "Bali", "Surabaya", "Bandung", "Yogyakarta", "Medan"]
  },
  {
    name: "Philippines",
    code: "PH",
    cities: ["Manila", "Cebu", "Davao", "Quezon City", "Makati"]
  },
  {
    name: "Vietnam",
    code: "VN",
    cities: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hai Phong", "Can Tho"]
  },
  {
    name: "Argentina",
    code: "AR",
    cities: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "La Plata"]
  },
  {
    name: "Chile",
    code: "CL",
    cities: ["Santiago", "Valparaiso", "Concepcion", "Antofagasta", "Vina del Mar"]
  },
  {
    name: "Colombia",
    code: "CO",
    cities: ["Bogota", "Medellin", "Cali", "Barranquilla", "Cartagena"]
  },
  {
    name: "Morocco",
    code: "MA",
    cities: ["Casablanca", "Marrakech", "Rabat", "Fes", "Tangier", "Agadir"]
  },
  {
    name: "Israel",
    code: "IL",
    cities: ["Tel Aviv", "Jerusalem", "Haifa", "Eilat", "Beersheba"]
  },
  {
    name: "New Zealand",
    code: "NZ",
    cities: ["Auckland", "Wellington", "Christchurch", "Hamilton", "Queenstown"]
  },
  {
    name: "Romania",
    code: "RO",
    cities: ["Bucharest", "Cluj-Napoca", "Timisoara", "Iasi", "Constanta"]
  },
  {
    name: "Bulgaria",
    code: "BG",
    cities: ["Sofia", "Plovdiv", "Varna", "Burgas"]
  },
  {
    name: "Croatia",
    code: "HR",
    cities: ["Zagreb", "Split", "Dubrovnik", "Rijeka", "Zadar"]
  },
  {
    name: "Serbia",
    code: "RS",
    cities: ["Belgrade", "Novi Sad", "Nis", "Kragujevac"]
  },
  {
    name: "Slovakia",
    code: "SK",
    cities: ["Bratislava", "Kosice", "Presov", "Zilina"]
  },
  {
    name: "Slovenia",
    code: "SI",
    cities: ["Ljubljana", "Maribor", "Celje", "Kranj"]
  },
  {
    name: "Luxembourg",
    code: "LU",
    cities: ["Luxembourg City", "Esch-sur-Alzette", "Differdange"]
  }
];

export const getCountryNames = (): string[] => {
  return countries.map(c => c.name).sort();
};

export const getCitiesByCountry = (countryName: string): string[] => {
  const country = countries.find(c => c.name === countryName);
  return country ? country.cities : [];
};

export const detectCityFromAddress = (address: string, countryName: string): string | null => {
  if (!address || !countryName) return null;

  const country = countries.find(c => c.name === countryName);
  if (!country) return null;

  const normalizedAddress = address.toLowerCase();

  // Sort cities by length (longer first) to match more specific cities first
  // e.g., "New York" should match before "York"
  const sortedCities = [...country.cities].sort((a, b) => b.length - a.length);

  for (const city of sortedCities) {
    const normalizedCity = city.toLowerCase();
    // Check if the address contains the city name
    if (normalizedAddress.includes(normalizedCity)) {
      return city;
    }
  }

  return null;
};

export const getAllCities = (): { city: string; country: string }[] => {
  const allCities: { city: string; country: string }[] = [];
  for (const country of countries) {
    for (const city of country.cities) {
      allCities.push({ city, country: country.name });
    }
  }
  return allCities;
};

export const detectCityAndCountryFromAddress = (address: string): { city: string; country: string } | null => {
  if (!address) return null;

  const normalizedAddress = address.toLowerCase();

  // Get all cities with their countries and sort by city name length (longer first)
  const allCities = getAllCities().sort((a, b) => b.city.length - a.city.length);

  for (const { city, country } of allCities) {
    const normalizedCity = city.toLowerCase();
    if (normalizedAddress.includes(normalizedCity)) {
      return { city, country };
    }
  }

  return null;
};
