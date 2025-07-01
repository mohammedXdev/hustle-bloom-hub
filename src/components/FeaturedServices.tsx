
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from './ServiceCard';

const FeaturedServices = () => {
  const services = [
    {
      title: "I will design a modern logo for your startup",
      description: "Professional logo design with unlimited revisions. Perfect for startups and small businesses looking for a memorable brand identity.",
      price: 25,
      rating: 4.9,
      reviewCount: 127,
      deliveryTime: "2 days",
      sellerName: "Sarah Chen",
      sellerAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      tags: ["Logo Design", "Branding", "Adobe Illustrator"]
    },
    {
      title: "I will write engaging content for your blog",
      description: "SEO-optimized blog posts that drive traffic and engage your audience. Specialized in tech, lifestyle, and business topics.",
      price: 15,
      rating: 4.8,
      reviewCount: 89,
      deliveryTime: "3 days",
      sellerName: "Marcus Johnson",
      sellerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      category: "Writing",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=400&h=300&fit=crop",
      tags: ["Blog Writing", "SEO", "Content Strategy"]
    },
    {
      title: "I will help you with math and physics tutoring",
      description: "One-on-one tutoring sessions for calculus, physics, and advanced mathematics. Perfect for exam preparation.",
      price: 20,
      rating: 5.0,
      reviewCount: 156,
      deliveryTime: "Same day",
      sellerName: "Emily Rodriguez",
      sellerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      category: "Tutoring",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
      tags: ["Mathematics", "Physics", "Tutoring"]
    },
    {
      title: "I will develop a responsive website",
      description: "Modern, mobile-first websites built with React. Includes hosting setup and basic SEO optimization.",
      price: 75,
      rating: 4.9,
      reviewCount: 203,
      deliveryTime: "7 days",
      sellerName: "Alex Kim",
      sellerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      category: "Programming",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      tags: ["React", "Web Development", "Responsive Design"]
    },
    {
      title: "I will edit your videos professionally",
      description: "High-quality video editing for YouTube, social media, and promotional content. Color correction and sound design included.",
      price: 35,
      rating: 4.8,
      reviewCount: 94,
      deliveryTime: "4 days",
      sellerName: "Jordan Martinez",
      sellerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      category: "Video",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      tags: ["Video Editing", "Adobe Premiere", "Motion Graphics"]
    },
    {
      title: "I will translate documents in 5 languages",
      description: "Professional translation services for documents, websites, and marketing materials. Native speakers for accuracy.",
      price: 10,
      rating: 4.9,
      reviewCount: 178,
      deliveryTime: "1 day",
      sellerName: "Luna Zhang",
      sellerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      category: "Translation",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
      tags: ["Translation", "Multilingual", "Proofreading"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pastel-mint/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover amazing services from talented students in your area
          </p>
          
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['All', 'Design', 'Writing', 'Programming', 'Tutoring', 'Video', 'Translation'].map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className={`rounded-full px-6 py-2 ${
                  category === 'All' 
                    ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white' 
                    : 'bg-white/80 backdrop-blur-sm hover:bg-white'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button className="btn-primary group">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
