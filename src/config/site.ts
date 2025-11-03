/**
 * Site-level data & toggles
 * Safe defaults so the page never breaks if assets are missing.
 */

export const toggles = {
  showTextMenu: true,
  showPDFMenu: true,          // component will hide if no href
  showOrderingStrip: true,
  showGallery: true,
  noPhotosVariant: false,     // if true → spotlights text-only, gallery shows icon/cards
  galleryUniformGrid: true,   // force uniform ratio (overridable later)
};

export const business = {
  name: "Your Pizzeria Name",
  phone: "(555) 123-4567",
  email: "hello@yourpizzeria.com",
  address: "123 Main Street, Huntington, NY 11743",
  hours: [
    { days: "Mon-Thu", open: "11:00 AM", close: "9:00 PM" },
    { days: "Fri-Sat", open: "11:00 AM", close: "10:00 PM" },
    { days: "Sun", open: "12:00 PM", close: "8:00 PM" },
  ],
  orderingLinks: [
    { label: "Slice", url: "#", logo: "" },
    { label: "DoorDash", url: "#", logo: "/images/logos/doordash.svg", color: "#FF3008" },
    { label: "Uber Eats", url: "#", logo: "/images/logos/ubereats.svg" },
    { label: "Grubhub", url: "#", logo: "/images/logos/grubhub.svg" },
  ],
};

export const specials = [
  { name: "Grandma Square", blurb: "Slow-rise pan crust, San Marzano sauce, fresh mozz." },
  { name: "Hot Honey Pepperoni", blurb: "Cup-and-char pepperoni, hot honey drizzle." },
  { name: "Market Veggie", blurb: "Seasonal veg, roasted garlic, basil." },
];

export const highlights = [
  { title: "48-Hour Dough", text: "Cold fermented for depth and lightness." },
  { title: "San Marzano Sauce", text: "Bright, balanced, and simmered low." },
  { title: "Wood-Fired Finish", text: "Crisp edges; tender crumb." },
  { title: "Local Ingredients", text: "Seasonal produce and artisan cheeses." },
  { title: "Gluten-Free Option", text: "Dedicated prep protocols available." },
  { title: "Catering", text: "Pans and party trays by request." },
];

export const menu = {
  categories: [
    {
      title: "Pizzas",
      photo: "",
      items: [
        { name: "Margherita", description: "San Marzano tomatoes, fresh mozz, basil", price: 16, },
        { name: "Pepperoni", description: "Cup-and-char pepperoni, hot honey", price: 18, spicy: 1 },
        { name: "Truffle Mushroom", description: "Cremini, fontina, white truffle oil", price: 20, vegetarian: true }, // 'vegetarian' optional; won’t render unless you add a badge for it
        { name: "Cauliflower Crust", description: "Gluten Free", price: 15, glutenFree: true },
      ],
    },
    {
      title: "Pastas",
      photo: "",
      items: [
        { name: "Spaghetti", description: "San Marzano tomatoes, fresh mozz, basil", price: 18, },
        { name: "Penne alla Vodka", description: "yum", price: 18, spicy: 1 },
        { name: "Rigatoni Bolognese", description: "Cremini, fontina, white truffle oil", price: 20, }, // 'vegetarian' optional; won’t render unless you add a badge for it
      ],
    },
    { title: "Entrées", items: ["Margherita", "Pepperoni", "Sausage & Peppers"], photo : "/images/tomatox1200.jpg", }, // photo: "/images/menu/pizzas.jpg",
    { title: "Specialty Pies", items: ["Truffle Mushroom", "White Pie", "Hot Honey Pepperoni"] },
    { title: "Build Your Own", items: ["Choose crust, sauce, cheese, toppings"] },
    { title: "Salads & Sides", items: ["Caesar", "House", "Garlic Knots"] },
    { title: "Drinks", items: ["Fountain", "Bottled", "Local Beer (dine-in)", "House Wine (dine-in)"] },
  ],
};

export const assets = {
  // If these are missing, components degrade gracefully (no crashes).
  heroImage: "/images/display2000x.jpg",         // optional
  gallery: [
    "/images/ovenx1200.jpg",
    "/images/signx1200.jpg",
    "/images/tomatox1200.jpg",
    // "/images/pie4.jpg",
    // "/images/pie5.jpg",
  ],                                     // can be empty []
  menuPdfHref: "",                       // leave blank if not available
};
