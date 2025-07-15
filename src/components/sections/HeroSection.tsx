import { ArrowRight, Play, MapPin, Users, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-primary-foreground">
                <MapPin size={16} />
                <span>Trusted by 5000+ Students</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
                Your Gateway to{' '}
                <span className="relative">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded-lg">Germany</span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
                Expert guidance for Indian students to study in Germany. Discover top universities, 
                career opportunities, and comprehensive support for your German education journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="text-base font-semibold">
                Explore Programs
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                <Play size={20} />
                Watch Success Stories
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/80">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-primary-foreground/80">Visa Success</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5000+</div>
                <div className="text-sm text-primary-foreground/80">Happy Students</div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Card */}
          <div className="relative animate-scale-in">
            <div className="bg-background/95 backdrop-blur-sm rounded-3xl p-8 shadow-card border border-border/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-xl text-primary-foreground">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">Start Your Journey</h3>
                    <p className="text-muted-foreground">Free consultation available</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input 
                    type="email" 
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone number"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full" size="lg">
                    Get Free Consultation
                    <ArrowRight size={20} />
                  </Button>
                </div>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>Trusted by thousands</span>
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

export default HeroSection;