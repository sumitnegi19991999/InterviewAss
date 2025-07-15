import { ArrowRight, Play, MapPin, Users, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/0f717c62-c123-4e90-9af4-ffc97bcb13ad.png" 
          alt="Germany landscape with Brandenburg Gate and educational elements"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/80"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-primary-foreground animate-scale-in">
                <MapPin size={16} />
                <span>Trusted by 5000+ Students</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight animate-fade-in delay-300">
                Your Gateway to{' '}
                <span className="relative inline-flex items-center">
                  <span className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-4 py-2 rounded-xl transform hover:scale-105 transition-transform duration-300 shadow-glow">
                    Germany
                  </span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-500">
                Expert guidance for Indian students to study in Germany. Discover top universities, 
                career opportunities, and comprehensive support for your German education journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
              <Button variant="accent" size="lg" className="text-base font-semibold hover:scale-105 transition-all duration-200 shadow-glow">
                Explore Programs
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20 hover:scale-105 transition-all duration-200">
                <Play size={20} />
                Watch Success Stories
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto animate-fade-in delay-1000">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-accent group-hover:scale-110 transition-transform duration-200">500+</div>
                <div className="text-sm text-primary-foreground/80">Universities</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-accent group-hover:scale-110 transition-transform duration-200">95%</div>
                <div className="text-sm text-primary-foreground/80">Visa Success</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-accent group-hover:scale-110 transition-transform duration-200">5000+</div>
                <div className="text-sm text-primary-foreground/80">Happy Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;