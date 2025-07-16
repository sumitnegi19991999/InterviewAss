import { ArrowRight, Play, MapPin, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/da9bb778-f0ab-4381-9b19-31b71c4265b3.png"
          alt="Germany Illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white animate-scale-in">
                <MapPin size={16} />
                <span>Trusted by 5000+ Students</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Career in{" "}
                <span className="relative inline-block">
                  <span className="bg-accent text-accent-foreground px-3 py-2 rounded-lg inline-block animate-pulse">
                    Germany
                  </span>
                </span>
              </h1>

              <p
                className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                Expert guidance for Indian students to study in Germany.
                Discover top universities, career opportunities, and
                comprehensive support for your German education journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                variant="accent"
                size="lg"
                className="text-base font-semibold hover-scale"
              >
                Our Services
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover-scale"
              >
                <Play size={20} />
                Contact Us
              </Button>
            </div>

            {/* Quick Stats */}
            <div
              className="grid grid-cols-3 gap-6 pt-8 animate-fade-in"
              style={{ animationDelay: "0.9s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/80">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-white/80">Visa Success</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5000+</div>
                <div className="text-sm text-white/80">Happy Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
