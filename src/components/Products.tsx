
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      title: "Banana Powder",
      image: "/lovable-uploads/e137bb65-65f3-4c26-aff9-f9d63fc7f596.png",
      icon: "🍌",
      benefits: [
        "Rich in potassium and vitamin B6",
        "Supports digestive health",
        "Natural sweetener alternative",
        "Great for baby food & smoothies",
      ],
      color: "yellow-500",
    },
    {
      title: (
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/665f0ea6-9992-4a9c-a6e7-cb2feafb38c0.png" 
            alt="Moringa Powder" 
            className="h-8 w-8 object-cover rounded-full mr-2"
          />
          <span>Moringa Powder</span>
        </div>
      ),
      image: "/lovable-uploads/68ba1801-1b12-44e9-aebd-ac5beca7dc57.png",
      icon: "🌿",
      benefits: [
        "Packed with antioxidants",
        "Boosts immunity and energy",
        "Supports healthy skin and hair",
        "Anti-inflammatory properties",
      ],
      color: "green-500",
    },
    {
      title: "Strawberry Powder",
      image: "/lovable-uploads/c88144ce-0a3b-498f-8404-fd4aa4d97b8c.png",
      icon: "🍓",
      benefits: [
        "Rich in Vitamin C and antioxidants",
        "Supports skin health",
        "Adds natural flavor and color",
        "Good for immunity",
      ],
      color: "red-500",
    },
    {
      title: "Apple Powder",
      image: "/lovable-uploads/47bb83d9-0ce9-4e29-8528-46d47fb118d7.png",
      icon: "🍎",
      benefits: [
        "Aids digestion with natural pectin",
        "Contains vitamins A, B, and C",
        "Adds flavor to cereals and baking",
        "Rich in fiber",
      ],
      color: "red-700",
    },
    {
      title: (
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/9fe5c0ed-9760-4dc5-b502-0f58b0cdab74.png" 
            alt="Mango" 
            className="h-8 w-8 object-cover rounded-full mr-2"
          />
          <span>Mango Powder</span>
        </div>
      ),
      image: "/lovable-uploads/49cb174f-9eaa-47cd-9c2b-c0b6c75a6ee1.png",
      icon: "🥭",
      benefits: [
        "Boosts immunity",
        "Good source of Vitamin A & E",
        "Enhances flavor in drinks and desserts",
        "Natural energy booster",
      ],
      color: "yellow-600",
    },
    {
      title: "Carrot Powder",
      image: "/lovable-uploads/6966b6ff-0c67-40f7-b4e1-137bfe77febc.png",
      icon: "🥕",
      benefits: [
        "Rich in beta-carotene and vitamin A",
        "Supports immunity and digestive health",
        "Natural sweetener in baking and smoothies",
      ],
      color: "orange-500",
    },
    {
      title: "Tamarind Seed Powder",
      image: "/lovable-uploads/83d61b95-0734-4bd3-8688-0a268df64988.png",
      icon: "🫘",
      benefits: [
        "Helps with digestion and gut health",
        "Natural remedy for joint pain and inflammation",
        "Used in traditional skincare for tightening and brightening",
      ],
      color: "amber-700",
    },
    {
      title: "Date Seed Powder",
      image: "/lovable-uploads/379fc9a9-00cb-4424-acde-0834f748eeef.png",
      icon: "🌰",
      benefits: [
        "Powerful antioxidant and anti-aging properties",
        "Supports heart health and boosts metabolism",
        "Can be used as a caffeine-free coffee substitute",
      ],
      color: "amber-800",
    },
    {
      title: "Turnip Powder",
      image: "/lovable-uploads/3992c2ee-94b0-44e2-81bb-5f867ca3f483.png",
      icon: "🥬",
      benefits: [
        "Rich in fiber, vitamin C, and antioxidants",
        "Supports liver detoxification",
        "Great for bone health and anti-inflammatory benefits",
      ],
      color: "green-700",
    },
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-brand-brown border-b-2 border-brand-orange pb-3 inline-block mx-auto">Our Products & Their Benefits</h2>
        </div>
        <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
          Our premium natural fruit powders are packed with nutrients and flavor. Each product is carefully processed to preserve the maximum nutritional value of the original fruit.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              image={product.image}
              icon={product.icon}
              benefits={product.benefits}
              color={product.color}
            />
          ))}
        </div>
        
        <div className="bg-brand-peach/30 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-3 text-brand-brown">Looking for something specific?</h3>
          <p className="mb-0">
            We also offer customized powder production — whether it's fruits, vegetables, or any specific ingredient your company needs. Just tell us what you need, and we'll make it happen!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
