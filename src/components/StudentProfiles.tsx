import { MapPin, Star, Badge as BadgeIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const StudentProfiles = () => {
  const students = [
    {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      university: "MIT",
      major: "Computer Science",
      rating: 4.9,
      completedGigs: 47,
      location: "Boston, MA",
      skills: ["React", "Python", "UI/UX"],
      specialties: ["Web Development", "Mobile Apps"],
      earnings: "$3,200",
      joinedMonths: 8
    },
    {
      name: "Sarah Kim",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      university: "Stanford",
      major: "Design",
      rating: 5.0,
      completedGigs: 62,
      location: "Palo Alto, CA",
      skills: ["Figma", "Photoshop", "Branding"],
      specialties: ["Logo Design", "Brand Identity"],
      earnings: "$4,100",
      joinedMonths: 12
    },
    {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      university: "Harvard",
      major: "Business",
      rating: 4.8,
      completedGigs: 38,
      location: "Cambridge, MA",
      skills: ["Marketing", "Writing", "Analytics"],
      specialties: ["Content Writing", "Social Media"],
      earnings: "$2,750",
      joinedMonths: 6
    },
    {
      name: "Emily Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      university: "UC Berkeley",
      major: "Mathematics",
      rating: 4.9,
      completedGigs: 71,
      location: "Berkeley, CA",
      skills: ["Calculus", "Statistics", "R"],
      specialties: ["Math Tutoring", "Data Analysis"],
      earnings: "$3,900",
      joinedMonths: 10
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Meet Our <span className="gradient-text">Top Students</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with talented students from top universities
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {students.map((student, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-20 h-20 rounded-full object-cover shadow-lg"
                  />
                  {/* Online Status */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-card flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg text-foreground mb-1">
                  {student.name}
                </h3>
                
                <div className="text-sm text-muted-foreground mb-2">
                  {student.major} • {student.university}
                </div>
                
                <div className="flex items-center justify-center space-x-1 mb-3">
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{student.location}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-foreground">{student.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({student.completedGigs} gigs)
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1 justify-center">
                  {student.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-brand-blue/20 text-brand-blue text-xs px-2 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-4">
                <div className="text-xs font-medium text-foreground mb-2 text-center">
                  Specializes in:
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {student.specialties.map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="text-xs bg-brand-purple/20 text-brand-purple px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center text-center">
                  <div>
                    <div className="text-lg font-bold text-green-600">
                      {student.earnings}
                    </div>
                    <div className="text-xs text-muted-foreground">Earned</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-brand-blue">
                      {student.joinedMonths}mo
                    </div>
                    <div className="text-xs text-muted-foreground">Active</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full mt-4 bg-gradient-to-r from-brand-blue to-brand-purple text-white py-2 rounded-2xl text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                View Profile
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to join our community of successful student freelancers?
          </p>
          <button className="btn-primary">
            Create Your Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentProfiles;
