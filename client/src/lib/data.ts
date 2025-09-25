export interface PricingItem {
  length: number;
  breadth: number;
  prices: number[];
}

export interface ProductType {
  id: string;
  name: string;
  description: string;
  image: string;
  thicknesses: string[];
  pricing: PricingItem[];
}

// Define the interface for the enhanced product listing
export interface EnhancedProductType {
  id: string;
  title: string;
  description: string;
  length: number;
  breadth: number;
  height: number;
  price: number;
  additionalDescription: string;
  category: string;
  image: string;
  // Marketplace-style metadata
  rating?: number; // 0-5
  reviewsCount?: number;
  highlights?: string[];
  specs?: Record<string, string>;
  seller?: string;
  warranty?: string;
  returnPolicy?: string;
  delivery?: string;
  badges?: string[];
  codAvailable?: boolean;
  emiAvailable?: boolean;
  // Extended details
  boxContents?: string[];
  careInstructions?: string[];
  certifications?: string[];
  materials?: string[];
  faqs?: { q: string; a: string }[];
  reviews?: { name: string; rating: number; comment: string; date?: string }[];
  qa?: { question: string; answer: string }[];
}

// Static four products (VE1–VE4)

// High-quality mattress images from public folder
export const mattressImages = {
  hybrid: [
    "/assets/images/Hybrid/1.jpg",
    "/assets/images/Hybrid/2.jpg",
    "/assets/images/Hybrid/3.jpg",
    "/assets/images/Hybrid/4.jpg",
    "/assets/images/Hybrid/5.jpg"
  ],
  innerspring: [
    "/assets/images/Innerspring/1.jpg",
    "/assets/images/Innerspring/2.jpg",
    "/assets/images/Innerspring/3.jpg",
    "/assets/images/Innerspring/4.jpg"
  ],
  memoryfoam: [
    "/assets/images/Memory Foam/1.jpg",
    "/assets/images/Memory Foam/2.jpg",
    "/assets/images/Memory Foam/3.jpg",
    "/assets/images/Memory Foam/4.jpg"
  ],
  orthopaedic: [
    "/assets/images/Orthopedic/1.jpg",
    "/assets/images/Orthopedic/2.jpg",
    "/assets/images/Orthopedic/3.jpg",
    "/assets/images/Orthopedic/4.jpg",
    "/assets/images/Orthopedic/5.jpg"
  ]
};

