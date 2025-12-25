import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    id: 1,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    date: "۲۰۲۳",
    credentialId: "META-FE-2023",
    skills: ["React", "JavaScript", "CSS", "UI/UX"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 2,
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "۲۰۲۳",
    credentialId: "GOOGLE-UX-2023",
    skills: ["UX Research", "Wireframing", "Prototyping", "Figma"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "۲۰۲۲",
    credentialId: "AWS-CCP-2022",
    skills: ["Cloud Computing", "AWS Services", "Security"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 4,
    title: "Advanced React and Redux",
    issuer: "Udemy",
    date: "۲۰۲۲",
    credentialId: "UDEMY-REACT-2022",
    skills: ["React Hooks", "Redux", "Testing", "Performance"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 5,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "۲۰۲۱",
    credentialId: "FCC-JS-2021",
    skills: ["Algorithms", "Data Structures", "Problem Solving"],
    color: "from-rose-500/20 to-red-500/20",
  },
  {
    id: 6,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "۲۰۲۱",
    credentialId: "FCC-RWD-2021",
    skills: ["HTML", "CSS", "Flexbox", "Grid", "Responsive"],
    color: "from-cyan-500/20 to-teal-500/20",
  },
];

const CertificatesSection = () => {
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
      id="certificates"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-gradient-radial from-primary/5 to-transparent blur-3xl -translate-y-1/2" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            گواهینامه‌ها
          </span>
          <h2
            className={`font-display text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            مدارک و
            <span className="text-gradient"> افتخارات</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            گواهینامه‌های معتبر بین‌المللی در حوزه طراحی و توسعه وب
          </p>
        </div>

        {/* Certificates grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 hover-lift ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative glass border-2 border-transparent group-hover:border-primary/30 rounded-2xl p-6 h-full transition-all duration-500">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-charcoal" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <span className="font-medium">{cert.issuer}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Credential ID */}
                <p className="text-xs text-muted-foreground mb-4">
                  ID: {cert.credentialId}
                </p>

                {/* View button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  مشاهده گواهینامه
                  <ExternalLink className="w-4 h-4 mr-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
