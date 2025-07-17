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
}

// Import the JSON data
import productsData from '../data/products.json';

// High-quality mattress images from Unsplash
export const mattressImages = {
  hybrid: [
    "/src/assets/images/Hybrid/Front.jpg",
    "/src/assets/images/Hybrid/comfort.jpg",
    "/src/assets/images/Hybrid/Features.jpg",
    "/src/assets/images/Hybrid/Fornt Page2.jpg",
    "/src/assets/images/Hybrid/Sacle2.jpg"
  ],
  innerspring: [
    "/src/assets/images/Innerspring/Front.jpg",
    "/src/assets/images/Innerspring/Fourth.jpg",
    "/src/assets/images/Innerspring/Second.jpg",
    "/src/assets/images/Innerspring/Third.jpg"
  ],
  memoryfoam: [
    "/src/assets/images/Memory Foam/First.jpg",
    "/src/assets/images/Memory Foam/Second Page.jpg",
    "/src/assets/images/Memory Foam/Second.jpg",
    "/src/assets/images/Memory Foam/Third page.jpg"
  ],
  orthopaedic: [
        "/src/assets/images/Orthopedic/First.jpg",
    "/src/assets/images/Orthopedic/Features.jpg",
    "/src/assets/images/Orthopedic/First Page.jpg",
    "/src/assets/images/Orthopedic/Front Page.jpg",
    "/src/assets/images/Orthopedic/Mattress Layers .jpg",
    "/src/assets/images/Orthopedic/sleeping.jpeg.jpg",

  ]
};

// Helper function to get category from title
function getCategoryFromTitle(title: string): string {
  if (title.startsWith('HYBRID')) return 'hybrid';
  if (title.startsWith('INNER SPRING')) return 'innerspring';
  if (title.startsWith('MEMORY FOAM')) return 'memoryfoam';
  if (title.startsWith('ORTHOPAEDIC')) return 'orthopaedic';
  return 'hybrid'; // default
}

// Helper function to get a random image for a category
function getRandomImageForCategory(category: string): string {
  const images = mattressImages[category as keyof typeof mattressImages];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// Transform the JSON data to our EnhancedProductType format
export const allProducts: EnhancedProductType[] = productsData.map((product: any, index: number) => {
  const category = getCategoryFromTitle(product.Title);
  const categoryImages = mattressImages[category as keyof typeof mattressImages] || ["/src/assets/images/default-mattress.jpg"];
  const image = categoryImages[0]; // Always use the first image for the category
  
  return {
    id: `${category}-${product.Length}-${product.Breadth}-${product.Height}-${index}`,
    title: product.Title,
    description: product.Description,
    length: product.Length,
    breadth: product.Breadth,
    height: product.Height,
    price: product.Price,
    additionalDescription: product["Additional description"],
    category,
    image
  };
});

// For backward compatibility with the original data structure
export const enhancedProductData = allProducts.slice(0, 20); // Just a subset for featured products, etc.

// Keeping the original data for compatibility with existing components
export const productData: Record<string, ProductType> = {
  hybrid: {
    id: "hybrid",
    name: "Hybrid",
    description: "Our premium Hybrid mattresses combine the supportive strength of pocket springs with the comfort of high-density memory foam. This perfect balance delivers exceptional pressure relief and responsive support, making it ideal for luxury hotels and discerning retailers.",
    image: "https://images.unsplash.com/photo-1630513767948-0329398049dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
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
    image: "https://images.unsplash.com/photo-1634646803754-000c2e548dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
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
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
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
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
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

