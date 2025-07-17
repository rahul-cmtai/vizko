import { useParams, Link } from "wouter";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { EnhancedProductType, allProducts, mattressImages } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Ruler, Layers, Grid3X3 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/products/ProductCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState<EnhancedProductType | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<EnhancedProductType[]>([]);
  
  // Keen slider setup with autoplay
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    created: () => {
      setLoaded(true);
    },
    slideChanged: (s) => {
      setCurrentSlide(s.track.details.rel);
    },
    renderMode: "performance",
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Set up autoplay
  useEffect(() => {
    if (slider.current && loaded) {
      const interval = setInterval(() => {
        slider.current?.next();
      }, 3000); // Change slide every 3 seconds

      return () => {
        clearInterval(interval);
      };
    }
  }, [slider, loaded]);
  
  // Keen slider navigation handlers
  const goPrev = () => slider.current?.prev();
  const goNext = () => slider.current?.next();
  
  useEffect(() => {
    if (productId) {
      const foundProduct = allProducts.find(p => p.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find related products (same category, different dimensions)
        const related = allProducts.filter(p => 
          p.category === foundProduct.category && 
          p.id !== foundProduct.id
        ).slice(0, 3);
        
        setRelatedProducts(related);
      }
    }
  }, [productId]);
  
  // Dummy function for now, we're not implementing comparison on this page
  const handleAddToCompare = () => {};
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="mt-4">The product you're looking for doesn't exist or has been removed.</p>
          <Link href="/products">
            <Button className="mt-4">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  // Get images for the product category
  const images =
    mattressImages[product.category as keyof typeof mattressImages] && 
    mattressImages[product.category as keyof typeof mattressImages].length > 0
      ? mattressImages[product.category as keyof typeof mattressImages]
      : [product.image]; // fallback to the product's image
  
  return (
    <>
      <Helmet>
        <title>{product.title.split("\n\n")[0]} | VIZKO Mattresses</title>
        <meta name="description" content={product.description} />
      </Helmet>
      
      <section className="pt-24 bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6">
            <Link href="/products">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="relative">
                {/* Keen Slider Implementation */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-100">
                  <div ref={sliderRef} className="keen-slider w-full h-full">
                    {images.map((img, idx) => (
                      <div key={idx} className="keen-slider__slide flex items-center justify-center w-full h-full bg-gray-100">
                        <img
                          src={img.startsWith("http") ? `/api/image-proxy?url=${encodeURIComponent(img)}` : img}
                          alt={`${product.title} ${idx + 1}`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  {images.length > 1 && loaded && (
                    <>
                      <button
                        aria-label="Previous"
                        onClick={goPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow p-2 rounded-full z-10"
                        type="button"
                      >
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M13 17l-5-5 5-5" />
                        </svg>
                      </button>
                      <button
                        aria-label="Next"
                        onClick={goNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow p-2 rounded-full z-10"
                        type="button"
                      >
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 7l5 5-5 5" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <h1 className="text-2xl font-bold text-primary">{product.title.split("\n\n")[0]}</h1>
                  {product.title.split("\n\n")[1] && (
                    <h2 className="text-lg text-gray-700">{product.title.split("\n\n")[1]}</h2>
                  )}
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-md">
                      <Ruler className="text-primary h-5 w-5" />
                      <div>
                        <div className="text-sm text-gray-500">Dimensions</div>
                        <div className="font-medium">{product.length}" × {product.breadth}" × {product.height}"</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-md">
                      <Layers className="text-primary h-5 w-5" />
                      <div>
                        <div className="text-sm text-gray-500">Thickness</div>
                        <div className="font-medium">{product.height}" Mattress</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Layer Composition</p>
                    <p className="font-medium">{product.additionalDescription}</p>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Price</div>
                      <div className="text-3xl font-bold text-primary">₹{product.price.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">*Prices exclude 18% GST. LUT exempt GST available.</div>
                    </div>
                    
                    <Link href="/contact">
                      <Button className="w-full md:w-auto bg-primary hover:bg-primary/90">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Enquire Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Mattresses are roll-packed in rexine for safe transportation</li>
                <li>Export-grade materials meeting international standards</li>
                <li>Custom sizing available for bulk orders</li>
                <li>Vacuum-sealed packaging available upon request</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          {/* Related Products */}
          {relatedProducts.length > 1 && (
            <div className="mt-12">
              <div className="flex items-center gap-2 mb-6">
                <Grid3X3 className="text-primary h-5 w-5" />
                <h3 className="text-xl font-semibold">Related Products</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map(relatedProduct => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    onAddToCompare={handleAddToCompare}
                    isInCompare={false}
                    showCompareButton={false}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}