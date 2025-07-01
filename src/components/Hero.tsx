
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue via-pastel-purple to-pastel-pink" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-blue/20 rounded-full blur-xl floating-element" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-brand-purple/20 rounded-full blur-xl floating-element" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-brand-pink/20 rounded-full blur-xl floating-element" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-brand-mint/20 rounded-full blur-xl floating-element" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ students</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your <span className="gradient-text">Side Hustle</span> Starts Here
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Connect with fellow students to offer your skills or find the services you need. 
              Turn your talents into income while building your network.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button className="btn-primary group">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-secondary">
                Browse Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/90 rounded-2xl shadow-lg mx-auto mb-2">
                  <Users className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="text-2xl font-bold text-gray-800">10K+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/90 rounded-2xl shadow-lg mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-brand-purple" />
                </div>
                <div className="text-2xl font-bold text-gray-800">50K+</div>
                <div className="text-sm text-gray-600">Gigs Done</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/90 rounded-2xl shadow-lg mx-auto mb-2">
                  <Star className="h-6 w-6 text-brand-pink" />
                </div>
                <div className="text-2xl font-bold text-gray-800">4.9</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="glass-card rounded-4xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=faces"
                  alt="Student working on laptop"
                  className="w-full h-80 object-cover rounded-3xl"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 glass-card rounded-3xl p-4 shadow-xl animate-bounce-gentle">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold">$</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Earnings</div>
                    <div className="text-lg font-bold text-green-600">$2,450</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-card rounded-3xl p-4 shadow-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-2xl flex items-center justify-center">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Rating</div>
                    <div className="text-lg font-bold text-blue-600">5.0 ★</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
