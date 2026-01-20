import { Link } from "react-router-dom";
import { Package, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Package className="h-8 w-8 text-secondary" />
              <span className="font-serif text-xl font-bold">HomeFront Heroes</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Connecting families with their heroes overseas through thoughtfully curated care packages.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "How It Works", path: "/how-it-works" },
                { name: "Care Packages", path: "/packages" },
                { name: "Pricing", path: "/pricing" },
                { name: "FAQ", path: "/faq" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                { name: "Contact Us", path: "/contact" },
                { name: "Shipping Info", path: "/faq" },
                { name: "Track Your Package", path: "/faq" },
                { name: "Corporate Giving", path: "/pricing" },
                { name: "Sponsorship", path: "/pricing" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-5 w-5 shrink-0 text-secondary" />
                <span>123 Patriot Way<br />Arlington, VA 22201</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-5 w-5 shrink-0 text-secondary" />
                <span>(315) 270-6395</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-5 w-5 shrink-0 text-secondary" />
                <span>davidfray701@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 HomeFront Heroes. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
