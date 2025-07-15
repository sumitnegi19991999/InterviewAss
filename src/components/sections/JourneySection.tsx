import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const JourneySection = () => {
  const steps = [
    {
      number: '01',
      title: 'Dream & Discover',
      description: 'Free consultation to understand your goals and explore suitable programs',
      features: ['Career assessment', 'University matching', 'Program selection']
    },
    {
      number: '02', 
      title: 'Apply & Prepare',
      description: 'Complete application support and preparation for your journey',
      features: ['Application assistance', 'Document preparation', 'Language support']
    },
    {
      number: '03',
      title: 'Visa & Arrival',
      description: 'Visa guidance and support for smooth transition to Germany',
      features: ['Visa application', 'Interview preparation', 'Pre-departure briefing']
    },
    {
      number: '04',
      title: 'Study & Succeed',
      description: 'Ongoing support throughout your academic journey in Germany',
      features: ['Academic support', 'Career guidance', 'Alumni network']
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Your Journey to Germany
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From your initial dream to successful graduation, we guide you through every step of your German education journey.
          </p>
        </div>

        <div className="relative">
          {/* Journey Steps */}
          <div className="grid gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-24 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-primary to-accent"></div>
                )}
                
                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="bg-card rounded-2xl p-8 shadow-card card-hover">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-4xl font-bold text-gradient">{step.number}</div>
                        <div>
                          <h3 className="text-xl font-heading font-semibold text-foreground">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-success" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-glow">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Start Your Journey Today
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;