import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import carePackage from "@/assets/care-package.jpg";
import hygienePackage from "@/assets/hygiene-package.jpg";
import holidayPackage from "@/assets/holiday-package.jpg";

const packages = [
  {
    name: "Comfort & Snacks Box",
    description: "Packed with favorite American snacks, coffee, candy, and comfort items to brighten their day.",
    price: "From $49",
    image: carePackage,
    popular: true,
  },
  {
    name: "Hygiene Essentials Kit",
    description: "Quality toiletries, skincare, and personal care items they may not have easy access to.",
    price: "From $39",
    image: hygienePackage,
    popular: false,
  },
  {
    name: "Holiday Care Package",
    description: "Seasonal treats, decorations, and festive items to celebrate holidays away from home.",
    price: "From $59",
    image: holidayPackage,
    popular: false,
  },
];

export function PackagesPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Care Packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Choose from our curated selection or build your own custom package.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/packages">
              View All Packages <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className="group bg-card rounded-lg overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {pkg.popular && (
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {pkg.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-secondary">{pkg.price}</span>
                  <Button size="sm" asChild>
                    <Link to="/packages">Select</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