export const allProducts: EnhancedProductType[] = [
  {
    id: 'VG001',
    title: 'Hybrid Mattress',
    description:
      'Our Hybrid Mattresses combine the best of both worlds—advanced pocketed innerspring support and plush memory foam comfort. Designed for international sleep standards, these mattresses deliver superior spinal alignment, motion isolation, and long-lasting durability. The innovative multi-layer construction balances firmness with contouring softness, making it ideal for all types of sleepers—back, side, or stomach. Crafted with premium breathable fabrics and high-density foams, our Hybrid Mattresses ensure cooler nights, reduced pressure points, and enhanced body support. Export-ready and tested for global markets, these mattresses are a preferred choice for retailers, wholesalers, and hospitality projects worldwide. Choose our Hybrid Mattress collection for a perfect fusion of luxury, technology, and ergonomic design—engineered to give your customers restful sleep and consistent quality.',
    additionalDescription:
      'Pocket springs + memory foam for balanced comfort. Breathable, export-ready.',
    category: 'hybrid',
    image: mattressImages.hybrid[0],
    length: 72,
    breadth: 36,
    height: 8,
    price: 0,
    rating: 4.6,
    reviewsCount: 124,
    highlights: [
      'Pocketed springs + memory foam hybrid comfort',
      'Enhanced airflow and cooler sleep',
      'Motion isolation for undisturbed rest',
      'Export-grade durability tested for global markets',
    ],
    specs: {
      Construction: 'Pocket springs + High-density memory foam',
      Cover: 'Premium breathable knit fabric',
      Firmness: 'Medium-Firm',
      Certification: 'ISO 9001-compliant manufacturing',
    },
    seller: 'VIZKO Sleep Co.',
    warranty: '5 Years limited warranty',
    returnPolicy: '7-day replacement on manufacturing defects',
    delivery: 'Free delivery. Dispatched in 2–4 days',
    badges: ['Top Rated', 'Best Seller', 'Free Delivery'],
    codAvailable: true,
    emiAvailable: true,
    boxContents: ['Mattress (vacuum roll-packed)', 'User guide', 'Warranty card'],
    careInstructions: [
      'Rotate the mattress every 3 months',
      'Use a breathable mattress protector',
      'Do not fold or bend for storage',
    ],
    certifications: ['ISO 9001-compliant facility'],
    materials: ['Pocketed springs', 'High-density memory foam', 'Breathable knit cover'],
    faqs: [
      { q: 'Is this good for side sleepers?', a: 'Yes, the hybrid contouring supports side sleepers very well.' },
      { q: 'Does it reduce partner disturbance?', a: 'Yes, pocketed springs and foam layers help isolate motion.' },
    ],
    reviews: [
      { name: 'Rahul S.', rating: 5, comment: 'Very comfortable and supportive. Great build quality!', date: '2025-07-03' },
      { name: 'Mira K.', rating: 4, comment: 'Cooler sleep than my old mattress. Happy with it.' },
      { name: 'Puneet J.', rating: 5, comment: 'Hybrid feel is perfect—no back pain now.' },
      { name: 'Aisha B.', rating: 4, comment: 'Packaging was neat, expanded quickly to full size.' },
    ],
    qa: [
      { question: 'Can this be used on a platform bed?', answer: 'Yes, works well on flat or slatted bases (tight spacing).' },
      { question: 'Does it have odour initially?', answer: 'A mild new-foam smell may be present and dissipates within 24–48 hours.' },
    ],
  },
  {
    id: 'VG002',
    title: 'Innerspring Mattress',
    description:
      'Our Innerspring Mattresses are engineered to deliver reliable comfort, durability, and superior support. Built with high-quality steel coil systems, these mattresses provide excellent spinal alignment, enhanced breathability, and long-lasting performance. The open-coil and pocket spring options ensure balanced firmness, making them suitable for all sleeping positions. Designed for global markets, our Innerspring Mattresses combine traditional craftsmanship with modern technology, offering value-driven comfort for retailers, wholesalers, and hospitality projects worldwide. Each mattress is layered with premium cushioning and breathable fabrics to ensure cooler, more restful nights. Choose our Innerspring Mattress collection for proven durability, export-ready quality, and consistent performance—perfect for international buyers seeking trusted comfort at competitive pricing.',
    additionalDescription:
      'Durable steel coil systems with breathable build. Balanced firmness and airflow. Trusted global quality.',
    category: 'innerspring',
    image: mattressImages.innerspring[0],
    length: 72,
    breadth: 36,
    height: 8,
    price: 0,
    rating: 4.3,
    reviewsCount: 98,
    highlights: [
      'High-quality steel coil support',
      'Excellent breathability and airflow',
      'Balanced firmness for all sleep positions',
      'Value-driven comfort for global markets',
    ],
    specs: {
      Springs: 'Tempered steel coils',
      Insulation: 'High-resilience foam padding',
      Cover: 'Airy woven fabric',
      Firmness: 'Medium',
    },
    seller: 'VIZKO Sleep Co.',
    warranty: '3 Years limited warranty',
    returnPolicy: '7-day replacement on manufacturing defects',
    delivery: 'Free delivery. Dispatched in 2–4 days',
    badges: ['Value Pick', 'Free Delivery'],
    codAvailable: true,
    emiAvailable: true,
    boxContents: ['Mattress (roll-packed)', 'User guide'],
    careInstructions: ['Air the mattress on delivery', 'Use a protector', 'Rotate 180° periodically'],
    certifications: ['ISO 9001-compliant facility'],
    materials: ['Tempered steel coils', 'Resilient foam', 'Airy woven cover'],
    faqs: [
      { q: 'Is the firmness adjustable?', a: 'No, but it offers balanced medium support for most users.' },
    ],
    reviews: [
      { name: 'Ankit P.', rating: 4, comment: 'Solid value for money. Breathable and supportive.' },
      { name: 'Leena V.', rating: 4, comment: 'Classic feel, good support across the surface.' },
    ],
    qa: [
      { question: 'Does it need a box spring?', answer: 'No, a sturdy flat or slatted base is sufficient.' },
      { question: 'Any noise from springs?', answer: 'No, quality coils and padding minimise noise during movement.' },
    ],
  },
  {
    id: 'VG003',
    title: 'Memory Foam Mattress',
    description:
      'Our Memory Foam Mattresses are crafted to deliver exceptional pressure relief, body contouring, and all-night comfort. Using advanced viscoelastic foam technology, these mattresses adapt to every body shape, ensuring proper spinal alignment and reduced motion transfer. This makes them an ideal choice for couples, families, and hospitality projects worldwide. Built with export-quality standards, each mattress features multiple layers of high-density memory foam combined with breathable fabrics for superior airflow and temperature regulation. This guarantees cooler nights, long-lasting durability, and consistent performance. Perfect for international retailers, wholesalers, and hotel suppliers, our Memory Foam Mattress collection is designed to meet global demand for premium sleep solutions—offering luxury, comfort, and proven support at competitive export pricing.',
    additionalDescription:
      'High-density viscoelastic foams with cooling, motion isolation, and premium comfort.',
    category: 'memoryfoam',
    image: mattressImages.memoryfoam[0],
    length: 72,
    breadth: 36,
    height: 8,
    price: 0,
    rating: 4.7,
    reviewsCount: 156,
    highlights: [
      'Advanced viscoelastic pressure relief',
      'High-density foam layers for longevity',
      'Reduced motion transfer—great for couples',
      'Cooling fabric promotes airflow',
    ],
    specs: {
      Foam: 'HD memory foam + support foam core',
      Cover: 'Cool-touch breathable knit',
      Firmness: 'Medium-Soft',
      Certification: 'ISO 9001-compliant manufacturing',
    },
    seller: 'VIZKO Sleep Co.',
    warranty: '5 Years limited warranty',
    returnPolicy: '7-day replacement on manufacturing defects',
    delivery: 'Free delivery. Dispatched in 2–4 days',
    badges: ['Top Rated', 'Comfort Choice', 'Free Delivery'],
    codAvailable: true,
    emiAvailable: true,
    boxContents: ['Mattress (vacuum roll-packed)', 'Warranty card'],
    careInstructions: ['Allow 24–48h to expand fully', 'Use protector', 'Avoid liquids'],
    certifications: ['ISO 9001-compliant facility'],
    materials: ['HD memory foam', 'Support foam core', 'Cool-touch knit cover'],
    faqs: [
      { q: 'Does it sleep hot?', a: 'Cooling fabric and airflow channels help regulate temperature.' },
    ],
    reviews: [
      { name: 'Neha R.', rating: 5, comment: 'Pressure relief is excellent. Woke up without aches.' },
      { name: 'Vikram T.', rating: 4, comment: 'Great for couples; minimal motion transfer.' },
      { name: 'Rohit M.', rating: 5, comment: 'Love the contouring. Sleep quality improved a lot.' },
    ],
    qa: [
      { question: 'Is flipping required?', answer: 'No, rotate only; do not flip.' },
      { question: 'How long to expand fully?', answer: 'Usually 24–48 hours depending on room conditions.' },
    ],
  },
  {
    id: 'VG004',
    title: 'Orthopaedic Mattress',
    description:
      'Our Orthopedic Mattresses are specially engineered to provide firm support, proper spinal alignment, and targeted pressure relief for a healthier sleep experience. Designed in consultation with ergonomic experts, these mattresses help reduce back pain, improve posture, and support natural body curves. Crafted with export-quality materials, each mattress features high-density foam or advanced spring systems combined with breathable fabrics for maximum durability and comfort. Ideal for people of all age groups, especially those seeking therapeutic support, our Orthopedic Mattress collection is widely preferred by international retailers, healthcare providers, and the hospitality industry. With long-lasting performance, superior comfort, and clinically inspired design, our Orthopedic Mattresses deliver consistent quality for global markets—making them a reliable choice for wholesalers and distributors worldwide.',
    additionalDescription:
      'Firm, ergonomic support for spinal alignment and pressure relief. Durable and breathable build.',
    category: 'orthopaedic',
    image: mattressImages.orthopaedic[0],
    length: 72,
    breadth: 36,
    height: 8,
    price: 0,
    rating: 4.5,
    reviewsCount: 111,
    highlights: [
      'Ergonomic support for spinal alignment',
      'Targeted pressure relief zones',
      'Breathable build for all climates',
      'Designed with ergonomic experts',
    ],
    specs: {
      Core: 'High-density ortho foam / advanced spring system',
      Firmness: 'Firm',
      Cover: 'Breathable knit fabric',
      UseCase: 'Therapeutic support and posture care',
    },
    seller: 'VIZKO Sleep Co.',
    warranty: '5 Years limited warranty',
    returnPolicy: '7-day replacement on manufacturing defects',
    delivery: 'Free delivery. Dispatched in 2–4 days',
    badges: ['Doctor Recommended', 'Free Delivery'],
    codAvailable: true,
    emiAvailable: true,
    boxContents: ['Mattress (vacuum roll-packed)', 'User guide', 'Warranty card'],
    careInstructions: [
      'Rotate the mattress every 3 months',
      'Use a breathable mattress protector',
      'Do not fold or bend for storage',
      'Spot clean with mild detergent only',
    ],
    certifications: ['ISO 9001-compliant facility'],
    materials: ['High-density ortho foam', 'Breathable knit fabric'],
    faqs: [
      { q: 'Is this suitable for back pain?', a: 'Yes, it offers firm ortho support for spinal alignment.' },
      { q: 'Can I use it on a slatted bed?', a: 'Yes, ensure slats are strong and evenly spaced.' },
    ],
    reviews: [
      { name: 'Sonia D.', rating: 5, comment: 'Firm and supportive. Helped with lower back pain.' },
      { name: 'Arun G.', rating: 4, comment: 'Good orthopedic support, sleeping posture feels better.' },
    ],
    qa: [
      { question: 'Is there edge support?', answer: 'Yes, dense perimeter offers improved edge stability.' },
      { question: 'Is it too hard?', answer: 'It is firm by design for ortho support but comfortable for most users.' },
    ],
  },
];

