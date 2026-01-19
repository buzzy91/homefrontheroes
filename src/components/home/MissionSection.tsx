import { Heart, Users, Globe, Star } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Boosting Morale",
    description: "Every package is a reminder that someone back home is thinking of them. A taste of home can brighten the toughest days.",
  },
  {
    icon: Users,
    title: "Connecting Families",
    description: "We bridge the distance between loved ones, making it easy for families, friends, and communities to show their support.",
  },
  {
    icon: Globe,
    title: "Reliable Delivery",
    description: "We specialize in military addresses. Your package arrives safely, whether it's headed to a ship, base, or forward operating location.",
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    description: "Every item is carefully selected for durability and quality. We only send products we'd want our own service members to receive.",
  },
];

export function MissionSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At HomeFront Heroes, we believe no service member should feel forgotten. Our mission is simple: deliver a piece of home to every deployed hero.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card rounded-lg p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
