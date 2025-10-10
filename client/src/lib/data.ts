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
      'Sleep smarter with the Hybrid Mattress from Vizko Global, blending adaptive foam layers with responsive pocket springs for unmatched comfort and support. This innovative design provides dual firmness, ensuring pressure relief without compromising edge-to-edge stability. The airflow system keeps your bed cool and fresh, while the zoned support structure adapts to every body shape and sleeping style. Crafted for durability and balanced comfort, it delivers luxury hotel-like sleep with enhanced resilience and body alignment. Perfect for all sleepers, Vizko Global’s hybrid mattress redefines premium rest through technology, design, and superior materials.',
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
      'Rediscover timeless comfort with the Innerspring Mattress by Vizko Global, crafted with high-quality coil support technology for firm yet responsive comfort. Its traditional spring system ensures optimal body weight distribution and sleep stability, while the breathable quilted top enhances softness and airflow. Designed for long-lasting performance, this mattress combines bounce, support, and ventilation for a refreshing sleep experience. Perfect for those who prefer a classic, resilient feel, the innerspring structure minimizes motion transfer and enhances durability. Choose Vizko Global’s innerspring mattress for enduring quality, luxurious comfort, and reliable sleep support every night.',
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
      'Experience unparalleled relaxation with the Memory Foam Mattress from Vizko Global, crafted to deliver adaptive support and superior pressure relief. The advanced cooling gel foam and body contour design ensure balanced spine alignment and lasting comfort. With motion isolation technology and breathable sleep surface, it minimizes partner disturbance while maintaining freshness all night. Ideal for side sleepers and those seeking deep sleep comfort, this luxury foam mattress combines plush softness with orthopedic-grade support, providing durability, resilience, and restful sleep. Choose innovation, comfort, and wellness — redefine your sleep experience with Vizko Global’s premium memory foam range.',
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
      'The Orthopedic Mattress from Vizko Global offers exceptional spine support and posture alignment, ideal for those seeking firm, healthy rest. Engineered with high-density foam and an ergonomic design, it relieves pressure points and promotes natural body positioning. Recommended for back pain relief and improved joint support, this doctor-approved mattress ensures therapeutic comfort and restorative sleep night after night. Its firm base enhances durability while maintaining gentle cushioning for long-lasting resilience. Designed for both comfort and care, Vizko Global’s orthopedic mattress delivers the perfect balance between medical-grade firmness and luxurious rest.',
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

