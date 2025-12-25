import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "فروشگاه آنلاین لوکس",
    category: "E-Commerce",
    description: "طراحی و توسعه فروشگاه آنلاین با رابط کاربری مدرن، سیستم پرداخت امن و مدیریت موجودی هوشمند",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    color: "from-amber-500/20 to-orange-500/20",
    stats: { views: "۱۲K+", sales: "۵۰۰+" },
  },
  {
    id: 2,
    title: "داشبورد مدیریت پروژه",
    category: "Web Application",
    description: "پلتفرم مدیریت پروژه با قابلیت‌های پیشرفته مانند کانبان، گانت چارت و گزارش‌گیری آنی",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Socket.io"],
    color: "from-blue-500/20 to-purple-500/20",
    stats: { users: "۲K+", projects: "۱۵۰+" },
  },
  {
    id: 3,
    title: "پلتفرم رزرو هتل",
    category: "Booking Platform",
    description: "سیستم رزرو آنلاین هتل با جستجوی پیشرفته، مقایسه قیمت و نظرات کاربران",
    technologies: ["Next.js", "GraphQL", "Prisma", "AWS", "Tailwind"],
    color: "from-emerald-500/20 to-teal-500/20",
    stats: { bookings: "۳K+", hotels: "۲۰۰+" },
  },
  {
    id: 4,
    title: "اپلیکیشن سلامت و تناسب اندام",
    category: "Health & Fitness",
    description: "اپلیکیشن ردیابی سلامت با قابلیت‌های تنظیم برنامه ورزشی، ثبت کالری و تحلیل پیشرفت",
    technologies: ["React Native", "Firebase", "Redux", "Charts.js"],
    color: "from-pink-500/20 to-rose-500/20",
    stats: { downloads: "۸K+", rating: "۴.۸" },
  },
  {
    id: 5,
    title: "سایت خبری چند زبانه",
    category: "News Portal",
    description: "پورتال خبری با پشتیبانی از چند زبان، سیستم نظرات و پنل مدیریت محتوا",
    technologies: ["Next.js", "i18n", "Strapi CMS", "PostgreSQL"],
    color: "from-violet-500/20 to-indigo-500/20",
    stats: { articles: "۵K+", readers: "۵۰K+" },
  },
  {
    id: 6,
    title: "پلتفرم آموزش آنلاین",
    category: "EdTech",
    description: "سامانه آموزش آنلاین با قابلیت پخش ویدیو، آزمون‌های تعاملی و صدور گواهی",
    technologies: ["React", "Node.js", "WebRTC", "MongoDB", "FFmpeg"],
    color: "from-cyan-500/20 to-sky-500/20",
    stats: { courses: "۱۲۰+", students: "۱۰K+" },
  },
];

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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
      id="portfolio"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-copper/5 to-transparent blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            نمونه کارها
          </span>
          <h2
            className={`font-display text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            پروژه‌های
            <span className="text-gradient"> منتخب</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            مجموعه‌ای از بهترین پروژه‌هایی که طراحی و توسعه داده‌ام
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-opacity duration-500 ${
                hoveredProject === project.id ? "opacity-100" : "opacity-50"
              }`} />
              
              {/* Glass overlay */}
              <div className="relative glass border-2 border-transparent group-hover:border-primary/30 rounded-3xl p-6 h-full transition-all duration-500">
                {/* Category badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-6 text-sm">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-1">
                      <span className="font-bold text-gradient">{value}</span>
                      <span className="text-muted-foreground">{key}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Button variant="gold" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    مشاهده
                  </Button>
                  <Button variant="glass" size="icon" className="shrink-0">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="glass" size="icon" className="shrink-0">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button variant="hero-outline" size="lg">
            مشاهده همه پروژه‌ها
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