// Keeping the original data for compatibility with existing components
export const productData: Record<string, ProductType> = {
  hybrid: {
    id: "hybrid",
    name: "Hybrid",
    description: "Our premium Hybrid mattresses combine the supportive strength of pocket springs with the comfort of high-density memory foam. This perfect balance delivers exceptional pressure relief and responsive support, making it ideal for luxury hotels and discerning retailers.",
    image: "/assets/images/Hybrid/1.jpg",
    thicknesses: ["4", "6", "8"],
    pricing: [
      {
        length: 72,
        breadth: 36,
        prices: [8500, 12000, 15000]
      },
      {
        length: 75,
        breadth: 36,
        prices: [9000, 12500, 16000]
      },
      {
        length: 78,
        breadth: 60,
        prices: [12000, 16000, 20000]
      }
    ]
  },
  innerspring: {
    id: "innerspring",
    name: "Inner Spring",
    description: "Our Inner Spring mattresses feature premium coil systems that provide responsive support and excellent durability. The interconnected spring design promotes airflow while delivering consistent comfort across the entire surface.",
    image: "/assets/images/Innerspring/1.jpg",
    thicknesses: ["6", "8"],
    pricing: [
      {
        length: 72,
        breadth: 36,
        prices: [11000, 14000]
      },
      {
        length: 75,
        breadth: 36,
        prices: [11500, 15000]
      },
      {
        length: 78,
        breadth: 60,
        prices: [15000, 19000]
      }
    ]
  },
  memoryfoam: {
    id: "memoryfoam",
    name: "Memory Foam",
    description: "Experience the ultimate in pressure-relieving comfort with our Memory Foam mattresses. The high-density foam contours perfectly to your body, reducing pressure points and providing extraordinary support throughout the night.",
    image: "/assets/images/Memory Foam/1.jpg",
    thicknesses: ["4", "6", "8"],
    pricing: [
      {
        length: 72,
        breadth: 36,
        prices: [9500, 13000, 16500]
      },
      {
        length: 75,
        breadth: 36,
        prices: [10000, 13500, 17500]
      },
      {
        length: 78,
        breadth: 60,
        prices: [13000, 17000, 22000]
      }
    ]
  },
  orthopaedic: {
    id: "orthopaedic",
    name: "Orthopaedic",
    description: "Our Orthopaedic mattresses are specifically designed to provide proper spinal alignment and therapeutic support. These mattresses feature zones of varied firmness to ensure proper ergonomic support for different parts of the body.",
    image: "/assets/images/Orthopedic/1.jpg",
    thicknesses: ["6", "8"],
    pricing: [
      {
        length: 72,
        breadth: 36,
        prices: [13000, 16500]
      },
      {
        length: 75,
        breadth: 36,
        prices: [13500, 17000]
      },
      {
        length: 78,
        breadth: 60,
        prices: [17500, 22000]
      }
    ]
  }
};

