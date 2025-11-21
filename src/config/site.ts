/**
 * Site-level data & toggles
 * Safe defaults so the page never breaks if assets are missing.
 */
import heroImage from "../assets/images/display2000x.jpg";
import ovenImage from "../assets/images/ovenx1200.jpg";
import signImage from "../assets/images/signx1200.jpg";
import tomatoImage from "../assets/images/tomatox1200.jpg";
import pieImage from "../assets/images/piex1200.jpg";
import menuPage1 from "../assets/images/menu01.jpg";
import menuPage2 from "../assets/images/menu02.jpg";
const STUDIO_ZERO_URL = import.meta.env.PUBLIC_STUDIO_ZERO_URL || "https://studiozerosite.netlify.app";
const utm_source = "demo-restaurant";
export const linkToSZ = STUDIO_ZERO_URL + "/?utm_source=" + utm_source;

export const toggles = {
  showTextMenu: true,
  showPDFMenu: true, // component will hide if no href
  showOrderingStrip: true,
  showGallery: true,
  noPhotosVariant: false, // if true → spotlights text-only, gallery shows icon/cards
  galleryUniformGrid: true, // force uniform ratio (overridable later)
};

export const business = {
  name: "Harbor Pizzeria",
  phone: "(631) 223-8108",
  email: "hello@yourpizzeria.com",
  address: "123 Main Street, Huntington, NY 11743",
  hours: [
    { days: "Mon-Thu", open: "11:00 AM", close: "9:00 PM" },
    { days: "Fri-Sat", open: "11:00 AM", close: "10:00 PM" },
    { days: "Sun", open: "12:00 PM", close: "8:00 PM" },
  ],
  orderingLinks: [
    //{ label: "Slice", icon: "slice", url: "#", color: "", svg: `` },
    {
      label: "DoorDash",
      icon: "doordash",
      url: "#",
      color: "",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
	<path fill="currentColor" d="M23.071 8.409a6.09 6.09 0 0 0-5.396-3.228H.584A.589.589 0 0 0 .17 6.184L3.894 9.93a1.75 1.75 0 0 0 1.242.516h12.049a1.554 1.554 0 1 1 .031 3.108H8.91a.589.589 0 0 0-.415 1.003l3.725 3.747a1.75 1.75 0 0 0 1.242.516h3.757c4.887 0 8.584-5.225 5.852-10.413" />
</svg>`,
    },
    {
      label: "Uber Eats",
      icon: "ubereats",
      url: "#",
      color: "",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="currentColor" d="M0 2.865v4.997c0 1.883 1.332 3.13 3.084 3.13a2.97 2.97 0 0 0 2.15-.877v.743h1.211V2.864H5.223v4.934c0 1.265-.87 2.12-1.995 2.122c-1.139-.002-1.997-.834-1.997-2.122V2.865zm7.363 0v7.993h1.162v-.732a3 3 0 0 0 2.118.876a3.044 3.044 0 1 0 0-6.086a2.97 2.97 0 0 0-2.107.876V2.865zm9.885 2.056a3.02 3.02 0 0 0-3.035 3.024c0 1.737 1.373 3.037 3.153 3.037a3.12 3.12 0 0 0 2.558-1.243l-.85-.618a2.05 2.05 0 0 1-1.708.858a1.97 1.97 0 0 1-1.97-1.655h4.817v-.379c0-1.734-1.254-3.024-2.964-3.024zm6.163.066a1.6 1.6 0 0 0-1.376.766v-.719h-1.163v5.824h1.174V7.546c0-.902.559-1.484 1.327-1.484h.495V4.989zm-6.203.944a1.844 1.844 0 0 1 1.834 1.486h-3.618a1.844 1.844 0 0 1 1.784-1.486m-6.659.006a2.021 2.021 0 1 1 .002 4.042a2.02 2.02 0 0 1-1.416-.598a2.02 2.02 0 0 1-.585-1.422a2.02 2.02 0 0 1 .584-1.422a2.02 2.02 0 0 1 1.415-.6M0 12.987v7.971h5.722v-1.367H1.546v-1.97H5.61v-1.315H1.545v-1.955h4.176v-1.365zm14.56.41v1.685h-1.15v1.338h1.154v3.143c0 .793.572 1.421 1.6 1.421h1.643l-.006-1.338H16.66c-.348 0-.572-.15-.572-.464v-2.768H17.8v-1.332h-1.706v-1.686zm-5.297 1.527a3.103 3.103 0 1 0 .07 6.205a3 3 0 0 0 1.913-.666v.532h1.517v-5.913h-1.509v.526a3 3 0 0 0-1.92-.684zm11.771.007c-1.585 0-2.7.644-2.7 1.886c0 .86.613 1.421 1.936 1.695l1.448.328c.57.11.722.259.722.49c0 .371-.438.603-1.127.603c-.876 0-1.378-.19-1.573-.848h-1.533c.22 1.231 1.157 2.05 3.049 2.05h.002c1.752 0 2.742-.819 2.742-1.953c0-.806-.585-1.408-1.809-1.667l-1.294-.26c-.751-.136-.988-.274-.988-.546c0-.357.361-.575 1.03-.575c.722 0 1.252.192 1.405.847h1.518c-.086-1.229-.99-2.05-2.827-2.05m-11.567 1.25c1.01.01 1.819.837 1.807 1.847A1.8 1.8 0 0 1 9.45 19.83a1.824 1.824 0 0 1 .018-3.648" />
</svg>`,
    },
    {
      label: "Grubhub",
      icon: "grubhub",
      url: "#",
      color: "",
      svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M20.6138 7.1997c-.0019-.0024-.0716-.0708-.0867-.2003a37.1998 37.1998 0 0 0-.5677-4.0793.6637.6637 0 0 0-.575-.516l-1.9612-.2364c0 .0002-.0213-.0027-.0516 0a.4129.4129 0 0 0-.4129.4128v.6792c.0071.0337-.0345.0156-.0412.0186A27.5178 27.5178 0 0 0 12.9723.2931c-.366-.245-.7355-.293-.9692-.293-.5918-.0016-.9527.293-.9693.293C4.277 4.4686.559 11.243.4155 11.6146c-.1799.3807.0325.8309.4407.9341l1.9457.3747a.6668.6668 0 0 1 .4862.5688c.0155.3437.384 8.0161.8454 10.0062.0076.0609.1743.4985.6482.4986h.0145c1.1318-.0299 2.2639-.0485 3.396-.063a.2198.2198 0 0 0 .2178-.2188c0-.1794-.0283-.0597-.2312-3.9565a.4129.4129 0 0 0-.2024-.323 2.0985 2.0985 0 0 1-1.0208-1.695c-.2262-5.8941.0116-8.2329-.0072-8.2329.0112-.528.8097-.5116.7824.0465-.11 1.8084-.0902 3.6209-.0702 5.4315.0106.6197.9396.6032.929-.0165-.0351-1.9045-.0248-3.8347.0733-5.4615.0065-.5085.7941-.529.7824.0465-.1067 1.7985-.0933 3.601-.0702 5.4016.0097.6192.9387.6048.929-.0145.011.011-.0846-2.8339.0733-5.4346.0112-.528.7824-.5194.7824.0464-.1515 2.6902-.0805 5.386 0 8.0771a2.0975 2.0975 0 0 1-.9104 1.731.4046.4046 0 0 0-.1734.3045s-.0475.4036.13 2.3576c.0542.5713.116 1.1418.1766 1.7125a.2064.2064 0 0 0 .2064.1796 468.6068 468.6068 0 0 1 4.0556.0093.2064.2064 0 0 0 .2064-.1817c.256-2.3421.3159-3.6582.3159-3.6582a.2323.2323 0 0 0-.2065-.225l-1.3419-.1848c.0058.0119-.4402-.0659-.4005-.5347.5357-7.8107 3.109-10.4398 3.109-10.4398a.8257.8257 0 0 1 .125-.1032c.2186-.1583.528-.0676.6265.1837a.8132.8132 0 0 1 .033.188c.222 2.4535.1136 6.6298-.0237 9.8875-.1167 2.7653-.258 4.936-.258 4.936 0 .089.072.161.161.161.7425.0117 1.485.0293 2.2275.0465a.671.671 0 0 0 .6482-.4986c.4614-1.99.8258-9.6625.8454-10.0062a.6647.6647 0 0 1 .4862-.5688l1.9457-.3747c.4082-.1032.6206-.5534.4407-.9341-.0355-.0956-.918-1.8515-2.9707-4.418z"/>
</svg>`,
    },
    {
      label: "Phone",
      icon: "phone",
      url: "tel:16312238108",
      color: "var(--color-primary)",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
</svg>`,
    },
  ],
  socials: [
    {
      label: "facebook",
      url: "https://facebook.com/yourpage",
      color: "",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
	<path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
    </svg>`,
    },
    {
      label: "instagram",
      url: "https://instagram.com/yourpage",
      color: "",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
        </svg>`,
    },
  ],
};

