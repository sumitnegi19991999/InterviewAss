import Layout from "@/components/Layout";
import {
  CheckCircle,
  ArrowRight,
  GraduationCap,
  FileText,
  Plane,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "University Selection & Application",
      description:
        "Complete guidance for choosing the right university and program",
      features: [
        "Personalized university matching",
        "Application document preparation",
        "Statement of Purpose writing",
        "Profile evaluation and enhancement",
        "Deadline management",
      ],
      price: "",
    },
    {
      icon: FileText,
      title: "Visa & Documentation",
      description:
        "Expert assistance with visa applications and required documents",
      features: [
        "Student visa application support",
        "Financial documentation guidance",
        "Interview preparation",
        "Document verification",
        "Embassy appointment booking",
      ],
      price: "",
    },
    {
      icon: Plane,
      title: "Pre-Departure Support",
      description: "Comprehensive preparation for your journey to Germany",
      features: [
        "Accommodation assistance",
        "Travel arrangements",
        "Cultural orientation",
        "Banking and insurance setup",
        "Airport pickup coordination",
      ],
      price: "",
    },
    {
      icon: Heart,
      title: "Post-Arrival Services",
      description: "Ongoing support to help you settle in Germany",
      features: [
        "University enrollment assistance",
        "Residence permit application",
        "Job search guidance",
        "24/7 emergency support",
        "Alumni network access",
      ],
      price: "",
    },
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "₹35,000",
      description: "Perfect for students just beginning their journey",
      features: [
        "University selection guidance",
        "Application support (2 universities)",
        "Basic document preparation",
        "Initial consultation",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Complete Package",
      price: "₹65,000",
      description: "Comprehensive support from application to departure",
      features: [
        "All Starter Package features",
        "Visa application support",
        "Interview preparation",
        "Scholarship guidance",
        "Pre-departure orientation",
        "Phone support",
      ],
      popular: true,
    },
    {
      name: "Premium Package",
      price: "₹95,000",
      description: "End-to-end support including post-arrival services",
      features: [
        "All Complete Package features",
        "Post-arrival support (6 months)",
        "Accommodation assistance",
        "Priority support",
        "Career guidance",
        "Alumni network access",
      ],
      popular: false,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Comprehensive support services designed to make your German
            education journey smooth, successful, and stress-free from
            application to graduation.
          </p>
          <Button variant="accent" size="lg">
            Get Free Consultation
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Complete End-to-End Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From your first consultation to successful settlement in Germany,
              we provide comprehensive services at every step of your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-card card-hover"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-primary rounded-xl text-primary-foreground">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle size={16} className="text-success" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      {service.price}
                    </span>
                    <Button variant="outline" size="sm">
                      Learn More
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      {/* <section className="py-16 bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Choose Your Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the package that best fits your needs and budget. All
              packages include our commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-background rounded-2xl p-8 shadow-card relative ${
                  pkg.popular ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle size={16} className="text-success" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={pkg.popular ? "hero" : "default"}
                  size="lg"
                >
                  Choose Package
                  <ArrowRight size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Why Choose ConnectGermany?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-sm opacity-90">Students Guided</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
            </div>
            <Button variant="accent" size="lg" className="mt-8">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
