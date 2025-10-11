import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, 
  X, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Globe,
  ChevronDown
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const socialMediaLinks = [
    { icon: Facebook, url: "https://www.facebook.com/share/1771WNLDvR/?mibextid=wwXIfr", label: "Facebook" },
    { icon: Instagram, url: "https://www.instagram.com/vizko_global_exports/", label: "Instagram" },
    { icon: Twitter, url: "https://x.com/vizkoexports?s=21", label: "X" },
    { icon: Linkedin, url: "https://www.linkedin.com/company/vizko-global-exports/", label: "LinkedIn" }
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0 w-1/3 md:w-1/4">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <Globe className="text-primary h-6 w-6 md:h-8 md:w-8 mr-2" />
                <div className="flex items-center">
                  <span className="text-primary font-playfair font-bold text-2xl md:text-3xl mr-2">VIZKO</span>
                  <div className="h-6 md:h-8 w-0.5 bg-gradient-to-b from-primary via-gray-400 to-gray-300 mx-2"></div>
                  <span className="text-gray-700 font-medium text-xs md:text-sm tracking-wider uppercase">Global Exports</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center flex-grow">
            <div className="flex space-x-10">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Products", path: "/products", hasDropdown: true },
                { label: "Packaging", path: "/packaging" },
                { label: "Contact Us", path: "/contact" }
              ].map((link, index) => (
                link.hasDropdown ? (
                  <div key={index} className="relative group" ref={dropdownRef}>
                    <button
                      onClick={toggleProductsDropdown}
                      className={`relative font-medium py-1 flex items-center ${
                        isActive(link.path) ? "text-primary" : "text-gray-800"
                      }`}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        isProductsDropdownOpen ? 'rotate-180' : ''
                      }`} />
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isProductsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                        <Link
                          href="/products"
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
                        >
                          Mattresses
                        </Link>
                        <Link
                          href="/cushions"
                          onClick={() => setIsProductsDropdownOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-200"
                        >
                          Cushions
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={link.path}
                    className={`relative group font-medium py-1 ${
                      isActive(link.path) ? "text-primary" : "text-gray-800"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center justify-end w-1/4 space-x-4">
            {socialMediaLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button 
              onClick={toggleMenu} 
              className="text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Products", path: "/products", hasDropdown: true },
              { label: "Packaging", path: "/packaging" },
              { label: "Contact", path: "/contact" }
            ].map((link, index) => (
              link.hasDropdown ? (
                <div key={index}>
                  <button
                    onClick={toggleProductsDropdown}
                    className={`relative group py-2 font-medium w-full text-left flex items-center justify-between ${
                      isActive(link.path) ? "text-primary" : "text-gray-800"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      isProductsDropdownOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {/* Mobile Dropdown Menu */}
                  {isProductsDropdownOpen && (
                    <div className="ml-4 space-y-2">
                      <Link
                        href="/products"
                        onClick={closeMenu}
                        className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                      >
                        Mattresses
                      </Link>
                      <Link
                        href="/cushions"
                        onClick={closeMenu}
                        className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                      >
                        Cushions
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  href={link.path}
                  onClick={closeMenu}
                  className={`relative group block py-2 font-medium ${
                    isActive(link.path) ? "text-primary" : "text-gray-800"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}

            {/* Mobile Social Links */}
            <div className="flex mt-4 space-x-4 border-t pt-4">
              {socialMediaLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
