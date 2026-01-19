import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "My son's face lit up on our video call when he showed me the care package. It meant the world to both of us.",
    author: "Sarah M.",
    role: "Military Mom, Texas",
    rating: 5,
  },
  {
    quote: "The packages always arrive on time, even to remote locations. The quality is outstanding - these folks truly understand military life.",
    author: "CPT James Rodriguez",
    role: "U.S. Army",
    rating: 5,
  },
  {
    quote: "We use HomeFront Heroes for our company's military support program. The bulk ordering and customization options are fantastic.",
    author: "Mike T.",
    role: "Corporate Sponsor, Ohio",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            What Families Are Saying
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Don't just take our word for it — hear from the families and service members we've helped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-secondary/40" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-primary-foreground">
                  {testimonial.author}
                </p>
                <p className="text-primary-foreground/60 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
