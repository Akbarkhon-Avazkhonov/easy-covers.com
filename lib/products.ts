export interface Product {
  id: string;
  name: string;
  category: string;
  amazonUrl: string;
  image: string;
  keyFeatures: string[];
  pros: string[];
  cons: string[];
  score: number;
}

export const products: Product[] = [
  {
    "id": "spigen-tough-magsafe",
    "name": "Spigen Tough Armor",
    "category": "Rugged Cases",
    "amazonUrl": "https://www.amazon.com/dp/B0G2T9SG37",
    "image": "https://m.media-amazon.com/images/I/71FW-IwjXmL._AC_SX425_.jpg",
    "keyFeatures": [
      "Extreme Impact Foam",
      "MagSafe Compatible",
      "Kickstand Included"
    ],
    "pros": [
      "Ultimate drop protection",
      "Built-in kickstand",
      "Strong magnets"
    ],
    "cons": [
      "Slightly bulky",
      "Design is very industrial"
    ],
    "score": 92
  },
  {
    "id": "spigen-military-iphone",
    "name": "Spigen Military Grade",
    "category": "Rugged Cases",
    "amazonUrl": "https://www.amazon.com/dp/B0D444WYX1",
    "image": "https://m.media-amazon.com/images/I/61mHaspEfOL._AC_SY445_.jpg",
    "keyFeatures": [
      "Military Standard Drop Tested",
      "Anti-Slip Grip",
      "Minimalist Rugged Vibe"
    ],
    "pros": [
      "MIL-STD drop protection",
      "Excellent grip",
      "Tactile buttons"
    ],
    "cons": [
      "Attracts fingerprints",
      "Harder to install/remove"
    ],
    "score": 88
  },
  {
    "id": "spigen-armor-s24",
    "name": "Spigen Armor S24 Ultra",
    "category": "Rugged Cases",
    "amazonUrl": "https://www.amazon.com/dp/B0BJSFNCNJ",
    "image": "https://m.media-amazon.com/images/I/61BmQzaTQkL._AC_SX425_.jpg",
    "keyFeatures": [
      "S-Pen Accessibility",
      "Dual Layer Design",
      "Raised Edges"
    ],
    "pros": [
      "Perfect S-Pen cutout",
      "Massive camera protection",
      "Very durable"
    ],
    "cons": [
      "Heavy",
      "Mutes device design"
    ],
    "score": 90
  },
  {
    "id": "spigen-classic-galaxy",
    "name": "Spigen Classic Galaxy",
    "category": "Rugged Cases",
    "amazonUrl": "https://www.amazon.com/dp/B0BXFL9XBX",
    "image": "https://m.media-amazon.com/images/I/61LUdeEY4DL._AC_SX425_.jpg",
    "keyFeatures": [
      "Classic Slim Fit",
      "Carbon Fiber Texture",
      "Shock Absorption"
    ],
    "pros": [
      "Slimmer than other tough cases",
      "Stylish carbon accents",
      "Affordable"
    ],
    "cons": [
      "Less intense drop rating",
      "Limited color options"
    ],
    "score": 85
  },
  {
    "id": "otterbox-symmetry-magsafe",
    "name": "OtterBox Symmetry MagSafe",
    "category": "Clear Cases",
    "amazonUrl": "https://www.amazon.com/dp/B0CGCH8223",
    "image": "https://m.media-amazon.com/images/I/513V3w2TDuL._AC_SX425_.jpg",
    "keyFeatures": [
      "Anti-Yellowing Tech",
      "Flawless MagSafe",
      "Drop+ Protection"
    ],
    "pros": [
      "Best-in-class clear coat",
      "Very protective",
      "Lifetime warranty"
    ],
    "cons": [
      "Expensive",
      "Buttons are extremely stiff initially"
    ],
    "score": 89
  },
  {
    "id": "speck-clear-iphone",
    "name": "Speck Clear iPhone",
    "category": "Clear Cases",
    "amazonUrl": "https://www.amazon.com/dp/B0CFVYRYXX",
    "image": "https://m.media-amazon.com/images/I/718mcqu9f2L._AC_SX425_.jpg",
    "keyFeatures": [
      "Microban Protection",
      "Ultra Clear",
      "13-Foot Drop Tested"
    ],
    "pros": [
      "Microbial protection built-in",
      "13ft drop rating remains clear",
      "Good value"
    ],
    "cons": [
      "Scratches fairly easily",
      "Slippery sides"
    ],
    "score": 82
  },
  {
    "id": "otterbox-symmetry-clear",
    "name": "OtterBox Symmetry Clear",
    "category": "Clear Cases",
    "amazonUrl": "https://www.amazon.com/dp/B0C5JW3SMB",
    "image": "https://m.media-amazon.com/images/I/71cchOVIBoL._AC_SY445_.jpg",
    "keyFeatures": [
      "Seamless Design",
      "No MagSafe Ring View",
      "Recycled Plastics"
    ],
    "pros": [
      "Clean look without white ring",
      "Sustainable packaging",
      "Sturdy build"
    ],
    "cons": [
      "No magnetic enhancements",
      "Expensive"
    ],
    "score": 80
  },
  {
    "id": "samsonite-leather-portfolio",
    "name": "Samsonite Leather Portfolio",
    "category": "Premium Materials",
    "amazonUrl": "https://www.amazon.com/dp/B07QX1RPQM",
    "image": "https://m.media-amazon.com/images/I/91FMC6sLZXL._AC_SY395_.jpg",
    "keyFeatures": [
      "Genuine Leather",
      "Card Slots",
      "Executive Finish"
    ],
    "pros": [
      "Extremely professional look",
      "Ages beautifully with patina",
      "Replaces wallet"
    ],
    "cons": [
      "Bulky in pocket",
      "Leather requires maintenance"
    ],
    "score": 93
  },
  {
    "id": "apple-finewoven",
    "name": "Apple FineWoven Case",
    "category": "Premium Materials",
    "amazonUrl": "https://www.amazon.com/dp/B0CHWV7J2W",
    "image": "https://m.media-amazon.com/images/I/51yjgy8YEtL._AC_SX342_.jpg",
    "keyFeatures": [
      "Microtwill Fabric",
      "Exact Apple Fit",
      "Eco-Friendly"
    ],
    "pros": [
      "Incredibly soft texture",
      "68% post-consumer content",
      "Official Apple colors"
    ],
    "cons": [
      "Shows scuffs permanently",
      "Not water resistant"
    ],
    "score": 75
  },
  {
    "id": "elago-mag-silicone",
    "name": "elago Magnetic Silicone",
    "category": "Silicone Cases",
    "amazonUrl": "https://www.amazon.com/dp/B0F5PWNWDF",
    "image": "https://m.media-amazon.com/images/I/61FPaOmwK5L._AC_SX425_.jpg",
    "keyFeatures": [
      "Liquid Silicone",
      "Microfiber Lining",
      "Magnetic Ring"
    ],
    "pros": [
      "Feels just like official case",
      "Great color options",
      "Strong magnet"
    ],
    "cons": [
      "Attracts lint in pocket",
      "Can peel at edges over time"
    ],
    "score": 87
  },
  {
    "id": "elago-silicone-a",
    "name": "elago Protective Silicone A",
    "category": "Silicone Cases",
    "amazonUrl": "https://www.amazon.com/dp/B0FWJQF1K5",
    "image": "https://m.media-amazon.com/images/I/61Q0MBmFBDL._AC_SX425_.jpg",
    "keyFeatures": [
      "Pure Silicone",
      "Raised Lip",
      "Pastel Tones"
    ],
    "pros": [
      "Very affordable",
      "Excellent shock absorption",
      "Vibrant colors"
    ],
    "cons": [
      "Sticky texture grabs fabric",
      "No MagSafe"
    ],
    "score": 81
  },
  {
    "id": "elago-silicone-b",
    "name": "elago Protective Silicone B",
    "category": "Silicone Cases",
    "amazonUrl": "https://www.amazon.com/dp/B0FWJQR84C",
    "image": "https://m.media-amazon.com/images/I/61KdxlGEdEL._AC_SX425_.jpg",
    "keyFeatures": [
      "Impact Resistant",
      "Anti-Slip",
      "Microfiber Core"
    ],
    "pros": [
      "Soft-touch finish",
      "Great drop protection",
      "Doesn't scratch phone"
    ],
    "cons": [
      "Lint magnet",
      "Slightly thick for silicone"
    ],
    "score": 82
  },
  {
    "id": "peel-super-thin",
    "name": "PEEL Super Thin",
    "category": "Ultra-Thin Cases",
    "amazonUrl": "https://www.amazon.com/dp/B0CG6VZB1T",
    "image": "https://m.media-amazon.com/images/I/51lId8EafOL._AC_SX425_.jpg",
    "keyFeatures": [
      "0.33mm Thin",
      "Branding Free",
      "Matte Finish"
    ],
    "pros": [
      "Literally feels like no case",
      "Zero branding",
      "Perfectly flush camera lip"
    ],
    "cons": [
      "Almost zero drop protection",
      "Can stretch out over time"
    ],
    "score": 85
  },
  {
    "id": "apple-clear-pro-max",
    "name": "Apple iPhone Clear",
    "category": "Ultra-Thin Cases",
    "amazonUrl": "https://www.amazon.com/dp/B0FK3QGK3X",
    "image": "https://m.media-amazon.com/images/I/71X3+qBqtEL._AC_SX425_.jpg",
    "keyFeatures": [
      "Optical Clear Polycarbonate",
      "Scratch Resistant Coating",
      "Official Fit"
    ],
    "pros": [
      "Perfect fit and finish",
      "Does not yellow ever",
      "Shows phone design purely"
    ],
    "cons": [
      "Very slippery",
      "Bottom is exposed",
      "Cracks if dropped on hard surface"
    ],
    "score": 79
  },
  {
    "id": "elago-clear-galaxy",
    "name": "elago Clear Galaxy",
    "category": "Ultra-Thin Cases",
    "amazonUrl": "https://www.amazon.com/dp/B09QW2X856",
    "image": "https://m.media-amazon.com/images/I/712zg9OPovL._AC_SX425_.jpg",
    "keyFeatures": [
      "Hybrid Tech",
      "Anti-Yellow Resin",
      "Micro-Dot Pattern"
    ],
    "pros": [
      "Micro-dots prevent wet look",
      "Very cheap",
      "Good grip"
    ],
    "cons": [
      "Will yellow eventually",
      "Very basic"
    ],
    "score": 76
  },
  {
    "id": "zagg-invisible-shield",
    "name": "ZAGG Invisible Shield",
    "category": "Screen Protectors",
    "amazonUrl": "https://www.amazon.com/dp/B0B9DPN186",
    "image": "https://m.media-amazon.com/images/I/61ZCbDXNRIL._AC_SX425_.jpg",
    "keyFeatures": [
      "Glass Elite",
      "Anti-Microbial",
      "Reinforced Edges"
    ],
    "pros": [
      "Extremely strong glass",
      "Lifetime replacements",
      "Flawless touch sensitivity"
    ],
    "cons": [
      "Very expensive",
      "Installation requires patience"
    ],
    "score": 91
  },
  {
    "id": "mothca-anti-glare",
    "name": "Mothca Anti-Glare Glass",
    "category": "Screen Protectors",
    "amazonUrl": "https://www.amazon.com/dp/B0B96P3Y77",
    "image": "https://m.media-amazon.com/images/I/619rlgl2rzL._AC_SX425_.jpg",
    "keyFeatures": [
      "Matte Finish",
      "Anti-Fingerprint",
      "Smooth Glide"
    ],
    "pros": [
      "Zero glare in sunlight",
      "Feels amazing for gaming/swiping",
      "No smudges"
    ],
    "cons": [
      "Reduces screen sharpness slightly",
      "Adds a grainy texture to whites"
    ],
    "score": 86
  },
  {
    "id": "wireless-station-airpods",
    "name": "AirPods Charging Station",
    "category": "Wireless Chargers",
    "amazonUrl": "https://www.amazon.com/dp/B0B3RC6M94",
    "image": "https://m.media-amazon.com/images/I/81zu+cSf-qL._AC_SY355_.jpg",
    "keyFeatures": [
      "3-in-1 Design",
      "Fast Charge 15W",
      "LED Indicator"
    ],
    "pros": [
      "Charges phone, watch, and buds",
      "Cleans up nightstand cable mess",
      "Compact stand"
    ],
    "cons": [
      "Watch charger sometimes finicky",
      "Bright LED at night"
    ],
    "score": 84
  },
  {
    "id": "samsung-wireless-univ",
    "name": "Samsung Wireless Univ.",
    "category": "Wireless Chargers",
    "amazonUrl": "https://www.amazon.com/dp/B09MV4SRP1",
    "image": "https://m.media-amazon.com/images/I/51w1ScBsg1L._AC_SX355_.jpg",
    "keyFeatures": [
      "Fan Cooling",
      "15W Fast Charge",
      "Flat Pad Design"
    ],
    "pros": [
      "Built-in fan prevents overheating",
      "Works with all Qi devices",
      "Reliable power delivery"
    ],
    "cons": [
      "Fan has an audible hum",
      "Phone must be positioned exactly right"
    ],
    "score": 88
  },
  {
    "id": "anker-magsafe-bank",
    "name": "Anker Ultra-Slim MagSafe",
    "category": "Magnetic Power Banks",
    "amazonUrl": "https://www.amazon.com/dp/B0F8HXYD46",
    "image": "https://m.media-amazon.com/images/I/51yCHZ3+xfL._AC_SX425_.jpg",
    "keyFeatures": [
      "5000mAh Capacity",
      "Ultra Slim Profile",
      "Strong Magnets"
    ],
    "pros": [
      "Perfectly snaps to iPhone",
      "Does not block camera",
      "Premium Anker build quality"
    ],
    "cons": [
      "5000mAh only gives 80% charge",
      "Charging speed maxes at 7.5W"
    ],
    "score": 92
  },
  {
    "id": "verbatim-essential-power",
    "name": "Verbatim Essential Power",
    "category": "Magnetic Power Banks",
    "amazonUrl": "https://www.amazon.com/dp/B0F2MHKVSZ",
    "image": "https://m.media-amazon.com/images/I/61m-ixXxIeL._AC_SY355_.jpg",
    "keyFeatures": [
      "10000mAh Capacity",
      "Digital Display",
      "Pass-through charging"
    ],
    "pros": [
      "Double the battery life",
      "Exact percentage display",
      "Affordable"
    ],
    "cons": [
      "Very thick and heavy",
      "Magnets are weaker than Anker"
    ],
    "score": 83
  }
];