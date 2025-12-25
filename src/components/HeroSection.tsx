import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Code, Palette } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-copper/10 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              طراح و توسعه‌دهنده وب خلاق
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block text-foreground">امیرکیان</span>
            <span className="block text-gradient mt-2">ولیزاده</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            خالق تجربه‌های دیجیتال منحصر به فرد
            <br className="hidden sm:block" />
            با ترکیب هنر و تکنولوژی
          </p>

          {/* Floating icons */}
          <div
            className={`flex items-center gap-6 mb-12 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl glass">
              <Code className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Frontend Developer</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl glass">
              <Palette className="w-5 h-5 text-copper" />
              <span className="text-sm font-medium">UI/UX Designer</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button variant="hero" size="xl">
              مشاهده نمونه کارها
            </Button>
            <Button variant="hero-outline" size="xl">
              تماس با من
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-8 md:gap-16 mt-20 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { value: "+۵", label: "سال تجربه" },
              { value: "+۵۰", label: "پروژه موفق" },
              { value: "+۳۰", label: "مشتری راضی" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm">اسکرول کنید</span>
          <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-primary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
