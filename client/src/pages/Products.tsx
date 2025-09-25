import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { allProducts, EnhancedProductType } from "@/lib/data";
import ProductCard from "@/components/products/ProductCard";
// Removed filters
import ProductComparison from "@/components/products/ProductComparison";
import { Button } from "@/components/ui/button";
import { 
  Grid3X3,
  Grid2X2,
  
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Breadcrumb from "@/components/Breadcrumb";

// Removed search and sort UI

export default function Products() {
  // Base list: exactly one representative product per category
  const baseProducts = useMemo<EnhancedProductType[]>(() => {
    const desiredOrder = ["hybrid", "innerspring", "memoryfoam", "orthopaedic"] as const;
    return desiredOrder
      .map(category => allProducts.find(p => p.category === category))
      .filter(Boolean) as EnhancedProductType[];
  }, []);

  // State for the filtered products
  const [filteredProducts, setFilteredProducts] = useState<EnhancedProductType[]>(baseProducts);
  const [compareProducts, setCompareProducts] = useState<EnhancedProductType[]>([]);
  const [gridView, setGridView] = useState<'compact' | 'regular'>('regular');
  const { toast } = useToast();

  // Removed filters, search and sorting handlers

  // Add product to comparison
  const handleAddToCompare = (product: EnhancedProductType) => {
    if (compareProducts.length >= 4) {
      toast({
        title: "Compare limit reached",
        description: "You can compare up to 4 products at a time. Please remove a product to add another.",
        variant: "destructive",
        className: "top-4 right-4 fixed z-50",
      });
      return;
    }
    
    if (compareProducts.some(p => p.id === product.id)) {
      return;
    }
    
    setCompareProducts([...compareProducts, product]);
  };

  // Remove product from comparison
  const handleRemoveFromCompare = (productId: string) => {
    setCompareProducts(compareProducts.filter(p => p.id !== productId));
  };
  
  // Clear all products from comparison
  const handleClearCompareList = () => {
    setCompareProducts([]);
  };

  return (
    <>
      <Helmet>
        <title>VIZKO Products | Premium Export Mattresses</title>
        <meta name="description" content="Explore VIZKO's range of premium export mattresses including Hybrid, Inner Spring, Memory Foam, and Orthopaedic options." />
      </Helmet>
      
      <section className="pt-24 bg-gray-50 min-h-screen">
         <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Products" }]} />
          </div>
        <div className="container mx-auto px-4 py-12">
          
          <div className="text-center mb-8">
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-primary">Our Products</h1>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              Explore our range of export-quality mattresses designed to meet diverse market needs worldwide.
            </p>
          </div>

         

          {/* Controls removed as per requirement */}

          <div className="flex flex-col gap-8">
            {/* Product grid */}
            <div>
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-lg p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-gray-500">
                    Try adjusting your filters or search criteria to find what you're looking for.
                  </p>
                </div>
              ) : (
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6`}>
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCompare={handleAddToCompare}
                      isInCompare={compareProducts.some(p => p.id === product.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Comparison drawer */}
        <ProductComparison 
          compareProducts={compareProducts}
          onRemoveFromCompare={handleRemoveFromCompare}
          onClearAll={handleClearCompareList}
        />
      </section>
    </>
  );
}
