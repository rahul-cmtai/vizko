import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function FeaturedProducts() {
  return (
    <div className="bg-accent py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary">Featured Mattress Types</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Discover our range of premium export-quality mattresses designed for exceptional comfort and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mattress Type 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
            <img 
              src="/src/assets/images/Hybrid/Front.jpg" 
              alt="Hybrid Mattress" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-playfair text-xl font-bold text-primary">Hybrid</h3>
              <p className="text-gray-700 mt-2">
                The perfect balance of spring support and foam comfort for a luxurious sleep experience.
              </p>
              <Link 
                href="/products" 
                className="mt-4 inline-flex items-center text-primary font-medium hover:text-yellow-600 transition duration-300"
              >
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Mattress Type 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
            <img 
              src="/src/assets/images/Innerspring/Front.jpg" 
              alt="Inner Spring Mattress" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-playfair text-xl font-bold text-primary">Inner Spring</h3>
              <p className="text-gray-700 mt-2">
                Classic support system with premium coils for responsive comfort and excellent airflow.
              </p>
              <Link 
                href="/products" 
                className="mt-4 inline-flex items-center text-primary font-medium hover:text-yellow-600 transition duration-300"
              >
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Mattress Type 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
            <img 
              src="/src/assets/images/Memory Foam/First.jpg" 
              alt="Memory Foam Mattress" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-playfair text-xl font-bold text-primary">Memory Foam</h3>
              <p className="text-gray-700 mt-2">
                Body-contouring support that relieves pressure points and reduces motion transfer.
              </p>
              <Link 
                href="/products" 
                className="mt-4 inline-flex items-center text-primary font-medium hover:text-yellow-600 transition duration-300"
              >
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Mattress Type 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
            <img 
              src="/src/assets/images/Orthopedic/First.jpg" 
              alt="Orthopaedic Mattress" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-playfair text-xl font-bold text-primary">Orthopaedic</h3>
              <p className="text-gray-700 mt-2">
                Specialized design for proper spinal alignment and therapeutic support.
              </p>
              <Link 
                href="/products" 
                className="mt-4 inline-flex items-center text-primary font-medium hover:text-yellow-600 transition duration-300"
              >
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
