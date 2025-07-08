
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { Partners } from "@/components/Partners";
import { Training } from "@/components/Training";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Partners />
      <Training />
      <Footer />
    </div>
  );
};

export default Index;
