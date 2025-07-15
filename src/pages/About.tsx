import Layout from '@/components/Layout';
import { Users, Target, Award, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      experience: '15+ years in international education',
      education: 'PhD in Education, University of Munich',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Sarah Weber',
      role: 'German Education Specialist',
      experience: '12+ years in German university admissions',
      education: 'Masters in International Relations, Heidelberg University',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Priya Sharma',
      role: 'Student Success Manager',
      experience: '8+ years in student counseling',
      education: 'MBA from RWTH Aachen University',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Michael Schmidt',
      role: 'Visa & Immigration Expert',
      experience: '10+ years in visa consulting',
      education: 'Law Degree, University of Frankfurt',
      image: '/api/placeholder/150/150'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the highest standards of guidance and support.'
    },
    {
      icon: Users,
      title: 'Student-Centric',
      description: 'Every decision we make is centered around what\'s best for our students and their academic success.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and transparency in all our interactions and services.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We bring international expertise and cultural understanding to bridge Indian and German education systems.'
    }
  ];

  const milestones = [
    { year: '2014', event: 'ConnectGermany founded with a vision to democratize German education' },
    { year: '2016', event: 'Established partnerships with 50+ German universities' },
    { year: '2018', event: 'Opened second office in Munich, Germany' },
    { year: '2020', event: 'Launched digital platform for remote consultations' },
    { year: '2022', event: 'Achieved 95% visa success rate milestone' },
    { year: '2024', event: 'Celebrating 10 years with 5000+ successful students' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            About ConnectGermany
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            For over a decade, we've been the bridge between Indian students' dreams and German education excellence. 
            Our mission is to make studying in Germany accessible, affordable, and achievable for every deserving student.
          </p>
          <Button variant="accent" size="lg">
            Our Story
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To empower Indian students with world-class German education opportunities by providing comprehensive, 
                personalized guidance and support throughout their academic journey. We believe that quality education 
                should be accessible to all deserving students, regardless of their background.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-success" />
                  <span className="text-muted-foreground">Personalized guidance for every student</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-success" />
                  <span className="text-muted-foreground">Transparent and ethical practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-success" />
                  <span className="text-muted-foreground">Continuous support from application to graduation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To be the most trusted and preferred partner for Indian students seeking German education, 
                creating a global community of successful professionals who contribute to both Indian and German societies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Students Guided</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to student success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center bg-background rounded-2xl p-6 shadow-card card-hover">
                  <div className="inline-flex p-4 bg-gradient-primary rounded-xl text-primary-foreground mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team combines decades of international education experience with deep knowledge 
              of both Indian and German academic systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card card-hover text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                <p className="text-xs text-muted-foreground">{member.education}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A decade of growth, learning, and helping students achieve their German education dreams.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-background rounded-lg p-4 shadow-card">
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your German Education Journey?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of successful students who have achieved their dreams with our expert guidance and support.
          </p>
          <Button variant="accent" size="lg">
            Get Free Consultation
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;