
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NeuraImpactDashboard from "@/components/NeuraImpactDashboard";
import TokenExchange from "@/components/TokenExchange";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <NeuraImpactDashboard />
        <TokenExchange />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
