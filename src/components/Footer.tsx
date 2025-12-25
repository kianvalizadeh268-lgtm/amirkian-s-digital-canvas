import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="font-display text-2xl font-bold text-gradient">
            AK
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            ساخته شده با
            <Heart className="w-4 h-4 text-primary fill-primary" />
            توسط امیرکیان ولیزاده
            <span className="mx-2">•</span>
            ۱۴۰۳
          </p>

          {/* Quick links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              درباره من
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
              نمونه کارها
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              تماس
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
