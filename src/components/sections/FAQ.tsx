import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  BookOpen,
  Globe,
  Award,
  Clock,
  FileText,
  MessageSquare,
  TrendingUp,
  Home,
  Briefcase,
  Languages,
  Play,
} from "lucide-react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      icon: HelpCircle,
      question: "What services does Connect Germany offer?",
      answer:
        "Connect Germany provides comprehensive end-to-end services including university selection, application assistance, visa processing, language preparation, scholarship guidance, accommodation support, pre-departure preparation, and career counseling. We offer personalized support throughout your entire study abroad journey.",
    },
    {
      id: 2,
      icon: Globe,
      question: "Which countries do you support for study abroad?",
      answer:
        "We support study abroad programs in multiple countries including Germany, United Kingdom, United States, Canada, Australia, Netherlands, and other European countries. Our primary focus is on Germany with specialized programs for German universities and language preparation.",
    },
    {
      id: 3,
      icon: Award,
      question: "How do I know which university is right for me?",
      answer:
        "Our expert counselors conduct a comprehensive assessment of your academic background, career goals, interests, and financial situation. We then recommend universities that align with your profile, considering factors like program quality, location, cost, and career prospects.",
    },
    {
      id: 4,
      icon: BookOpen,
      question: "Do you help with scholarships and financial aid?",
      answer:
        "Yes, we provide extensive scholarship guidance including identifying suitable scholarships, application assistance, and documentation support. We help you explore merit-based scholarships, need-based aid, and country-specific funding opportunities to make your education more affordable.",
    },
    {
      id: 5,
      icon: Clock,
      question: "How long does the application process take?",
      answer:
        "The application process typically takes 3-6 months depending on the country and university. This includes document preparation, application submission, and processing time. We recommend starting the process at least 8-12 months before your intended start date to ensure adequate preparation time.",
    },
    {
      id: 6,
      icon: FileText,
      question: "What documents do I need to apply for a student visa?",
      answer:
        "Required documents typically include valid passport, admission letter, financial proof (blocked account for Germany), academic transcripts, language proficiency certificates, statement of purpose, recommendation letters, and medical insurance. Specific requirements vary by country and we provide a detailed checklist.",
    },
    {
      id: 7,
      icon: MessageSquare,
      question: "Can you help me prepare for the visa interview?",
      answer:
        "Absolutely! We provide comprehensive visa interview preparation including mock interviews, common questions practice, document organization, and confidence building techniques. Our experienced team helps you present your case effectively to visa officers.",
    },
    {
      id: 8,
      icon: TrendingUp,
      question:
        "What is the success rate of your students getting visas and admissions?",
      answer:
        "We maintain a high success rate of over 95% for university admissions and 90% for visa approvals. Our systematic approach, thorough preparation, and experienced guidance contribute to these excellent results. We provide transparent reporting on our success rates.",
    },
    {
      id: 9,
      icon: Home,
      question: "Do you assist with accommodation and travel arrangements?",
      answer:
        "Yes, we provide comprehensive support for accommodation including student dormitories, shared apartments, and private housing options. We also assist with travel arrangements, airport pickup, and initial settlement support to help you transition smoothly to your new environment.",
    },
    {
      id: 10,
      icon: Briefcase,
      question:
        "Do you provide career counseling and job placement assistance?",
      answer:
        "We offer extensive career counseling services including resume building, interview preparation, internship guidance, and job placement assistance. Our career-focused approach helps set you up for long-term success beyond graduation, including networking opportunities and industry connections.",
    },
    {
      id: 11,
      icon: Languages,
      question: "What language tests do I need to take?",
      answer:
        "Language requirements vary by country and program. For Germany, you may need TestDaF, DSH, or Goethe certificates for German programs, or IELTS/TOEFL for English programs. We provide comprehensive language preparation including German language courses from A1 to C2 levels and IELTS preparation.",
    },
    {
      id: 12,
      icon: Play,
      question: "How do I get started with Connect Germany?",
      answer:
        "Getting started is easy! Contact us for a free consultation where we'll assess your profile, discuss your goals, and create a personalized plan. You can reach us through our website, phone, or visit our office. We'll guide you through every step of the process from initial consultation to successful enrollment.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Learn More From
          </h4>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about studying abroad with Connect
            Germany
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqData.map((faq) => {
              const IconComponent = faq.icon;
              const isOpen = openFAQ === faq.id;

              return (
                <div
                  key={faq.id}
                  className="bg-card rounded-2xl shadow-card overflow-hidden card-hover"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-background/50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent size={18} className="text-primary" />
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {faq.id}
                        </span>
                        <h3 className="font-semibold text-foreground text-left">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {isOpen ? (
                        <ChevronUp size={20} className="text-primary" />
                      ) : (
                        <ChevronDown
                          size={20}
                          className="text-muted-foreground"
                        />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="ml-14 pl-3 border-l-2 border-primary/20">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        {/* <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Our expert counselors are here to help you with personalized
              guidance for your study abroad journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-background text-primary px-6 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors inline-flex items-center space-x-2">
                <MessageSquare size={18} />
                <span>Ask a Question</span>
              </button>
              <button className="border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors inline-flex items-center space-x-2">
                <HelpCircle size={18} />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        </div> */}

        {/* Quick Stats */}
        {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-card rounded-xl">
            <div className="text-lg font-bold text-primary mb-1">24/7</div>
            <div className="text-xs text-muted-foreground">
              Support Available
            </div>
          </div>
          <div className="text-center p-4 bg-card rounded-xl">
            <div className="text-lg font-bold text-primary mb-1">95%</div>
            <div className="text-xs text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center p-4 bg-card rounded-xl">
            <div className="text-lg font-bold text-primary mb-1">5000+</div>
            <div className="text-xs text-muted-foreground">Students Helped</div>
          </div>
          <div className="text-center p-4 bg-card rounded-xl">
            <div className="text-lg font-bold text-primary mb-1">50+</div>
            <div className="text-xs text-muted-foreground">Universities</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FAQ;