export const specials = [
  {
    name: "Grandma Square",
    blurb: "Slow-rise pan crust, San Marzano sauce, fresh mozz.",
  },
  {
    name: "Hot Honey Pepperoni",
    blurb: "Cup-and-char pepperoni, hot honey drizzle.",
  },
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
      photo: pieImage,
      items: [
        {
          name: "Margherita",
          description: "San Marzano tomatoes, fresh mozz, basil",
          price: 16,
        },
        {
          name: "Pepperoni",
          description: "Cup-and-char pepperoni, hot honey",
          price: 18,
          spicy: 1,
        },
        {
          name: "Truffle Mushroom",
          description: "White truffle oil, cremini mushrooms, mozzarella",
          price: 20,
          vegetarian: true,
        }, // 'vegetarian' optional; won’t render unless you add a badge for it
        {
          name: "Cauliflower Crust",
          description: "Gluten-free base with mozzarella and basil.",
          price: 15,
          glutenFree: true,
        },
      ],
    },
    {
      title: "Pastas",
      photo: "",
      items: [
        {
          name: "Spaghetti Pomodoro",
          description: "House tomatoe sauce, olive oil, Parmesan.",
          price: 18,
        },
        {
          name: "Penne alla Vodka",
          description: "Creamy vodka sauce, basil, a touch of chili.",
          price: 18,
          spicy: 1,
        },
        {
          name: "Rigatoni Bolognese",
          description: "Slow-cooked beef ragu, Parmesan, herbs.",
          price: 20,
        }, // 'vegetarian' optional; won’t render unless you add a badge for it
      ],
    },
    {
      title: "Entrées",
      photo: tomatoImage,
      items: [
        {
          name: "Chicken Parmesan",
          description: "Crispy cutlet, marinara, mozzarella, side of pasta.",
          price: 22,
        },
        {
          name: "Chicken Marsala",
          description: "Mushrooms, marsala wine sauce, fresh herbs.",
          price: 23,
        },
        {
          name: "Eggplant Rollatini",
          description: "Thin-sliced eggplant, ricotta, marinara.",
          price: 23,
        },
      ],
    },
    // { title: "Entrées", items: ["Margherita", "Pepperoni", "Sausage & Peppers"], photo : "/images/tomatox1200.jpg", }, // photo: "/images/menu/pizzas.jpg",

    {
      title: "Salads & Sides",
      photo: "",
      items: [
        {
          name: "Ceasar Salad",
          description: "Romaine, Parmesan, garlic dressing, crutons.",
          price: 18,
        },
        {
          name: "Caprese Salad",
          description: "Fresh mozzarella, tomato, basil, olive oil.",
          price: 18,
        },
        {
          name: "Garlic Knots",
          description: "Oven-baked, brushed with butter and herbs.",
          price: 6,
        },
      ],
    },
    // { title: "Specialty Pies", items: ["Truffle Mushroom", "White Pie", "Hot Honey Pepperoni"] },
    // { title: "Build Your Own", items: ["Choose crust, sauce, cheese, toppings"] },
    // { title: "Salads & Sides", items: ["Caesar", "House", "Garlic Knots"] },
    // { title: "Drinks", items: ["Fountain", "Bottled", "Local Beer (dine-in)", "House Wine (dine-in)"] },
  ],
};

export const assets = {
  // If these are missing, components degrade gracefully (no crashes).
  heroImage, // optional
  gallery: [
    ovenImage,
    signImage,
    tomatoImage,
    // "/images/pie4.jpg",
    // "/images/pie5.jpg",
  ], // can be empty []
  menuImages: [
    menuPage1,
    menuPage2, // optional second page
  ],
  menuPdfHref: "", // leave blank if not available
};
