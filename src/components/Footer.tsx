
import { Heart, Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background to-secondary/20 text-foreground py-16 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">Side Hustle Hub</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering students to turn their skills into income while building meaningful connections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center hover:bg-accent/80 transition-colors">
                <Twitter className="h-5 w-5 text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center hover:bg-accent/80 transition-colors">
                <Instagram className="h-5 w-5 text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center hover:bg-accent/80 transition-colors">
                <Github className="h-5 w-5 text-accent-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center hover:bg-accent/80 transition-colors">
                <Mail className="h-5 w-5 text-accent-foreground" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Browse Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Post a Gig</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Find Freelancers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Categories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Safety</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest tips and opportunities delivered to your inbox
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-accent border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-blue"
              />
              <button className="btn-primary px-6">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-muted-foreground text-sm">
              © 2024 Student Side Hustle Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for students everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
