import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, Edit, Truck, Heart, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Choose Your Package",
    description: "Browse our curated care packages or build your own custom box. Select from snacks, hygiene essentials, seasonal items, or create a personalized mix.",
  },
  {
    number: "02",
    icon: Edit,
    title: "Personalize It",
    description: "Add a personal message, choose specific items based on preferences, or include a handwritten note. Make it as unique as your service member.",
  },
  {
    number: "03",
    icon: Truck,
    title: "We Handle Shipping",
    description: "Enter the APO/FPO/DPO address, and we'll take care of the rest. We pack everything securely and ship directly to military mail centers worldwide.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Smiles Delivered",
    description: "Your loved one receives a package full of love from home. Track delivery status and know exactly when it arrives at their location.",
  },
];

export default function HowItWorksPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            How It Works
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Sending care to your deployed loved one has never been easier. Four simple steps to deliver a piece of home.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 md:gap-8 pb-12 last:pb-0">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-[calc(100%-4rem)] bg-border" />
                )}
                
                {/* Icon */}
                <div className="relative shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-secondary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <p className="text-secondary font-bold text-sm mb-1">{step.number}</p>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Military Address Shipping
            </h2>
            <div className="bg-card rounded-lg p-8 card-shadow">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                APO, FPO & DPO Addresses
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We specialize in shipping to military postal addresses. APO (Army Post Office), FPO (Fleet Post Office), and DPO (Diplomatic Post Office) addresses allow mail to reach service members stationed overseas as if they were in the United States.
              </p>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm text-foreground mb-6">
                <p>SGT John Smith</p>
                <p>Unit 12345 Box 1234</p>
                <p>APO AE 09012</p>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Delivery typically takes 7-14 days depending on location
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  All packages include tracking through the military postal system
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  We comply with all military shipping regulations and restrictions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Choose a care package and bring a smile to your service member's face.
          </p>
          <Button size="xl" asChild>
            <Link to="/packages">
              Browse Packages <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
