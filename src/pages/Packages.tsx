import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import carePackage from "@/assets/care-package.jpg";
import hygienePackage from "@/assets/hygiene-package.jpg";
import holidayPackage from "@/assets/holiday-package.jpg";

const packages = [
  {
    id: "snacks-comfort",
    name: "Snacks & Comfort Box",
    description: "Our most popular package! Packed with favorite American snacks, gourmet coffee, premium candy, jerky, cookies, and comfort items that remind them of home.",
    includes: ["Assorted snacks & chips", "Gourmet coffee or tea", "Premium candy & chocolate", "Protein bars & jerky", "Instant soup or oatmeal", "Playing cards or puzzle book"],
    price: 100,
    image: carePackage,
    popular: true,
  },
  {
    id: "hygiene",
    name: "Hygiene Essentials Kit",
    description: "Quality personal care items they may not have access to. Everything needed to stay fresh and comfortable in challenging environments.",
    includes: ["Premium soap & body wash", "Toothpaste & toothbrush", "Razors & shaving cream", "Sunscreen & lip balm", "Wet wipes & hand sanitizer", "Foot powder & lotion"],
    price: 85,
    image: hygienePackage,
    popular: false,
  },
  {
    id: "holiday",
    name: "Holiday Care Package",
    description: "Celebrate holidays away from home with festive treats, decorations, and seasonal goodies. Available for major holidays throughout the year.",
    includes: ["Seasonal candy & treats", "Holiday decorations", "Festive snacks", "Hot cocoa or cider mix", "Small wrapped surprises", "Holiday card from you"],
    price: 120,
    image: holidayPackage,
    popular: false,
  },
  {
    id: "custom",
    name: "Custom Care Package",
    description: "Build your own package from scratch. Choose exactly what you want to include based on your service member's preferences and needs.",
    includes: ["Choose from 100+ items", "Personalized message", "Custom combination", "Dietary accommodations", "Special requests honored", "Flexible pricing"],
    price: 150,
    image: carePackage,
    popular: false,
    customNote: "Starting price - varies by selection",
  },
];

export default function PackagesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Care Package Options
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            From snacks to essentials, choose the perfect package for your service member or build your own.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-card rounded-lg overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    {pkg.popular && (
                      <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {pkg.description}
                    </p>
                    <div className="mb-4">
                      <p className="font-medium text-foreground text-sm mb-2">What's Included:</p>
                      <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <span className="text-secondary">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-2xl font-bold text-secondary">${pkg.price}</span>
                        {pkg.customNote && (
                          <p className="text-xs text-muted-foreground">{pkg.customNote}</p>
                        )}
                      </div>
                      <Button asChild>
                        <Link to="/contact">Select Package</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Want Regular Deliveries?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Set up a subscription and never miss a chance to send love. Monthly, quarterly, or annual plans available with significant savings.
          </p>
          <Button size="lg" asChild>
            <Link to="/pricing">View Subscription Plans</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
