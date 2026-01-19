import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Star, Gift, Users, Heart } from "lucide-react";

const pricingPlans = [
  {
    name: "One-Time Package",
    description: "Perfect for a single, thoughtful gesture",
    price: 49,
    period: "per package",
    features: [
      "Choose any care package",
      "Personalized message included",
      "APO/FPO/DPO shipping included",
      "Tracking & delivery confirmation",
      "Quality guarantee",
    ],
    popular: false,
    cta: "Order Now",
  },
  {
    name: "Monthly Subscription",
    description: "Keep the love flowing every month",
    price: 44,
    period: "per month",
    savings: "Save 10%",
    features: [
      "Monthly care package delivery",
      "Flexible package selection",
      "Priority shipping",
      "Change or pause anytime",
      "Subscriber-exclusive items",
      "Dedicated support",
    ],
    popular: true,
    cta: "Start Monthly",
  },
  {
    name: "Quarterly Plan",
    description: "Great for deployment length support",
    price: 125,
    period: "per quarter",
    savings: "Save 15%",
    features: [
      "3 packages per quarter",
      "Mix and match package types",
      "Priority shipping",
      "Flexible scheduling",
      "Quarterly care reports",
      "Subscriber-exclusive items",
    ],
    popular: false,
    cta: "Start Quarterly",
  },
  {
    name: "Annual Plan",
    description: "Best value for long deployments",
    price: 399,
    period: "per year",
    savings: "Save 25%",
    features: [
      "12 packages per year",
      "Maximum flexibility",
      "VIP priority shipping",
      "Exclusive holiday packages",
      "Personal account manager",
      "Premium items included",
    ],
    popular: false,
    cta: "Start Annual",
  },
];

const specialOptions = [
  {
    icon: Users,
    title: "Corporate & Group Sponsorship",
    description: "Partner with HomeFront Heroes to support troops through your organization. Custom branding, bulk pricing, and dedicated coordination.",
    cta: "Learn More",
    link: "/contact",
  },
  {
    icon: Heart,
    title: "Pay It Forward",
    description: "Can't send to a specific service member? Donate a care package to a troop who might not receive mail from home. We'll handle the rest.",
    cta: "Donate a Package",
    link: "/contact",
  },
  {
    icon: Gift,
    title: "Gift a Subscription",
    description: "Give the gift of connection. Purchase a subscription for a military family so they can send care packages throughout a deployment.",
    cta: "Gift a Subscription",
    link: "/contact",
  },
];

export default function PricingPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Choose the plan that works for you. All options include shipping and our quality guarantee.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-lg p-6 card-shadow ${
                  plan.popular ? "ring-2 ring-secondary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3" /> Most Popular
                  </div>
                )}
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
                  {plan.savings && (
                    <span className="ml-2 text-sm text-secondary font-medium">{plan.savings}</span>
                  )}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/contact">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Options */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            More Ways to Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialOptions.map((option) => (
              <div key={option.title} className="bg-card rounded-lg p-6 card-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <option.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {option.description}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to={option.link}>{option.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Pricing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-primary rounded-lg p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Bulk Orders for Units & Organizations
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Ordering for an entire unit, organization, or event? Contact us for special bulk pricing, custom packages, and coordination support.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Request Bulk Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
