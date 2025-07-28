import { Link } from "wouter";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-white font-playfair font-bold text-3xl">VIZKO</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Premium mattresses crafted in India and exported worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-accent transition duration-300" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition duration-300">Products</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-gray-300 hover:text-white transition duration-300">Hybrid Mattresses</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition duration-300">Inner Spring Mattresses</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition duration-300">Memory Foam Mattresses</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition duration-300">Orthopaedic Mattresses</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mt-1 mr-3 text-yellow-400 h-5 w-5" />
                <span className="text-gray-300">b2b.sales@vizkoexports.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 text-yellow-400 h-5 w-5" />
                <span className="text-gray-300">+91 8910323968, +91 6290147848</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-yellow-400 h-5 w-5" />
                <span className="text-gray-300">India (Manufacturing Unit)</span>
              </li>
            </ul>
            
            <h4 className="text-lg font-semibold mt-6 mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1771WNLDvR/?mibextid=wwXIfr" 
                className="text-white hover:text-accent transition duration-300" 
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/vizkoexports?s=21" 
                className="text-white hover:text-accent transition duration-300" 
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/vizko-global-exports/" 
                className="text-white hover:text-accent transition duration-300" 
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/vizko_global_exports/" 
                className="text-white hover:text-accent transition duration-300" 
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VIZKO Global Exports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
