
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import HowItWorks from '@/components/HowItWorks';
import StudentProfiles from '@/components/StudentProfiles';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedServices />
      <HowItWorks />
      <StudentProfiles />
      <Footer />
    </div>
  );
};

export default Index;
