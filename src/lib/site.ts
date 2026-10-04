/* ============================================================
   DEMO RESTAURANT SITE CONFIGURATION
   ------------------------------------------------------------
   For a paying client, edit ONLY this file (plus the theme in
   src/app/globals.css and fonts in src/app/layout.tsx).

   Restaurant name, tagline, hero copy, signature dishes, menu,
   prices, about text, testimonials, gallery and contact info all
   live here, and every component reads from this file.
   ============================================================ */

type MenuItem = { name: string; desc: string; price: number; tag?: string };
type MenuCat = { label: string; note: string; items: MenuItem[] };
type Dish = { name: string; desc: string; price: number; image: string; alt: string };
type GalleryItem = { src: string; caption: string; aspect: string };
type Testimonial = { quote: string; name: string; role: string; rating: number };
type Experience = { n: number; title: string; text: string };

const img = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const formatNaira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export const site = {
  name: "Demo Restaurant",
  tagline: "Modern dining, bold flavours and memorable moments.",
  monogram: "D",
  short: "Modern dining · Warm hospitality",

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reservations", href: "#reservation" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    headline: ["Good food.", "Good people.", "Good moments."],
    sub: "Modern dining, bold flavours and memorable moments, served your way.",
    image: img("1504674900247-0877df9cc836", 2000),
    alt: "A spread of vibrant dishes served on a dark wooden table at Demo Restaurant",
    meta: "Open daily · Lunch & Dinner",
  },

  intro: {
    eyebrow: "Welcome",
    title: "Made for the moments worth remembering.",
    body: [
      "There is something about gathering around a table. The pause before the first bite, the laughter that stretches an evening, the way a good meal turns strangers into friends.",
      "That is the feeling we cook for at Demo Restaurant. Bold Nigerian flavours and familiar continental favourites, shared in a warm, unhurried room where the conversation matters just as much as the food.",
    ],
    signature: "With love, from our kitchen to your table.",
    image: img("1517248135467-4c7edcad34c4", 1400),
    imageAlt: "Warm, softly lit dining room with candle-lit tables",
  },

  favourites: {
    eyebrow: "A few favourites",
    title: "Dishes people drive back for.",
    note: "A small taste of what our kitchen is known for: every plate made to order.",
    dishes: [
      {
        name: "Smoky Jollof & Grilled Chicken",
        desc: "Slow-fired rice in a deep tomato & pepper base, chargrilled chicken, fried plantain.",
        price: 9500,
        image: "https://images.pexels.com/photos/37538487/pexels-photo-37538487.jpeg?auto=compress&cs=tinysrgb&w=1260",
        alt: "Platter of Nigerian jollof rice with grilled chicken in a modern Abuja cafe",
      },
      {
        name: "Beef Suya Platter",
        desc: "Thin-cut beef, yaji spice, grilled onion and peppers, the way the north does it.",
        price: 12500,
        image: "https://images.pexels.com/photos/36323856/pexels-photo-36323856.jpeg?auto=compress&cs=tinysrgb&w=1000",
        alt: "Beef suya skewers grilling over charcoal at a street stall",
      },
      {
        name: "Char-Grilled Steak",
        desc: "Prime cut, rosemary butter, charred tomatoes and hand-cut chips.",
        price: 18500,
        image: "https://images.pexels.com/photos/4765772/pexels-photo-4765772.jpeg?auto=compress&cs=tinysrgb&w=900",
        alt: "Juicy char-grilled steak sliced on a wooden board",
      },
      {
        name: "Herb-Roasted Salmon",
        desc: "Crisp-skinned salmon, herb butter and seasonal greens.",
        price: 15500,
        image: img("1467003909585-2f8a72700288", 900),
        alt: "Roasted salmon fillet plated with herbs",
      },
      {
        name: "Creamy Truffle Pasta",
        desc: "Silky truffle cream, wild mushrooms and shaved parmesan.",
        price: 13000,
        image: img("1473093295043-cdd812d0e601", 900),
        alt: "Creamy pasta dish finished with herbs and cheese",
      },
      {
        name: "Signature Chocolate Cake",
        desc: "Molten centre, toasted malt crumb and vanilla bean cream.",
        price: 4500,
        image: img("1551024506-0bccd828d307", 900),
        alt: "Layered chocolate cake with berries and cream",
      },
    ] as Dish[],
  },

  menu: {
    eyebrow: "The Menu",
    title: "Eat well, together",
    intro:
      "A menu built on bold local flavours and honest cooking. Everything is made to order, so tell us how you like it.",
    categories: [
      {
        label: "Starters",
        note: "Small plates built for sharing",
        items: [
          { name: "Peppered Suya Skewers", desc: "Chargrilled beef, yaji spice, red onion & peppers.", price: 6500, tag: "Chef's" },
          { name: "Asun Style Beef", desc: "Slow-roasted peppered beef, bell peppers & herbs.", price: 7500 },
          { name: "Royal Pepper Soup", desc: "Assorted meat in a fiery ginger & uziza broth.", price: 6000, tag: "Spicy" },
          { name: "Charred Corn & Avocado", desc: "Smoked corn, avocado, citrus & herb dressing.", price: 5500 },
          { name: "Golden Plantain Chips", desc: "Crispy dodo chips with a smoked pepper dip.", price: 3500 },
        ],
      },
      {
        label: "Mains",
        note: "Robust plates that carry their own",
        items: [
          { name: "Smoky Jollof & Grilled Chicken", desc: "Party-style jollof, chargrilled chicken, fried plantain.", price: 9500, tag: "Chef's" },
          { name: "Egusi Soup & Pounded Yam", desc: "Ground melon soup, assorted meat, fresh greens.", price: 8500, tag: "Spicy" },
          { name: "Ofada Stew & Rice", desc: "Local rice, ayamase pepper stew, assorted meat, fried egg.", price: 8000 },
          { name: "Coconut Rice & Grilled Chicken", desc: "Fragrant coconut rice, grilled chicken, garden salad.", price: 7500 },
          { name: "Grilled Fish & Sweet Potato", desc: "Pan-grilled fish, spicy butter, roasted sweet potato.", price: 10500 },
        ],
      },
      {
        label: "From the Grill",
        note: "Fire-forward, smoke-scented",
        items: [
          { name: "Beef Suya Platter", desc: "Chargrilled suya strips, yaji dusting, grilled veg.", price: 12500, tag: "Chef's" },
          { name: "Char-Grilled T-Bone", desc: "14-day aged beef, chimichurri, hand-cut chips.", price: 18500 },
          { name: "Whole Grilled Croaker", desc: "Butterflied croaker, charred lemon, pepper sauce.", price: 11000 },
          { name: "Peri-Peri Chicken", desc: "Fire-roasted half chicken, smoky peri marinade.", price: 9000, tag: "Spicy" },
          { name: "Charred Lamb Chops", desc: "Rare-cut lamb, rosemary jus, grilled asparagus.", price: 14500 },
        ],
      },
      {
        label: "Sides",
        note: "To round everything out",
        items: [
          { name: "Fried Plantain (Dodo)", desc: "Sweet, caramelised, lightly salted.", price: 2500 },
          { name: "Jollof Rice (Side)", desc: "Our signature rice, portioned for sharing.", price: 3000 },
          { name: "Sweet Potato Fries", desc: "Crispy, smoky, served with aioli.", price: 2800 },
          { name: "Sautéed Greens", desc: "Garden greens, garlic & chili.", price: 2800 },
          { name: "Garden Salad", desc: "Crisp leaves, tomato, cucumber, house dressing.", price: 2500 },
        ],
      },
      {
        label: "Desserts",
        note: "Sweet endings",
        items: [
          { name: "Signature Chocolate Cake", desc: "Molten centre, malt crumb, vanilla cream.", price: 4500 },
          { name: "Vanilla Panna Cotta", desc: "Silky panna cotta, seasonal berry compote.", price: 4000 },
          { name: "Strawberry Cream Gateau", desc: "Layered sponge, fresh cream, glazed berries.", price: 4500 },
          { name: "Chin Chin & Vanilla Gelato", desc: "Warm chin chin, vanilla gelato, honey drizzle.", price: 3500 },
          { name: "Honey & Banana Pancakes", desc: "Fluffy pancakes, caramelised banana, wild honey.", price: 4000 },
        ],
      },
      {
        label: "Drinks",
        note: "Chemicals not included",
        items: [
          { name: "House Chapman", desc: "Citrus, bitters & grenadine, the party classic.", price: 3500 },
          { name: "Chilled Zobo", desc: "Hibiscus, pineapple & ginger, served ice-cold.", price: 2500 },
          { name: "Citrus & Pineapple Juice", desc: "Freshly pressed, no added sugar.", price: 3000 },
          { name: "Spiced Palm Cocktail", desc: "Palm spirit, citrus & warm spices.", price: 4500 },
          { name: "Espresso / Flat White", desc: "House-roasted beans, pulled to order.", price: 2500 },
        ],
      },
    ] as MenuCat[],
    closing: "Vegetarian, vegan and allergy-friendly swaps available on request.",
  },

  about: {
    eyebrow: "Our story",
    title: "Food brings people together.",
    body: [
      "Demo Restaurant was created around a very simple belief: that some of the best moments in life happen at a table. Good food, warm hospitality, music playing low, conversations running late.",
      "Our kitchen draws on the bold flavours of Nigerian cooking and the comfort of familiar continental favourites. Every plate is made to order with fresh ingredients, and every guest is welcomed like someone we have been waiting to see.",
    ],
    badges: ["Fresh ingredients", "Made to order", "Warm hospitality"],
    image: img("1552566626-52f8b828add9", 1200),
    imageAlt: "Guests dining in the warm candle-lit interior",
  },

  experience: {
    eyebrow: "The experience",
    title: "Small details, remembered.",
    intro: "Beyond the plate are the things that make an evening feel effortless.",
    points: [
      { n: 1, title: "Fresh ingredients", text: "Produce chosen for flavour, prepared the moment you order." },
      { n: 2, title: "Warm hospitality", text: "Every table treated like family dropping by for dinner." },
      { n: 3, title: "Made to order", text: "Nothing sits waiting. Your plate begins when you do." },
      { n: 4, title: "Good atmosphere", text: "Low light, great music and space to actually talk." },
      { n: 5, title: "Private dining", text: "A quiet room for the moments that deserve one." },
      { n: 6, title: "Events & celebrations", text: "Birthdays, milestones and big dinners, hosted well." },
    ] as Experience[],
  },

  gallery: {
    eyebrow: "Gallery",
    title: "A visual taste",
    intro: "A few minutes inside our world: the light, the plates, the company.",
    items: [
      { src: "https://images.pexels.com/photos/6937461/pexels-photo-6937461.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "The pass, in full flame", aspect: "aspect-[3/4]" },
      { src: "https://images.pexels.com/photos/37492317/pexels-photo-37492317.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "Seafood, plantain and good company", aspect: "aspect-square" },
      { src: "https://images.pexels.com/photos/7937382/pexels-photo-7937382.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "A slow morning stack", aspect: "aspect-[4/3]" },
      { src: "https://images.pexels.com/photos/37534684/pexels-photo-37534684.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "Whole grilled, pepper and lemon", aspect: "aspect-square" },
      { src: "https://images.pexels.com/photos/6210449/pexels-photo-6210449.jpeg?auto=compress&cs=tinysrgb&w=1000", caption: "Dodo, chicken and corn", aspect: "aspect-[3/4]" },
      { src: img("1466637574441-749b8f19452f", 1000), caption: "Baked at dawn", aspect: "aspect-[4/3]" },
      { src: img("1504754524776-8f4f37790ca0", 1000), caption: "Breakfast, the long way", aspect: "aspect-square" },
      { src: img("1476224203421-9ac39bcb3327", 1000), caption: "Bold, one bowl at a time", aspect: "aspect-[3/4]" },
      { src: img("1432139555190-58524dae6a55", 1000), caption: "Plated, not placed", aspect: "aspect-square" },
      { src: img("1565958011703-44f9829ba187", 1000), caption: "Endings worth saving room for", aspect: "aspect-[4/3]" },
      { src: img("1571115177098-24ec42ed204d", 1000), caption: "Pour & toast", aspect: "aspect-square" },
      { src: img("1559339352-11d035aa65de", 1000), caption: "Set for the night", aspect: "aspect-[4/3]" },
    ] as GalleryItem[],
  },

  testimonials: {
    eyebrow: "Testimonials",
    title: "Word of mouth",
    intro: "What guests say long after the last course is cleared.",
    items: [
      {
        quote: "Everything from the food to the little details felt intentional. You can tell this team cares.",
        name: "Tunde A.",
        role: "Regular guest",
        rating: 5,
      },
      {
        quote: "One of those places where you end up staying longer than planned. The suya alone is worth it.",
        name: "Ngozi E.",
        role: "Dinner with friends",
        rating: 5,
      },
      {
        quote: "We came for dinner and stayed for the music, the conversation and one more dessert.",
        name: "Chidi M.",
        role: "Anniversary dinner",
        rating: 5,
      },
    ] as Testimonial[],
  },

  reservation: {
    eyebrow: "Reservations",
    title: "Save your seat.",
    body: "Tell us when you would like to come and how many of you there will be. We will take it from there and confirm your table by email.",
    success: "Reservation request received.",
    successSub: "We will be in touch shortly to confirm your table. See you soon!",
    occasions: ["Just dinner", "Birthday", "Anniversary", "Date night", "Business dinner", "Celebration"],
  },

  events: {
    eyebrow: "Private dining & celebrations",
    title: "Your occasion, hosted well.",
    body: "From intimate birthdays to lively celebrations, our private room and event team take care of the details so you can enjoy the moment.",
    occasions: ["Birthdays", "Anniversaries", "Corporate dinners", "Small celebrations", "Private gatherings"],
    success: "Inquiry received.",
    successSub: "Thank you. Our events team will reach out shortly to start planning with you.",
    eventTypes: ["Birthday", "Anniversary", "Corporate dinner", "Small celebration", "Private gathering", "Other"],
    image: img("1514933651103-005eec06c04b", 1600),
    imageAlt: "Moody, stylish lounge area ideal for private celebrations",
  },

  contact: {
    eyebrow: "Contact",
    title: "Reservations & enquiries",
    body: "Questions, large tables or event plans: we are one call or email away.",
    phoneDisplay: "+234 800 000 0000",
    phoneHref: "tel:+2348000000000",
    email: "hello@demorestaurant.com",
    emailHref: "mailto:hello@demorestaurant.com",
    hours: [
      { label: "Monday to Thursday", value: "12:00 PM to 10:00 PM" },
      { label: "Friday to Saturday", value: "12:00 PM to 11:00 PM" },
      { label: "Sunday", value: "1:00 PM to 9:00 PM" },
    ],
  },

  finalCta: {
    kicker: "There is always room at our table",
    headlinePrimary: "Come hungry.",
    headlineAccent: "Leave happy.",
    image: img("1414235077428-338989a2e8c0", 2000),
    alt: "An elegant plated dish in the dim, intimate light of the dining room",
  },

  footer: {
    description: "Good food, warm hospitality and moments worth remembering.",
    socials: [
      { label: "Instagram", href: "#" },
      { label: "TikTok", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "X", href: "#" },
    ],
    credit: "Website by neche_codes",
    creditHref: "https://www.instagram.com/neche_kennedy/",
  },
};