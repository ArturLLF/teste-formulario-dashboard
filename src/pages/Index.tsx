import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ProblemsSection from "@/components/ProblemsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
import ResultsSection from "@/components/ResultsSection";
import ImpactPhrase from "@/components/ImpactPhrase";
import CtaSection from "@/components/CtaSection";
import DiagnosticForm from "@/components/DiagnosticForm";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <ProblemsSection />
      <AboutSection />
      <ServicesSection />
      <MethodSection />
      <ResultsSection />
      <ImpactPhrase />
      <CtaSection />
      <DiagnosticForm />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
