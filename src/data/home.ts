export const navLinks = [
  { label: "Track", href: "/track" },
  { label: "Products", href: "/products" },
  { label: "Carriers", href: "/carriers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Help", href: "/help" },
];

export const carrierPills = [
  "FedEx",
  "UPS",
  "USPS",
  "DHL Express",
  "TNT",
  "China Post",
  "Royal Mail",
  "Australia Post",
  "Canada Post",
  "La Poste",
  "Deutsche Post",
  "Japan Post",
  "SF Express",
  "YTO Express",
  "Aramex",
  "Yanwen",
  "4PX",
  "Cainiao",
];

export const solutions = [
  {
    id: "ecommerce",
    icon: "ShoppingCart",
    title: "E-commerce Order Tracking",
    description:
      "Seamlessly integrate package tracking into your online store. Reduce customer inquiries by 80% with automated tracking pages and branded notifications.",
    linkText: "Learn more",
    linkHref: "/solutions/ecommerce",
    hasIllustration: true,
  },
  {
    id: "api",
    icon: "Code",
    title: "Tracking API",
    description:
      "Powerful REST API with real-time webhooks. Integrate tracking data into your systems with just a few lines of code. 99.9% uptime SLA.",
    linkText: "View docs",
    linkHref: "/docs/api",
    hasIllustration: false,
  },
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile Tracking App",
    description:
      "Track all your packages in one place. Get instant push notifications for delivery updates. Available on iOS and Android.",
    linkText: "Download app",
    linkHref: "/mobile",
    hasIllustration: false,
  },
];

export const benefits = [
  {
    id: "accurate",
    icon: "Target",
    title: "Accurate Package Tracking",
    description:
      "Real-time updates directly from carrier systems with intelligent status normalization across all carriers.",
  },
  {
    id: "mobile",
    icon: "DeviceMobile",
    title: "Track on the Go",
    description:
      "Access your tracking dashboard from any device. Native mobile apps with push notifications keep you informed.",
  },
  {
    id: "worldwide",
    icon: "Globe",
    title: "Worldwide Coverage",
    description:
      "Track shipments across 220+ countries and territories. Support for international and domestic carriers.",
  },
  {
    id: "support",
    icon: "Headphones",
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to help with any tracking issues or questions.",
  },
  {
    id: "privacy",
    icon: "Shield",
    title: "Privacy & GDPR Compliant",
    description:
      "Your data is protected with enterprise-grade security. Fully compliant with GDPR and other privacy regulations.",
  },
  {
    id: "notifications",
    icon: "Bell",
    title: "Smart Notifications",
    description:
      "Customizable alerts via email, SMS, or push notifications. Never miss a delivery update again.",
  },
];

export const stats = [
  { value: "3,100+", label: "Carriers" },
  { value: "15M+", label: "Users" },
  { value: "12B+", label: "Shipments Tracked" },
  { value: "220+", label: "Countries" },
  { value: "33+", label: "Languages" },
];

export const carrierCards = [
  {
    title: "DHL Tracking",
    description: "Track DHL Express, eCommerce, and Parcel shipments worldwide.",
  },
  {
    title: "UPS Tracking",
    description: "Track UPS Ground, Air, and international packages.",
  },
  {
    title: "FedEx Tracking",
    description: "Track FedEx Express, Ground, and Freight shipments.",
  },
  {
    title: "USPS Tracking",
    description: "Track Priority Mail, First Class, and all USPS services.",
  },
  {
    title: "TNT Tracking",
    description: "Track TNT Express domestic and international deliveries.",
  },
  {
    title: "Royal Mail Tracking",
    description: "Track Royal Mail Tracked 24/48 and Special Delivery.",
  },
  {
    title: "Australia Post Tracking",
    description: "Track parcels and express post across Australia.",
  },
  {
    title: "Canada Post Tracking",
    description: "Track Xpresspost, Priority, and regular parcels.",
  },
  {
    title: "China Post Tracking",
    description: "Track EMS, registered mail, and ePacket shipments.",
  },
  {
    title: "Japan Post Tracking",
    description: "Track EMS and international parcels from Japan.",
  },
  {
    title: "La Poste Tracking",
    description: "Track Colissimo and Chronopost shipments from France.",
  },
  {
    title: "Deutsche Post Tracking",
    description: "Track DHL Paket and Deutsche Post shipments in Germany.",
  },
];

export const orderCards = [
  {
    title: "Amazon Order Tracking",
    description: "Track your Amazon purchases from order to delivery.",
  },
  {
    title: "eBay Order Tracking",
    description: "Track all your eBay purchases in one place.",
  },
  {
    title: "AliExpress Order Tracking",
    description: "Track AliExpress packages with multiple carrier support.",
  },
  {
    title: "Etsy Order Tracking",
    description: "Track handmade and vintage items from Etsy sellers.",
  },
  {
    title: "Wish Order Tracking",
    description: "Track Wish marketplace orders worldwide.",
  },
  {
    title: "Shopee Order Tracking",
    description: "Track Shopee orders across Southeast Asia.",
  },
  {
    title: "Shein Order Tracking",
    description: "Track your Shein fashion orders globally.",
  },
  {
    title: "Temu Order Tracking",
    description: "Track Temu marketplace deliveries.",
  },
  {
    title: "Walmart Order Tracking",
    description: "Track Walmart online orders and deliveries.",
  },
];

export const cargoCards = [
  {
    title: "Air Cargo Tracking",
    description:
      "Track air freight shipments with major airlines and cargo carriers worldwide.",
  },
  {
    title: "Ocean Freight Tracking",
    description:
      "Track container shipments with leading shipping lines and ports globally.",
  },
  {
    title: "Rail Cargo Tracking",
    description:
      "Track rail freight across continental routes and intermodal networks.",
  },
];

export const footerLinks = {
  product: [
    { label: "Package Tracking", href: "/tracking" },
    { label: "Order Tracking", href: "/orders" },
    { label: "Tracking API", href: "/api-docs" },
    { label: "Mobile App", href: "/mobile" },
    { label: "Browser Extension", href: "/extension" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Help Center", href: "/help" },
    { label: "Documentation", href: "/docs" },
    { label: "Status", href: "/status" },
    { label: "Carrier List", href: "/carriers" },
    { label: "Integrations", href: "/integrations" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "GDPR", href: "/gdpr" },
  ],
};
