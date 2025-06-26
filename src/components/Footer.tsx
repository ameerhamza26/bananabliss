
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-brand-peach to-[#ffafbd] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/f00ba09b-aace-42c3-8783-27f28d128cbe.png" 
              alt="Bananabliss & Co Logo" 
              className="h-16 w-16 object-contain mr-3"
            />
            <div>
              <h3 className="text-xl font-bold text-brand-brown font-cursive">Bananabliss & Co</h3>
              <p className="text-sm italic text-brand-brown">Pure Goodness in Every Spoon</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <Mail size={18} className="mr-2 text-brand-brown" />
              <a href="mailto:info@bananabliss.com" className="text-brand-brown hover:text-brand-orange">
                info@bananabliss.com
              </a>
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="mr-2 text-brand-brown" />
              <span className="text-brand-brown">Karachi, Pakistan</span>
            </div>
            <div className="flex items-center">
              <Phone size={18} className="mr-2 text-brand-brown" />
              <a href="tel:+92000000000" className="text-brand-brown hover:text-brand-orange">
                +92-342-1971047
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-brown/20 pt-4 text-center">
          <p className="text-brand-brown text-sm">
            &copy; {new Date().getFullYear()} Bananabliss & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
