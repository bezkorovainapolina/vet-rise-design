
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Initiators } from "@/components/Initiators";
import { Training } from "@/components/Training";
import { About } from "@/components/About";
import { Goals } from "@/components/Goals";
import { News } from "@/components/News";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Initiators />
      <Training />
      <About />
      <Goals />
      <News />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
