
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/f00ba09b-aace-42c3-8783-27f28d128cbe.png" 
            alt="Bananabliss & Co Logo" 
            className="h-12 w-12 object-contain"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-brand-brown font-cursive">Bananabliss & Co</h1>
            <p className="text-xs md:text-sm italic text-brand-brown">Pure Goodness in Every Spoon</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-brand-brown hover:text-brand-orange transition-colors">Home</a>
          <a href="#about" className="text-brand-brown hover:text-brand-orange transition-colors">About</a>
          <a href="#products" className="text-brand-brown hover:text-brand-orange transition-colors">Products</a>
          <a href="#applications" className="text-brand-brown hover:text-brand-orange transition-colors">Applications</a>
          <a href="#contact" className="text-brand-brown hover:text-brand-orange transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-brand-brown">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-3">
            <a 
              href="#home" 
              className="text-brand-brown hover:text-brand-orange transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-brand-brown hover:text-brand-orange transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#products" 
              className="text-brand-brown hover:text-brand-orange transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="#applications" 
              className="text-brand-brown hover:text-brand-orange transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Applications
            </a>
            <a 
              href="#contact" 
              className="text-brand-brown hover:text-brand-orange transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
