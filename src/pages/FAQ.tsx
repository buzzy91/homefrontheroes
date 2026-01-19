import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Ordering & Shipping",
    questions: [
      {
        q: "How long does shipping take to military addresses?",
        a: "Delivery times vary by location. Generally, packages to APO/FPO/DPO addresses take 7-14 business days. Remote locations or ships may take longer. We ship Priority Mail, which is the fastest option for military addresses.",
      },
      {
        q: "What is an APO/FPO/DPO address?",
        a: "APO (Army Post Office), FPO (Fleet Post Office), and DPO (Diplomatic Post Office) are special military address formats that allow mail to be delivered to service members stationed overseas. These addresses route mail through U.S. military postal facilities.",
      },
      {
        q: "Can I track my package?",
        a: "Yes! All packages include tracking. You'll receive a tracking number via email once your package ships. Note that tracking may become less detailed once the package enters the military postal system overseas.",
      },
      {
        q: "Do you ship to all military locations?",
        a: "We ship to all APO, FPO, and DPO addresses worldwide. This includes Army, Navy, Marine Corps, Air Force, Space Force, and Coast Guard installations. Some extremely remote or restricted locations may have limitations.",
      },
    ],
  },
  {
    title: "Items & Restrictions",
    questions: [
      {
        q: "What items can and cannot be shipped?",
        a: "We only include items that comply with U.S. military postal regulations. Prohibited items include alcohol, tobacco products, perishable foods requiring refrigeration, aerosol cans, and anything flammable or hazardous. All our pre-made packages are 100% compliant.",
      },
      {
        q: "Can I request specific items or dietary restrictions?",
        a: "Absolutely! Our custom packages allow you to select specific items. We can accommodate dietary needs including gluten-free, nut-free, vegetarian, and other restrictions. Just note your requirements when ordering.",
      },
      {
        q: "Are the items in packages fresh?",
        a: "Yes. We carefully select shelf-stable items with long expiration dates and pack packages close to ship date. All food items have at least 3-6 months until expiration when shipped.",
      },
    ],
  },
  {
    title: "Subscriptions & Billing",
    questions: [
      {
        q: "How do subscriptions work?",
        a: "Subscriptions automatically send a care package on your chosen schedule (monthly, quarterly, or annually). You can change the package type, skip a month, or cancel anytime through your account dashboard or by contacting us.",
      },
      {
        q: "Can I pause or cancel my subscription?",
        a: "Yes, you can pause or cancel your subscription at any time. Changes made before your next billing date will take effect immediately. There are no cancellation fees.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. For corporate accounts, we also offer invoicing options.",
      },
    ],
  },
  {
    title: "Corporate & Donations",
    questions: [
      {
        q: "How does corporate sponsorship work?",
        a: "Organizations can sponsor care packages for troops who may not receive mail from home. We offer bulk pricing, custom branding options, and can coordinate with specific units or programs. Contact us for details.",
      },
      {
        q: "Is HomeFront Heroes a nonprofit?",
        a: "HomeFront Heroes is a social enterprise, not a 501(c)(3) nonprofit. While donations aren't tax-deductible, we partner with certified military support nonprofits for certain programs. Contact us for more information.",
      },
      {
        q: "How does the 'Pay It Forward' program work?",
        a: "When you choose Pay It Forward, you purchase a care package that we'll send to a service member who may not have family sending packages. We work with chaplains and unit commanders to identify recipients.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Everything you need to know about sending care packages to your service member.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.title}-${index}`}
                      className="bg-card rounded-lg px-6 card-shadow border-none"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
