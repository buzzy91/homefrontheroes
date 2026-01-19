import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-soldier.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Soldier with care package at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Shield className="h-4 w-4" />
            Proudly Supporting U.S. Troops Since 2015
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Send Love Across <br />
            <span className="text-gradient-gold">the Miles</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Help our brave service members feel connected to home with thoughtfully curated care packages. From snacks to essentials, every box carries a piece of home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/packages">
                Browse Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/how-it-works">How It Works</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 md:gap-10 text-primary-foreground/80 text-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-secondary" />
              <span>APO/FPO/DPO Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-secondary" />
              <span>50,000+ Packages Sent</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-secondary" />
              <span>Veteran Owned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
