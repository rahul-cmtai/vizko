import { useState } from "react";
import { EnhancedProductType } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "wouter";
import { CheckCircle, InfoIcon, Star, Truck, CreditCard } from "lucide-react";

interface ProductCardProps {
  product: EnhancedProductType;
  onAddToCompare: (product: EnhancedProductType) => void;
  isInCompare: boolean;
  showCompareButton?: boolean;
}

export default function ProductCard({ 
  product, 
  onAddToCompare, 
  isInCompare, 
  showCompareButton = true 
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="group bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={product.image || "/assets/images/default-mattress.jpg"}
            alt={product.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
            onError={e => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "/assets/images/Hybrid/Front.jpg"; // Fallback image
            }}
          />
        </AspectRatio>
        <div className="absolute top-2 left-2">
          <Badge className="bg-primary text-white text-xs font-medium px-2.5 py-0.5 rounded shadow">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge className="bg-yellow-500 text-white text-xs font-medium px-2.5 py-0.5 rounded shadow">
            {product.height}" Thick
          </Badge>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-1">
          {product.title.split("\n\n")[0]}
        </h3>
        {/* Rating */}
        {typeof product.rating === 'number' && (
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`${(product.rating ?? 0) > i ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} h-4 w-4`} />
            ))}
            {product.reviewsCount ? (
              <span className="text-xs text-gray-500 ml-1">({product.reviewsCount})</span>
            ) : null}
          </div>
        )}

        <p className="text-sm text-gray-700 mb-3 line-clamp-2">
          {product.description}
        </p>
        
        {/* Size removed as requested */}
        
        {/* Badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {product.badges.slice(0, 3).map((b, idx) => (
              <span key={idx} className="text-[10px] uppercase tracking-wide bg-primary/10 text-primary px-2 py-1 rounded-full">
                {b}
              </span>
            ))}
          </div>
        )}

        <div className="text-xs text-gray-500 mb-4 line-clamp-2">
          {product.additionalDescription}
        </div>

        {/* Delivery/EMI row */}
        {/* <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
          <span className="inline-flex items-center gap-1"><Truck className="h-3.5 w-3.5 text-primary" /> Free Delivery</span>
          {product.emiAvailable && (
            <span className="inline-flex items-center gap-1"><CreditCard className="h-3.5 w-3.5 text-primary" /> EMI available</span>
          )}
        </div> */}
        
        <div className="flex flex-col xs:flex-row gap-2 mt-2">
          <Link href={`/products/${product.id.toLowerCase()}`}>
            <Button 
              className="w-full bg-primary text-white hover:bg-primary/90 shadow-sm"
            >
              <InfoIcon size={16} className="mr-1" />
              Details
            </Button>
          </Link>
          
          {showCompareButton && (
            <Button 
              variant={isInCompare ? "default" : "outline"}
              onClick={() => onAddToCompare(product)}
              className={`w-full transition-colors ${
                isInCompare 
                ? "bg-green-600 hover:bg-green-700 text-white" 
                : "text-primary border-primary hover:bg-primary/10"
              }`}
              disabled={isInCompare}
            >
              {isInCompare ? (
                <>
                  <CheckCircle size={16} className="mr-1" />
                  Added
                </>
              ) : (
                "Compare"
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}