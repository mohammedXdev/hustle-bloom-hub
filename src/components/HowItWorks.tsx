
import { UserPlus, Search, MessageCircle, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your student profile in minutes with your university email",
      color: "from-brand-blue to-brand-purple"
    },
    {
      icon: Search,
      title: "Browse & Connect",
      description: "Find services you need or post your own skills to offer",
      color: "from-brand-purple to-brand-pink"
    },
    {
      icon: MessageCircle,
      title: "Collaborate",
      description: "Chat with other students and work together on projects",
      color: "from-brand-pink to-brand-mint"
    },
    {
      icon: Star,
      title: "Build Reputation",
      description: "Earn reviews and grow your student network organically",
      color: "from-brand-mint to-brand-blue"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your side hustle journey in four simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connection Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 z-0" />
              )}
              
              {/* Step Card */}
              <div className="relative glass-card rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 group-hover:scale-105 bg-white/80">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:animate-bounce-gentle`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-4xl p-8 bg-gradient-to-r from-pastel-blue to-pastel-purple max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Ready to start your journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of students already earning money with their skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Create Account
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
