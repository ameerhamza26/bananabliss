
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="bg-gradient-to-r from-brand-peach to-[#ffafbd] py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-brand-brown font-cursive">
              Pure Goodness <br className="hidden md:block" />
              in Every Spoon
            </h1>
            <p className="text-lg md:text-xl mb-6 text-brand-brown/90">
              Premium natural fruit powders made from real fruits, retaining maximum nutrients, flavor, and aroma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                className="bg-brand-brown hover:bg-brand-brown/90 text-white"
                size="lg"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Products <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button 
                variant="outline" 
                className="border-brand-brown text-brand-brown hover:bg-brand-brown/10"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="bg-white p-4 rounded-full shadow-lg">
                <img 
                  src="/lovable-uploads/f00ba09b-aace-42c3-8783-27f28d128cbe.png" 
                  alt="Bananabliss & Co Logo" 
                  className="w-64 md:w-72 object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <p className="text-brand-brown font-semibold text-sm">100% Natural Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
