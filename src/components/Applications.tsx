
import { Check } from "lucide-react";
import AnimatedTextSlider from "./AnimatedTextSlider";

const Applications = () => {
  const applications = [
    {
      title: "Smoothies & Health Drinks",
      description: "Add nutritional value and flavor to smoothies and healthy beverages.",
      icon: "🥤",
    },
    {
      title: "Baking",
      description: "Enhance cakes, muffins, cookies and other baked goods with natural flavors.",
      icon: "🧁",
    },
    {
      title: "Baby Foods",
      description: "Create nutritious, preservative-free options for infant nutrition.",
      icon: "👶",
    },
    {
      title: "Ice Creams & Yogurts",
      description: "Add natural flavoring and nutritional benefits to frozen treats and dairy products.",
      icon: "🍦",
    },
    {
      title: "Nutritional Supplements",
      description: "Formulate health supplements with pure, natural ingredients.",
      icon: "💊",
    },
    {
      title: "Natural Skincare Products",
      description: "Create organic cosmetics with skin-nourishing natural ingredients.",
      icon: "🧴",
    },
  ];

  const industries = [
    "Food & Beverage Industry",
    "Health Supplement Manufacturers",
    "Baby Food Producers",
    "Cosmetic Companies",
    "Pharmaceutical Industry",
    "Organic Food Retailers",
    "Health Food Stores",
    "Bakeries & Confectioneries",
  ];

  return (
    <section id="applications" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-brand-brown border-b-2 border-brand-orange pb-3 inline-block mx-auto">Applications</h2>
        </div>
        
        <AnimatedTextSlider text="If you need any specific fruit or vegetable in powder form, we can provide it for you." />
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-brand-brown text-center">
              Our fruit powders can be used in:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-5 border border-gray-100 hover:border-brand-orange hover:shadow-lg transition-all">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{app.icon}</span>
                    <h4 className="font-bold text-brand-brown">{app.title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-brand-brown text-center">
              Industries We Serve:
            </h3>
            
            <div className="bg-gradient-to-r from-brand-peach/50 to-[#ffafbd]/50 rounded-lg p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="text-brand-green mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-800">{industry}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-white/80 rounded-md">
                <h4 className="font-semibold text-center text-brand-brown mb-3">Custom Solutions</h4>
                <p className="text-gray-700 text-center text-sm">
                  We work with businesses of all sizes to develop custom powder solutions that meet specific product requirements and industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
