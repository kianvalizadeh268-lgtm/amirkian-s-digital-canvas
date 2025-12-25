import { useEffect, useRef, useState } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "شرکت فناوری دیجیکالا",
    location: "تهران، ایران",
    period: "۱۴۰۱ - اکنون",
    description: "رهبری تیم فرانت‌اند در توسعه محصولات جدید، بهینه‌سازی عملکرد و پیاده‌سازی معماری میکروفرانت‌اند",
    achievements: [
      "بهبود ۴۰٪ سرعت لود صفحات",
      "رهبری تیم ۵ نفره توسعه‌دهنده",
      "طراحی و پیاده‌سازی Design System",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "استارتاپ تپسی",
    location: "تهران، ایران",
    period: "۱۳۹۹ - ۱۴۰۱",
    description: "توسعه رابط کاربری اپلیکیشن‌های وب و موبایل با تمرکز بر تجربه کاربری و دسترسی‌پذیری",
    achievements: [
      "توسعه ۱۵+ فیچر جدید",
      "کاهش ۳۰٪ باگ‌های production",
      "بهبود امتیاز دسترسی‌پذیری به ۹۵",
    ],
    current: false,
  },
  {
    id: 3,
    role: "UI/UX Designer & Developer",
    company: "آژانس دیجیتال پیکسل",
    location: "اصفهان، ایران",
    period: "۱۳۹۷ - ۱۳۹۹",
    description: "طراحی و توسعه وب‌سایت‌های شرکتی و فروشگاهی برای مشتریان متنوع",
    achievements: [
      "طراحی ۳۰+ وب‌سایت",
      "افزایش نرخ تبدیل ۲۵٪",
      "جایزه بهترین طراحی سال",
    ],
    current: false,
  },
  {
    id: 4,
    role: "Junior Web Developer",
    company: "شرکت نرم‌افزاری پارس",
    location: "اصفهان، ایران",
    period: "۱۳۹۵ - ۱۳۹۷",
    description: "شروع مسیر حرفه‌ای در توسعه وب با تمرکز بر HTML، CSS و JavaScript",
    achievements: [
      "یادگیری فریم‌ورک React",
      "مشارکت در ۱۰+ پروژه",
      "دریافت گواهی توسعه‌دهنده برتر",
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-muted/30"
    >
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-px h-1/2 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/3 right-0 w-px h-1/3 bg-gradient-to-b from-transparent via-copper/20 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            تجربیات کاری
          </span>
          <h2
            className={`font-display text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            مسیر
            <span className="text-gradient"> حرفه‌ای</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            بیش از ۵ سال تجربه در شرکت‌های پیشرو تکنولوژی
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-gold shadow-gold z-10">
                {exp.current && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content - alternating sides on desktop */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:order-1 md:ml-auto"} pl-20 md:pl-0`}>
                <div className={`group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-500 hover-lift ${
                  index % 2 === 0 ? "" : ""
                }`}>
                  {/* Current badge */}
                  {exp.current && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      موقعیت فعلی
                    </div>
                  )}

                  {/* Role */}
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>

                  {/* Company info */}
                  <div className={`flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
