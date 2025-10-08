import { ThemeProvider } from "@/contexts/ThemeContext";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PersonaReactions } from "@/components/PersonaReactions";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <PersonaReactions />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
