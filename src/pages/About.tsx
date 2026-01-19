import { Layout } from "@/components/layout/Layout";
import { Heart, Users, Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About HomeFront Heroes
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Founded by veterans and military families, we understand what it means to serve — and to wait at home.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg text-muted-foreground max-w-none space-y-6">
              <p>
                HomeFront Heroes was born from a simple moment: a military spouse struggling to pack a care package that would survive a journey halfway around the world. The frustration of not knowing what to send, what would arrive intact, or how long it would take sparked an idea — why isn't there a better way?
              </p>
              <p>
                Founded in 2015, our team of veterans, military spouses, and supporters has since sent over 50,000 care packages to service members in more than 40 countries. We know the military postal system inside and out, and we've perfected the art of packing boxes that arrive safely, filled with items that bring genuine comfort.
              </p>
              <p>
                Every package we send carries more than snacks and toiletries — it carries love, connection, and a reminder that home is never far away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Compassion First",
                description: "We treat every service member like family. Each package is prepared with the same care we'd give to our own loved ones overseas.",
              },
              {
                icon: Target,
                title: "Reliability You Can Trust",
                description: "Military families have enough to worry about. We handle the logistics so you can focus on what matters — staying connected.",
              },
              {
                icon: Users,
                title: "Community Connection",
                description: "We're more than a business. We're a community of supporters, volunteers, and advocates for our troops.",
              },
              {
                icon: Award,
                title: "Quality Without Compromise",
                description: "We carefully vet every product. If it's not good enough for our own service members, it doesn't go in our boxes.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-card rounded-lg p-6 card-shadow">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-12 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { number: "50,000+", label: "Packages Delivered" },
              { number: "40+", label: "Countries Reached" },
              { number: "98%", label: "On-Time Delivery" },
              { number: "4.9/5", label: "Customer Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
