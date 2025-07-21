import { Link } from "wouter";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

// Define the slide data
const slides = [
  {
    id: 1,
    image: "/assets/images/Hybrid/Front.jpg",
    alt: "Hybrid mattress front view",
    title: "Premium Mattresses. Global Comfort.",
    description: "Export-quality comfort, crafted in India. Experience the perfect balance of luxury, support, and durability.",
    ctaText: "Explore Products"
  },
  {
    id: 2,
    image: "/assets/images/Innerspring/Front.jpg",
    alt: "Innerspring mattress front view",
    title: "Luxury Redefined. Sleep Perfected.",
    description: "Discover our premium collection of memory foam mattresses, designed for ultimate comfort and support.",
    ctaText: "View Collection"
  },
  {
    id: 3,
    image: "/assets/images/Memory Foam/First.jpg",
    alt: "Memory Foam mattress front view",
    title: "Sleep Like Royalty. Every Night.",
    description: "Experience the luxury of premium bedding with our exclusive range of mattresses and accessories.",
    ctaText: "Shop Now"
  },
  {
    id: 4,
    image: "/assets/images/Orthopedic/First.jpg",
    alt: "Orthopedic mattress front view",
    title: "Orthopedic Excellence. For Your Health.",
    description: "Our orthopedic mattresses are designed to provide perfect spinal alignment and pressure relief.",
    ctaText: "Learn More"
  },
  {
    id: 5,
    image: "/assets/images/Hybrid/Front.jpg",
    alt: "Premium innerspring mattress",
    title: "Innovative Comfort. Timeless Design.",
    description: "Experience the perfect blend of traditional craftsmanship and modern technology in our mattresses.",
    ctaText: "Discover More"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Function to go to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);
  
  // Function to go to previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);
  
  return (
    <div className="pt-20">
      <div className="relative">
        {/* Carousel Container */}
        <div className="relative h-[500px] md:h-[600px] overflow-hidden">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
              <img 
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay text - unique for each slide */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center max-w-4xl px-4">
                  <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    {slide.title}
                  </h1>
                  <p className="mt-6 text-white text-lg md:text-xl font-montserrat max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  <div className="mt-10">
                    <Link 
                      href="/products" 
                      className="bg-primary text-white font-lato font-medium px-8 py-3 rounded hover:bg-opacity-90 transition duration-300 inline-flex items-center"
                    >
                      {slide.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Slide indicators */}
          <div className="absolute bottom-5 left-0 right-0 z-30 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
