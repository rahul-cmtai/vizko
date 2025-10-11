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
  ],
  cushions: [
    "/assets/images/Cushions/1.jpg",
    "/assets/images/Cushions/2.jpg",
    "/assets/images/Cushions/3.jpg",
    "/assets/images/Cushions/4.jpg",
    "/assets/images/Cushions/5.jpg"
  ],
  cushioncovers: [
    "/assets/images/Cushions/1.jpg",
    "/assets/images/Cushions/2.jpg"
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
    },
    seller: 'VIZKO Sleep Co.',
    warranty: '5 Years limited warranty',
    returnPolicy: '7-day replacement on manufacturing defects',
    delivery: 'Dispatched in 2–4 days',
    badges: ['Top Rated', 'Best Seller'],
    codAvailable: true,
    emiAvailable: true,
    boxContents: ['Mattress (vacuum roll-packed)', 'User guide', 'Warranty card'],
    careInstructions: [
      'Rotate the mattress every 3 months',
      'Use a breathable mattress protector',
      'Do not fold or bend for storage',
    ],
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
    delivery: 'Dispatched in 2–4 days',
    badges: ['Value Pick'],
    codAvailable: true,
    emiAvailable: true,
    boxContents: ['Mattress (roll-packed)', 'User guide'],
    careInstructions: ['Air the mattress on delivery', 'Use a protector', 'Rotate 180° periodically'],
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
    },
    seller: 'VIZKO Sleep Co.',
    warranty: '5 Years limited warranty',
    returnPolicy: '7-day replacement on manufacturing defects',
    delivery: 'Dispatched in 2–4 days',
    badges: ['Top Rated', 'Comfort Choice'],
    codAvailable: true,
    emiAvailable: true,
    boxContents: ['Mattress (vacuum roll-packed)', 'Warranty card'],
    careInstructions: ['Allow 24–48h to expand fully', 'Use protector', 'Avoid liquids'],
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
    delivery: 'Dispatched in 2–4 days',
    badges: ['Doctor Recommended'],
    codAvailable: true,
    emiAvailable: true,
    boxContents: ['Mattress (vacuum roll-packed)', 'User guide', 'Warranty card'],
    careInstructions: [
      'Rotate the mattress every 3 months',
      'Use a breathable mattress protector',
      'Do not fold or bend for storage',
      'Spot clean with mild detergent only',
    ],
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
  // Cushion Products
  {
    id: 'VC001',
    title: 'Premium Cushion Set',
    description:
      'Enhance your comfort with our Premium Cushion Set from Vizko Global, featuring luxurious fabrics and premium fillings for ultimate relaxation. These cushions are designed with ergonomic support and stylish aesthetics, perfect for sofas, chairs, and beds. The high-quality materials ensure durability while providing exceptional comfort and style. Each cushion is carefully crafted with attention to detail, offering both functionality and decorative appeal. Transform your living space with these elegant cushions that combine comfort, quality, and contemporary design.',
    additionalDescription:
      'Luxury fabric with premium filling. Ergonomic design for ultimate comfort.',
    category: 'cushions',
    image: mattressImages.cushions[0],
    length: 20,
    breadth: 20,
    height: 6,
    price: 2500,
    rating: 4.5,
    reviewsCount: 89,
    highlights: [
      'Premium fabric with soft, durable construction',
      'Ergonomic design for optimal comfort',
      'Easy to clean and maintain',
      'Export-quality materials and craftsmanship',
    ],
    specs: {
      Material: 'Premium cotton blend fabric',
      Filling: 'High-density foam with fiber blend',
      Size: '20" x 20" x 6"',
      Care: 'Machine washable cover',
    },
    seller: 'VIZKO Home Collection',
    warranty: '2 Years limited warranty',
    returnPolicy: '7-day replacement on manufacturing defects',
    delivery: 'Dispatched in 1–3 days',
    badges: ['Premium Quality', 'Easy Care'],
    codAvailable: true,
    emiAvailable: false,
    boxContents: ['Cushion set (2 pieces)', 'Care instructions', 'Warranty card'],
    careInstructions: [
      'Machine wash on gentle cycle',
      'Air dry or tumble dry on low heat',
      'Fluff regularly to maintain shape',
    ],
    materials: ['Premium cotton blend', 'High-density foam', 'Fiber filling'],
    faqs: [
      { q: 'Are these cushions suitable for outdoor use?', a: 'These are designed for indoor use. For outdoor, please check our outdoor collection.' },
      { q: 'Can I buy individual cushions?', a: 'Yes, individual cushions are available. Contact us for custom orders.' },
    ],
    reviews: [
      { name: 'Priya M.', rating: 5, comment: 'Very comfortable and stylish. Perfect for my sofa!', date: '2025-01-15' },
      { name: 'Raj K.', rating: 4, comment: 'Good quality fabric and comfortable to use.', date: '2025-01-10' },
      { name: 'Sneha P.', rating: 5, comment: 'Love the design and comfort. Great value for money.', date: '2025-01-08' },
    ],
    qa: [
      { question: 'What sizes are available?', answer: 'We offer 20x20, 18x18, and 16x16 inch sizes.' },
      { question: 'Are replacement covers available?', answer: 'Yes, replacement covers are available in matching colors.' },
    ],
  },
  {
    id: 'VC002',
    title: 'Memory Foam Cushion',
    description:
      'Experience the ultimate comfort with our Memory Foam Cushion from Vizko Global. This innovative cushion features memory foam technology that contours to your body shape, providing personalized support and pressure relief. Perfect for long sitting sessions, this cushion adapts to your unique posture and provides consistent comfort throughout the day. The breathable cover ensures proper air circulation while the memory foam core offers superior durability and support.',
    additionalDescription:
      'Memory foam technology for personalized comfort. Breathable and durable design.',
    category: 'cushions',
    image: mattressImages.cushions[1],
    length: 18,
    breadth: 18,
    height: 4,
    price: 1800,
    rating: 4.3,
    reviewsCount: 67,
    highlights: [
      'Memory foam technology for personalized comfort',
      'Breathable cover for temperature regulation',
      'Durable construction for long-term use',
      'Easy to clean and maintain',
    ],
    specs: {
      Material: 'Memory foam core with breathable cover',
      Size: '18" x 18" x 4"',
      Density: 'High-density memory foam',
      Care: 'Spot clean only',
    },
    seller: 'VIZKO Home Collection',
    warranty: '1 Year limited warranty',
    returnPolicy: '7-day replacement on manufacturing defects',
    delivery: 'Dispatched in 1–3 days',
    badges: ['Memory Foam', 'Breathable', 'Durable'],
    codAvailable: true,
    emiAvailable: false,
    boxContents: ['Memory foam cushion', 'Care instructions', 'Warranty card'],
    careInstructions: [
      'Spot clean with mild detergent',
      'Air dry completely before use',
      'Do not machine wash or dry clean',
    ],
    materials: ['Memory foam', 'Breathable fabric cover'],
    faqs: [
      { q: 'How long does memory foam take to expand?', a: 'Memory foam typically expands within 24-48 hours of unpacking.' },
      { q: 'Is this suitable for people with back pain?', a: 'Yes, memory foam provides excellent support and pressure relief.' },
    ],
    reviews: [
      { name: 'Amit S.', rating: 4, comment: 'Great for office chair. Very comfortable.', date: '2025-01-12' },
      { name: 'Deepa R.', rating: 5, comment: 'Perfect support for my back. Highly recommended!', date: '2025-01-05' },
    ],
    qa: [
      { question: 'Can this be used on any chair?', answer: 'Yes, it works well on most chairs and seating surfaces.' },
      { question: 'Does it have any odor?', answer: 'There may be a slight memory foam smell initially, which dissipates within a few days.' },
    ],
  },
  {
    id: 'VC003',
    title: 'Decorative Throw Cushion',
    description:
      'Add elegance to your space with our Decorative Throw Cushion from Vizko Global. This beautifully designed cushion combines style and comfort, featuring intricate patterns and premium materials. Perfect for enhancing the aesthetic appeal of your living room, bedroom, or any seating area. The cushion is crafted with attention to detail, offering both decorative value and functional comfort.',
    additionalDescription:
      'Elegant design with premium materials. Perfect for home decoration.',
    category: 'cushions',
    image: mattressImages.cushions[2],
    length: 16,
    breadth: 16,
    height: 5,
    price: 1200,
    rating: 4.7,
    reviewsCount: 45,
    highlights: [
      'Elegant decorative design',
      'Premium fabric construction',
      'Perfect for home decoration',
      'Easy to clean and maintain',
    ],
    specs: {
      Material: 'Premium decorative fabric',
      Size: '16" x 16" x 5"',
      Design: 'Intricate pattern print',
      Care: 'Machine washable',
    },
    seller: 'VIZKO Home Collection',
    warranty: '1 Year limited warranty',
    returnPolicy: '7-day replacement on manufacturing defects',
    delivery: 'Dispatched in 1–3 days',
    badges: ['Decorative', 'Premium Design', 'Easy Care'],
    codAvailable: true,
    emiAvailable: false,
    boxContents: ['Decorative cushion', 'Care instructions'],
    careInstructions: [
      'Machine wash on gentle cycle',
      'Air dry or tumble dry on low heat',
      'Iron on low heat if needed',
    ],
    materials: ['Premium decorative fabric', 'Polyester filling'],
    faqs: [
      { q: 'Are different patterns available?', a: 'Yes, we offer various patterns and colors. Contact us for options.' },
      { q: 'Can this be used outdoors?', a: 'This is designed for indoor use only.' },
    ],
    reviews: [
      { name: 'Kavita L.', rating: 5, comment: 'Beautiful design and great quality. Love it!', date: '2025-01-14' },
      { name: 'Vikram T.', rating: 4, comment: 'Nice addition to my living room. Good quality.', date: '2025-01-09' },
    ],
    qa: [
      { question: 'What colors are available?', answer: 'We offer multiple color options. Please check our product gallery for available colors.' },
      { question: 'Is the pattern fade-resistant?', answer: 'Yes, our fabrics are treated to resist fading from sunlight.' },
    ],
  },
  {
    id: 'VC004',
    title: 'Orthopedic Support Cushion',
    description:
      'Improve your posture and comfort with our Orthopedic Support Cushion from Vizko Global. This specially designed cushion provides targeted support for your back and spine, helping to maintain proper alignment during extended sitting. The ergonomic design features contoured support zones that adapt to your body shape, reducing pressure points and promoting better posture. Perfect for office chairs, car seats, or any seating where you spend extended time.',
    additionalDescription:
      'Orthopedic design for better posture. Contoured support zones for spinal alignment.',
    category: 'cushions',
    image: mattressImages.cushions[3],
    length: 22,
    breadth: 16,
    height: 6,
    price: 3200,
    rating: 4.6,
    reviewsCount: 78,
    highlights: [
      'Orthopedic design for better posture',
      'Contoured support zones',
      'Reduces pressure points',
      'Promotes spinal alignment',
    ],
    specs: {
      Material: 'High-density foam with orthopedic design',
      Size: '22" x 16" x 6"',
      Support: 'Contoured lumbar support',
      Care: 'Spot clean only',
    },
    seller: 'VIZKO Home Collection',
    warranty: '2 Years limited warranty',
    returnPolicy: '7-day replacement on manufacturing defects',
    delivery: 'Dispatched in 1–3 days',
    badges: ['Orthopedic', 'Posture Support', 'Medical Grade'],
    codAvailable: true,
    emiAvailable: true,
    boxContents: ['Orthopedic cushion', 'Usage guide', 'Warranty card'],
    careInstructions: [
      'Spot clean with mild detergent',
      'Air dry completely',
      'Do not machine wash',
    ],
    materials: ['High-density orthopedic foam', 'Breathable cover'],
    faqs: [
      { q: 'Is this suitable for people with chronic back pain?', a: 'Yes, this cushion is designed to provide relief for back pain and improve posture.' },
      { q: 'Can it be used in a car?', a: 'Yes, it works well in cars, office chairs, and other seating.' },
    ],
    reviews: [
      { name: 'Dr. Sharma', rating: 5, comment: 'Excellent support for my patients. Highly recommended!', date: '2025-01-11' },
      { name: 'Ravi M.', rating: 4, comment: 'Great for long office hours. Back pain reduced significantly.', date: '2025-01-07' },
    ],
    qa: [
      { question: 'How long should I use it to see results?', answer: 'Most users notice improvement in posture and comfort within 1-2 weeks of regular use.' },
      { question: 'Is it suitable for all body types?', answer: 'Yes, the contoured design adapts to different body shapes and sizes.' },
    ],
  },
  {
    id: 'VC005',
    title: 'Luxury Velvet Cushion',
    description:
      'Indulge in luxury with our Velvet Cushion from Vizko Global. This premium cushion features sumptuous velvet fabric that adds elegance and sophistication to any space. The soft, plush texture provides exceptional comfort while the rich colors and luxurious feel create a statement piece for your home. Perfect for adding a touch of opulence to your living room, bedroom, or any seating area.',
    additionalDescription:
      'Luxury velvet fabric with plush comfort. Elegant design for sophisticated spaces.',
    category: 'cushions',
    image: mattressImages.cushions[4],
    length: 20,
    breadth: 20,
    height: 7,
    price: 4500,
    rating: 4.8,
    reviewsCount: 56,
    highlights: [
      'Luxury velvet fabric',
      'Plush and comfortable',
      'Elegant design',
      'Premium quality construction',
    ],
    specs: {
      Material: 'Premium velvet fabric',
      Size: '20" x 20" x 7"',
      Filling: 'High-quality polyester blend',
      Care: 'Professional cleaning recommended',
    },
    seller: 'VIZKO Home Collection',
    warranty: '2 Years limited warranty',
    returnPolicy: '7-day replacement on manufacturing defects',
    delivery: 'Dispatched in 1–3 days',
    badges: ['Luxury', 'Velvet', 'Premium Quality'],
    codAvailable: true,
    emiAvailable: true,
    boxContents: ['Velvet cushion', 'Care instructions', 'Warranty card'],
    careInstructions: [
      'Professional dry cleaning recommended',
      'Spot clean with velvet brush',
      'Store in cool, dry place',
    ],
    materials: ['Premium velvet fabric', 'High-quality polyester filling'],
    faqs: [
      { q: 'What colors are available?', a: 'We offer rich velvet colors including burgundy, navy, emerald, and gold.' },
      { q: 'How do I maintain the velvet texture?', a: 'Use a velvet brush to maintain the nap and professional cleaning for deep cleaning.' },
    ],
    reviews: [
      { name: 'Anita P.', rating: 5, comment: 'Absolutely gorgeous! The velvet is so soft and luxurious.', date: '2025-01-13' },
      { name: 'Rohit K.', rating: 5, comment: 'Perfect for my luxury home decor. Excellent quality!', date: '2025-01-06' },
    ],
    qa: [
      { question: 'Is the velvet colorfast?', answer: 'Yes, our velvet is treated to be colorfast and fade-resistant.' },
      { question: 'Can I mix and match with other cushions?', answer: 'Absolutely! This cushion pairs beautifully with other luxury home accessories.' },
    ],
  },
  // Cushion Cover Products
  {
    id: 'VCC001',
    title: 'Premium Cushion Cover Set',
    description:
      'Transform your cushions with our Premium Cushion Cover Set from Vizko Global. These beautifully designed covers feature high-quality fabrics and intricate patterns that add elegance to any space. Made with durable materials and attention to detail, these covers protect your cushions while enhancing their aesthetic appeal. Perfect for seasonal updates or style changes, these covers are easy to install and maintain.',
    additionalDescription:
      'High-quality fabric with elegant designs. Easy to install and maintain.',
    category: 'cushioncovers',
    image: mattressImages.cushioncovers[0],
    length: 20,
    breadth: 20,
    height: 1,
    price: 800,
    rating: 4.4,
    reviewsCount: 34,
    highlights: [
      'Premium fabric construction',
      'Easy to install and remove',
      'Machine washable',
      'Multiple design options available',
    ],
    specs: {
      Material: 'Premium cotton blend fabric',
      Size: '20" x 20" (adjustable)',
      Design: 'Elegant pattern print',
      Care: 'Machine washable',
    },
    seller: 'VIZKO Home Collection',
    warranty: '1 Year limited warranty',
    returnPolicy: '7-day replacement on manufacturing defects',
    delivery: 'Dispatched in 1–3 days',
    badges: ['Easy Care', 'Premium Design'],
    codAvailable: true,
    emiAvailable: false,
    boxContents: ['Cushion cover set (2 pieces)', 'Care instructions'],
    careInstructions: [
      'Machine wash on gentle cycle',
      'Air dry or tumble dry on low heat',
      'Iron on low heat if needed',
    ],
    materials: ['Premium cotton blend fabric'],
    faqs: [
      { q: 'What sizes are available?', a: 'We offer 20x20, 18x18, and 16x16 inch sizes.' },
      { q: 'Are different patterns available?', a: 'Yes, we offer various patterns and colors. Contact us for options.' },
    ],
    reviews: [
      { name: 'Meera S.', rating: 5, comment: 'Beautiful covers! Easy to put on and wash.', date: '2025-01-16' },
      { name: 'Ravi K.', rating: 4, comment: 'Good quality fabric and nice design.', date: '2025-01-12' },
    ],
    qa: [
      { question: 'Do these covers have zippers?', answer: 'Yes, all covers come with hidden zippers for easy installation.' },
      { question: 'Can I mix and match with different cushions?', answer: 'Yes, these covers are designed to fit standard cushion sizes.' },
    ],
  },
  {
    id: 'VCC002',
    title: 'Luxury Velvet Cushion Cover',
    description:
      'Indulge in luxury with our Velvet Cushion Cover from Vizko Global. This premium cover features sumptuous velvet fabric that adds sophistication and elegance to any space. The rich texture and deep colors create a statement piece that transforms ordinary cushions into luxurious home accessories. Perfect for adding a touch of opulence to your living room, bedroom, or any seating area.',
    additionalDescription:
      'Luxury velvet fabric with elegant design. Perfect for sophisticated spaces.',
    category: 'cushioncovers',
    image: mattressImages.cushioncovers[1],
    length: 20,
    breadth: 20,
    height: 1,
    price: 1200,
    rating: 4.7,
    reviewsCount: 28,
    highlights: [
      'Luxury velvet fabric',
      'Elegant and sophisticated design',
      'Rich colors and textures',
      'Easy to install',
    ],
    specs: {
      Material: 'Premium velvet fabric',
      Size: '20" x 20" (adjustable)',
      Design: 'Luxury velvet finish',
      Care: 'Professional cleaning recommended',
    },
    seller: 'VIZKO Home Collection',
    warranty: '1 Year limited warranty',
    returnPolicy: '7-day replacement on manufacturing defects',
    delivery: 'Dispatched in 1–3 days',
    badges: ['Luxury', 'Velvet', 'Premium Quality'],
    codAvailable: true,
    emiAvailable: false,
    boxContents: ['Velvet cushion cover', 'Care instructions'],
    careInstructions: [
      'Professional dry cleaning recommended',
      'Spot clean with velvet brush',
      'Store in cool, dry place',
    ],
    materials: ['Premium velvet fabric'],
    faqs: [
      { q: 'What colors are available?', a: 'We offer rich velvet colors including burgundy, navy, emerald, and gold.' },
      { q: 'How do I maintain the velvet texture?', a: 'Use a velvet brush to maintain the nap and professional cleaning for deep cleaning.' },
    ],
    reviews: [
      { name: 'Priya L.', rating: 5, comment: 'Absolutely gorgeous! The velvet is so soft and luxurious.', date: '2025-01-14' },
      { name: 'Arjun M.', rating: 5, comment: 'Perfect for my luxury home decor. Excellent quality!', date: '2025-01-10' },
    ],
    qa: [
      { question: 'Is the velvet colorfast?', answer: 'Yes, our velvet is treated to be colorfast and fade-resistant.' },
      { question: 'Can I use this on any cushion?', answer: 'Yes, this cover is designed to fit standard 20x20 inch cushions.' },
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

