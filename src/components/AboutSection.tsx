import { useEffect, useRef, useState } from "react";
import { Palette, Code2, Lightbulb, Rocket } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "طراحی خلاقانه",
    description: "ایجاد رابط‌های کاربری زیبا و جذاب که کاربران را مجذوب می‌کند",
  },
  {
    icon: Code2,
    title: "کدنویسی تمیز",
    description: "نوشتن کدهای بهینه، قابل نگهداری و استاندارد",
  },
  {
    icon: Lightbulb,
    title: "حل مسئله",
    description: "پیدا کردن راه‌حل‌های نوآورانه برای چالش‌های پیچیده",
  },
  {
    icon: Rocket,
    title: "تحویل سریع",
    description: "ارائه پروژه‌ها در زمان مقرر با کیفیت بالا",
  },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-gradient-radial from-primary/5 to-transparent blur-3xl -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Image/Visual */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute inset-0 border border-primary/20 rounded-3xl rotate-6 transition-transform duration-500 hover:rotate-3" />
              <div className="absolute inset-0 border border-primary/10 rounded-3xl -rotate-3 transition-transform duration-500 hover:-rotate-6" />
              
              {/* Main image container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden glass border-2 border-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-copper/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center">
                      <span className="font-display text-4xl font-bold text-charcoal">AK</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">امیرکیان ولیزاده</h3>
                    <p className="text-muted-foreground mt-2">Web Designer & Developer</p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full glass border-primary/30 animate-float">
                <span className="text-sm font-medium text-gradient">+۵ سال تجربه</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass border-primary/30 animate-float-delayed">
                <span className="text-sm font-medium text-gradient">Frontend Expert</span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              درباره من
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              طراحی تجربه‌های
              <span className="text-gradient block mt-2">دیجیتال بی‌نظیر</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              من امیرکیان ولیزاده هستم، یک طراح و توسعه‌دهنده وب با بیش از ۵ سال تجربه در
              ایجاد وب‌سایت‌ها و اپلیکیشن‌های مدرن. علاقه‌مند به ترکیب زیبایی‌شناسی با
              عملکرد فوق‌العاده هستم و همیشه در تلاشم تا بهترین تجربه کاربری را خلق کنم.
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group p-5 rounded-2xl glass hover:border-primary/30 transition-all duration-300 hover-lift ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-charcoal" />
                  </div>
                  <h4 className="font-display text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
