
import { Check } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-brand-brown border-b-2 border-brand-orange pb-3 inline-block mx-auto">About Us</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              <span className="font-bold text-xl text-brand-brown">Bananabliss & Co</span> is a premium manufacturer of high-quality fruit powders made from real fruits. Our goal is to deliver the nutritional benefits of fresh fruits in a convenient, long-lasting powdered form.
            </p>
            <p className="text-lg mb-8">
              Our powders retain maximum nutrients, flavor, and aroma, and are ideal for use in health foods, smoothies, baking, baby food, supplements, and skincare.
            </p>
            <h3 className="text-xl font-bold text-brand-orange mb-3">We specialize in:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center">
                <span className="mr-2 text-brand-green"><Check size={18} /></span>
                Banana Powder
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-brand-green"><Check size={18} /></span>
                Moringa Powder
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-brand-green"><Check size={18} /></span>
                Strawberry Powder
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-brand-green"><Check size={18} /></span>
                Apple Powder
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-brand-green"><Check size={18} /></span>
                Mango Powder
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-brand-green"><Check size={18} /></span>
                Carrot Powder
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-brand-green"><Check size={18} /></span>
                Date Seed Powder
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-brand-green"><Check size={18} /></span>
                And many more...
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex flex-col gap-4">
            <img 
              src="/lovable-uploads/2f11aa2d-036f-43b8-8e96-9f9544816a3a.png" 
              alt="About Bananabliss & Co First Image" 
              className="rounded-lg shadow-lg max-w-full h-64 object-cover"
            />
            <img 
              src="/lovable-uploads/9d423403-9d44-4049-aa96-e39cc8c2bf70.png" 
              alt="About Bananabliss & Co Second Image" 
              className="rounded-lg shadow-lg max-w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="bg-brand-peach/50 rounded-lg p-6 md:p-8 shadow-md">
          <h3 className="text-xl md:text-2xl font-bold text-center text-brand-brown mb-6">Why Choose Bananabliss & Co?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Check className="text-brand-green mr-2" />
                <h4 className="font-bold text-brand-brown">100% Natural Ingredients</h4>
              </div>
              <p className="text-sm text-gray-700">Our powders contain only natural ingredients with no artificial additives.</p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Check className="text-brand-green mr-2" />
                <h4 className="font-bold text-brand-brown">No Preservatives</h4>
              </div>
              <p className="text-sm text-gray-700">We never use preservatives or chemicals in our production process.</p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Check className="text-brand-green mr-2" />
                <h4 className="font-bold text-brand-brown">Eco-friendly Packaging</h4>
              </div>
              <p className="text-sm text-gray-700">Our packaging is hygienic and environmentally responsible.</p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Check className="text-brand-green mr-2" />
                <h4 className="font-bold text-brand-brown">Long Shelf Life</h4>
              </div>
              <p className="text-sm text-gray-700">Our products maintain their nutritional value for extended periods.</p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Check className="text-brand-green mr-2" />
                <h4 className="font-bold text-brand-brown">Custom Orders</h4>
              </div>
              <p className="text-sm text-gray-700">We accept custom orders and offer bulk supply options for businesses.</p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Check className="text-brand-green mr-2" />
                <h4 className="font-bold text-brand-brown">Quality Assurance</h4>
              </div>
              <p className="text-sm text-gray-700">Rigorous testing ensures our products meet the highest quality standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
