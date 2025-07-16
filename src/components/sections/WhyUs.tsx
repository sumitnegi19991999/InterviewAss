import {
  Phone,
  CheckCircle,
  GraduationCap,
  Globe,
  Users,
  Award,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

const WhyUs = () => {
  const benefits = [
    "You will get the most out of your degree at an affordable cost.",
    "You will join over 400k international students, make lifelong friendships, and become the best version of yourself possible!",
    "You will get to travel Europe, build a career, learn German — and every day will feel like a dream come true.",
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Our team of experienced counselors provides tailored advice to match your academic and career goals.",
    },
    {
      icon: Globe,
      title: "Global University Network",
      description:
        "We partner with top universities in Germany, the UK, the US, and more, giving you access to the best education options worldwide.",
    },
    {
      icon: Award,
      title: "Complete Support System",
      description:
        "From university selection, application assistance, and visa processing to scholarships and pre-departure preparation — we cover it all.",
    },
    {
      icon: TrendingUp,
      title: "Proven Success Rate",
      description:
        "With thousands of successful students placed globally, we have a track record you can trust.",
    },
    {
      icon: CheckCircle,
      title: "Transparent & Reliable Process",
      description:
        "We prioritize clear communication, ensuring you stay informed and confident at every step of your journey.",
    },
    {
      icon: GraduationCap,
      title: "Career-Focused Approach",
      description:
        "Beyond admissions, we help set you up for internships, job placements, and long-term career success.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Study in Germany */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                Study In Germany
              </h4>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Thinking About Studying in Germany?
              </h2>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center space-x-2">
                <MessageCircle size={18} />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column - Why Choose Us */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Why Choose Connect Germany?
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                At <strong>Connect Germany</strong>, we stand out by offering{" "}
                <strong>personalized, end-to-end support</strong> to help you
                achieve your dream of studying abroad. Here's what makes us the
                right choice:
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-background/50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <IconComponent size={16} className="text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground text-sm">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-border/50">
                <button className="w-full bg-gradient-primary text-primary-foreground py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center space-x-2">
                  <Phone size={18} />
                  <span>GET IN TOUCH</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-xl shadow-card">
            <div className="text-2xl font-bold text-primary mb-2">400k+</div>
            <div className="text-sm text-muted-foreground">
              International Students
            </div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-card">
            <div className="text-2xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">
              Partner Universities
            </div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-card">
            <div className="text-2xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-card">
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">
              Support Available
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyUs;
