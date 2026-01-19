import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { MissionSection } from "@/components/home/MissionSection";
import { PackagesPreview } from "@/components/home/PackagesPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <PackagesPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
