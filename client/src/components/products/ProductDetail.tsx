import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { EnhancedProductType, mattressImages } from "@/lib/data";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface ProductDetailProps {
  product: EnhancedProductType;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  // Keen slider setup
  const images =
    mattressImages[product.category as keyof typeof mattressImages] && 
    mattressImages[product.category as keyof typeof mattressImages].length > 0
      ? mattressImages[product.category as keyof typeof mattressImages]
      : [product.image]; // fallback to the product's image

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!slider.current) return;
    slider.current.on("slideChanged", (s) => setCurrentSlide(s.track.details.rel));
  }, [slider]);

  // Keen slider navigation handlers
  const goPrev = () => slider.current?.prev();
  const goNext = () => slider.current?.next();

  // Extract the product name from the title (remove the category prefix)
  const productName = product.title.split('\n\n')[1] || product.title;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="relative w-full aspect-[4/3] md:aspect-[3/4] rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <div ref={sliderRef} className="keen-slider w-full h-full">
              {images.map((img, idx) => (
                <div key={idx} className="keen-slider__slide flex items-center justify-center w-full h-full bg-gray-100">
                  <img
                    src={img.startsWith("http") ? `/api/image-proxy?url=${encodeURIComponent(img)}` : img}
                    alt={`${productName} ${idx + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
            {images.length > 1 && (
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
                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`w-2 h-2 rounded-full ${currentSlide === idx ? "bg-primary" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="md:w-2/3 p-8">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-4">{productName}</h2>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-8">
            <h3 className="font-playfair text-xl font-bold text-primary mb-4">Product Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 border rounded-lg bg-gray-50">
                <h4 className="font-medium text-primary mb-2">Dimensions</h4>
                <p className="text-gray-700">Length: {product.length} inches</p>
                <p className="text-gray-700">Breadth: {product.breadth} inches</p>
                <p className="text-gray-700">Height: {product.height} inches</p>
              </div>
              <div className="p-4 border rounded-lg bg-gray-50">
                <h4 className="font-medium text-primary mb-2">Specifications</h4>
                <p className="text-gray-700">{product.additionalDescription}</p>
                <p className="text-gray-700">Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-primary/10 to-accent p-6 rounded-lg mt-6 border border-primary/20 shadow-md">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <p className="text-gray-700 text-sm">Product Configuration</p>
                  <p className="font-medium text-primary">
                    {product.length}" × {product.breadth}" × {product.height}" {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Mattress
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-700 text-sm">Price</p>
                  <p className="text-primary text-3xl font-bold">₹{product.price.toLocaleString()}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link
                    href={`/contact?product=${product.id}`}
                    className="bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-opacity-90 transition duration-300 inline-flex items-center"
                  >
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-primary mb-2">Important Notes:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Prices exclude 18% GST</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>LUT exempt GST available</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Mattresses are roll-packed in rexine</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Bulk order discounts available for export orders</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
