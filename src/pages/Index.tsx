import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";

const Index = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = "امیرکیان ولیزاده | طراح و توسعه‌دهنده وب";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "پرتفولیوی امیرکیان ولیزاده - طراح و توسعه‌دهنده وب با بیش از ۵ سال تجربه در React، TypeScript و UI/UX Design");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden" dir="rtl">
      {/* Floating background shapes */}
      <FloatingShapes />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ExperienceSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
