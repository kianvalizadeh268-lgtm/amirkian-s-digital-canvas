import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "ایمیل",
    value: "amirkian@example.com",
    href: "mailto:amirkian@example.com",
  },
  {
    icon: Phone,
    label: "تلفن",
    value: "+98 912 345 6789",
    href: "tel:+989123456789",
  },
  {
    icon: MapPin,
    label: "موقعیت",
    value: "تهران، ایران",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-muted/30"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-radial from-primary/5 to-transparent blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            تماس با من
          </span>
          <h2
            className={`font-display text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            بیایید با هم
            <span className="text-gradient"> همکاری کنیم</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            آماده شنیدن ایده‌های شما هستم. برای شروع پروژه جدید تماس بگیرید
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact info */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <h3 className="font-display text-2xl font-bold mb-8">
              راه‌های ارتباطی
            </h3>

            {/* Contact cards */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-5 p-5 rounded-2xl glass hover:border-primary/30 transition-all duration-300 hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-charcoal" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">شبکه‌های اجتماعی</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-xl glass hover:bg-primary/10 hover:border-primary/30 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass">
              <h3 className="font-display text-2xl font-bold mb-6">
                ارسال پیام
              </h3>

              <div className="space-y-5">
                {/* Name input */}
                <div>
                  <label className="block text-sm font-medium mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="نام خود را وارد کنید"
                    required
                  />
                </div>

                {/* Email input */}
                <div>
                  <label className="block text-sm font-medium mb-2">ایمیل</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                {/* Subject input */}
                <div>
                  <label className="block text-sm font-medium mb-2">موضوع</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="موضوع پیام"
                    required
                  />
                </div>

                {/* Message textarea */}
                <div>
                  <label className="block text-sm font-medium mb-2">پیام</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                    placeholder="پیام خود را بنویسید..."
                    required
                  />
                </div>

                {/* Submit button */}
                <Button type="submit" variant="hero" className="w-full">
                  <Send className="w-5 h-5 ml-2" />
                  ارسال پیام
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
