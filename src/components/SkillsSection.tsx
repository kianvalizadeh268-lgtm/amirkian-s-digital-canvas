import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 92, category: "Frontend" },
  { name: "HTML5 / CSS3", level: 98, category: "Frontend" },
  { name: "Figma / Adobe XD", level: 88, category: "Design" },
  { name: "UI/UX Design", level: 85, category: "Design" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Git / GitHub", level: 90, category: "Tools" },
  { name: "Responsive Design", level: 96, category: "Frontend" },
];

const SkillsSection = () => {
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
      id="skills"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-muted/30"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            مهارت‌ها
          </span>
          <h2
            className={`font-display text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            تخصص‌های
            <span className="text-gradient"> من</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            ترکیبی از مهارت‌های فنی و خلاقیت برای ارائه بهترین نتیجه
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-500 hover-lift ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-xs text-muted-foreground">{skill.category}</span>
                </div>
                <span className="text-2xl font-display font-bold text-gradient">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-gold rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${400 + index * 50}ms`,
                  }}
                />
                {/* Glow effect */}
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-gold rounded-full blur-sm opacity-50 transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${400 + index * 50}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Technologies showcase */}
        <div
          className={`mt-20 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-center text-lg font-medium text-muted-foreground mb-8">
            تکنولوژی‌هایی که با آنها کار می‌کنم
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Next.js", "TypeScript", "Tailwind", "Figma", "Node.js", "Git", "Framer Motion", "Sass", "Redux"].map(
              (tech, index) => (
                <div
                  key={tech}
                  className="px-6 py-3 rounded-full glass hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
