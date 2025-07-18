import {
  BookOpen,
  MessageCircle,
  GraduationCap,
  Plane,
  Users,
  FileText,
  Globe,
  Target,
  Award,
  MapPin,
  Heart,
  PenTool,
} from "lucide-react";

const CareerServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: "German Language",
      description:
        "When learning German, it's essential to understand the different proficiency levels, which are based on the Common European Framework of Reference for Languages (CEFR). The CEFR standardizes language skills across Europe and categorizes them into six levels, ranging from A1 (beginner) to C2 (proficient). Knowing your level helps you set clear goals and track your progress.",
      image: "/images/german-language.jpg",
      features: [
        "A1 to C2 Level Courses",
        "CEFR Certified",
        "Interactive Learning",
        "Progress Tracking",
      ],
    },
    {
      icon: MessageCircle,
      title: "Counselling",
      description:
        "We understand that every learner has unique needs. Our expert counselors will assess your current level and create a customized learning plan based on your goals, interests, and time availability. Whether you're focusing on conversational skills, academic language, or business German, we ensure your lessons are tailored to your objectives.",
      image: "/images/counselling.jpg",
      features: [
        "Personalized Assessment",
        "Custom Learning Plans",
        "Expert Guidance",
        "Goal-Oriented Approach",
      ],
    },
    {
      icon: GraduationCap,
      title: "Confirmed Admission",
      description:
        "We apply to the best of the German Universities and help you to get admitted to the best of the specialized universities.",
      image: "/images/confirmed-admission.jpg",
      features: [
        "Top University Applications",
        "Specialized Programs",
        "Application Support",
        "Admission Guarantee",
      ],
    },
    {
      icon: Plane,
      title: "Visa & Living",
      description:
        "We make your German Visa process easier & efficient also act as a local guardian for accommodation & other support.",
      image: "/images/visa-living.jpg",
      features: [
        "Visa Process Support",
        "Accommodation Assistance",
        "Local Guardian Services",
        "Living Support",
      ],
    },
    {
      icon: Users,
      title: "Buddy Services",
      description:
        'Moving to a new country for study, work, or travel can be an exciting yet overwhelming experience. Our Buddy Service is designed to make your transition smoother and more enjoyable by pairing you with a local "buddy" who will support you throughout your stay.',
      image: "/images/buddy-services.jpg",
      features: [
        "Local Buddy Pairing",
        "Transition Support",
        "Cultural Integration",
        "Ongoing Assistance",
      ],
    },
    {
      icon: FileText,
      title: "IELTS Preparation",
      description:
        "We start by assessing your current English proficiency and then create a customized study plan based on your target score, strengths, and areas for improvement. Whether you're aiming for an overall band score or need to focus on specific sections, we'll ensure your study plan is tailored to your needs.",
      image: "/images/ielts-preparation.jpg",
      features: [
        "Proficiency Assessment",
        "Target Score Planning",
        "Section-wise Focus",
        "Customized Study Plan",
      ],
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Build Your Career with Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive services to help you achieve your dreams of studying
            and building a career in Germany.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-card card-hover overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-primary overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Call to Action */}
                  {/* <div className="mt-6 pt-4 border-t border-border/50">
                    <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                      Learn More
                    </button>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        {/* <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Take the first step towards your German dream. Our comprehensive
              services are designed to support you at every stage of your
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-background text-primary px-6 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
                Get Started Today
              </button>
              <button className="border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CareerServicesSection;
