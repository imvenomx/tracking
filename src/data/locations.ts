export interface Country {
  name: string;
  code: string;
  cities: string[];
}

export const countries: Country[] = [
  {
    name: "France",
    code: "FR",
    cities: ["Paris", "Lyon", "Marseille", "Bordeaux", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Lille", "Perpignan", "Rennes", "Cannes", "Saint-Tropez", "Avignon", "Aix-en-Provence", "Dijon", "Grenoble", "Toulon", "Annecy", "Biarritz", "La Rochelle", "Reims", "Rouen", "Caen", "Le Havre", "Metz", "Nancy", "Orleans", "Clermont-Ferrand", "Limoges", "Tours", "Amiens", "Besancon", "Le Mans", "Ajaccio", "Bastia", "Colmar", "Chambery", "Antibes", "Saint-Malo"]
  },
  {
    name: "Spain",
    code: "ES",
    cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Bilbao", "Malaga", "Murcia", "Palma", "Granada", "Ibiza", "Formentera", "Alicante", "Cordoba", "Marbella", "Tenerife", "Las Palmas", "Salamanca", "San Sebastian", "Santander", "Pamplona", "Valladolid", "Vigo", "Gijon", "Cadiz", "Almeria", "Tarragona", "Girona", "Lleida", "Segovia", "Toledo", "Cuenca", "Avila", "Burgos", "Leon", "Oviedo", "Logrono", "Vitoria", "Cartagena", "Jerez", "Ronda", "Nerja", "Benidorm", "Torrevieja", "Fuerteventura", "Lanzarote", "Menorca", "Majorca"]
  },
  {
    name: "Germany",
    code: "DE",
    cities: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne", "Stuttgart", "Dusseldorf", "Leipzig", "Dresden", "Hannover"]
  },
  {
    name: "Italy",
    code: "IT",
    cities: ["Rome", "Milan", "Naples", "Turin", "Florence", "Bologna", "Venice", "Genoa", "Palermo", "Verona", "Pisa", "Siena", "Lucca", "Perugia", "Assisi", "Rimini", "Ravenna", "Parma", "Modena", "Ferrara", "Trieste", "Padua", "Vicenza", "Brescia", "Bergamo", "Como", "Amalfi", "Sorrento", "Positano", "Capri", "Catania", "Syracuse", "Taormina", "Bari", "Lecce", "Cagliari", "Sardinia", "Cinque Terre", "Portofino", "San Remo", "Ancona", "Pescara", "Trento", "Bolzano", "Cortina", "Livorno", "Arezzo", "Orvieto", "Tivoli"]
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
    cities: ["Zurich", "Geneva", "Bern", "Basel", "Lausanne", "Lucerne", "Lugano", "St. Gallen", "Winterthur", "Zermatt", "Interlaken", "Montreux", "Davos", "St. Moritz", "Locarno", "Thun", "Neuchatel", "Fribourg", "Chur", "Sion", "Grindelwald", "Verbier", "Gstaad", "Lauterbrunnen", "Schaffhausen", "Baden", "Aarau", "Bellinzona", "Biel", "Ascona"]
  },
  {
    name: "Portugal",
    code: "PT",
    cities: ["Lisbon", "Porto", "Faro", "Coimbra", "Braga", "Funchal", "Sintra", "Cascais", "Estoril", "Evora", "Aveiro", "Guimaraes", "Setubal", "Lagos", "Albufeira", "Portimao", "Tavira", "Madeira", "Ponta Delgada", "Azores", "Viseu", "Leiria", "Tomar", "Obidos", "Nazare", "Batalha", "Fatima", "Viana do Castelo"]
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
    cities: ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Randers", "Kolding", "Horsens", "Vejle", "Roskilde", "Herning", "Silkeborg", "Frederiksberg", "Helsingor", "Hillerod", "Naestved", "Svendborg", "Holstebro", "Skagen", "Billund", "Ribe", "Fredericia"]
  },
  {
    name: "Sweden",
    code: "SE",
    cities: ["Stockholm", "Gothenburg", "Malmo", "Uppsala", "Vasteras", "Orebro", "Linkoping", "Helsingborg", "Jonkoping", "Norrkoping", "Lund", "Umea", "Gavle", "Boras", "Sundsvall", "Eskilstuna", "Karlstad", "Vaxjo", "Halmstad", "Kalmar", "Kristianstad", "Kiruna", "Visby", "Gotland", "Sigtuna", "Ystad", "Trelleborg"]
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

  // Detect city from text after the slash "/"
  // Example: "Appt 40, Street 2 25478 / Madrid" -> "Madrid"
  const slashIndex = address.lastIndexOf('/');
  if (slashIndex === -1) return null;

  const cityPart = address.substring(slashIndex + 1).trim();
  if (!cityPart) return null;

  return cityPart;
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
