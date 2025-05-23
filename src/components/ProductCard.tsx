
import { ReactNode } from "react";

interface ProductCardProps {
  title: string | React.ReactNode;  // Updated to allow ReactNode for image titles
  image: string;
  icon?: ReactNode;
  benefits: string[];
  color: string;
}

const ProductCard = ({ title, image, icon, benefits, color }: ProductCardProps) => {
  // Generate alt text from title if it's a ReactNode
  const altText = typeof title === "string" ? title : "Product image";
  
  return (
    <div className="product-card hover:scale-[1.02] transition-all">
      <div className="flex items-center mb-3">
        <span className={`text-${color} mr-2`}>{icon}</span>
        <h3 className="text-xl md:text-2xl font-bold text-brand-brown font-cursive">
          {typeof title === "string" ? title : title}
        </h3>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="md:w-1/3">
          <img src={image} alt={altText} className="rounded-lg shadow-sm w-full h-auto md:max-h-40 object-cover" />
        </div>
        
        <div className="md:w-2/3">
          <h4 className="font-semibold mb-2 text-brand-brown">Benefits:</h4>
          <ul className="benefit-list text-gray-700">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
