
import About from "@/components/About";
import AnimatedTextSlider from "@/components/AnimatedTextSlider";
import Applications from "@/components/Applications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AnimatedTextSlider text="If you need any specific fruit or vegetable in powder form, we can provide it for you." />
        <About />
        <Products />
        <Applications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
