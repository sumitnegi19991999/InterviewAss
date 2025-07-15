import Layout from '@/components/Layout';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      info: 'Connaught Place, New Delhi, India - 110001',
      detail: 'Monday to Saturday: 9:00 AM - 6:00 PM'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 98765 43210',
      detail: 'Available for consultation calls'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@connectgermany.com',
      detail: 'We respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      info: 'Mon - Sat: 9:00 AM - 6:00 PM',
      detail: 'Sunday: Closed'
    }
  ];

  const services = [
    'University Selection',
    'Visa Assistance',
    'Scholarship Guidance',
    'Pre-departure Support',
    'Post-arrival Services',
    'Career Counseling'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Ready to start your German education journey? Get in touch with our expert counselors for 
            personalized guidance and support tailored to your academic goals.
          </p>
          <Button variant="accent" size="lg">
            <MessageCircle size={20} />
            Start Free Consultation
          </Button>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your educational goals and how we can help you"
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  <Send size={20} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're here to help you navigate your German education journey. Reach out to us through 
                  any of the following channels, and our expert counselors will get back to you promptly.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-card">
                      <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground mb-1">{info.info}</p>
                        <p className="text-sm text-muted-foreground">{info.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-primary rounded-2xl p-6 text-primary-foreground">
                <h3 className="text-lg font-heading font-semibold mb-4">
                  Need Immediate Assistance?
                </h3>
                <div className="space-y-3">
                  <Button variant="accent" className="w-full">
                    <Phone size={16} />
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                    <MessageCircle size={16} />
                    WhatsApp Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of New Delhi, our office is easily accessible by metro and other public transport.
            </p>
          </div>

          <div className="bg-background rounded-2xl overflow-hidden shadow-card">
            {/* Placeholder for Google Maps */}
            <div className="h-96 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin size={48} className="text-primary mx-auto" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">ConnectGermany Office</h3>
                  <p className="text-muted-foreground">Connaught Place, New Delhi, India - 110001</p>
                  <Button variant="outline" className="mt-4">
                    View on Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Office Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground mx-auto mb-3">
                <MapPin size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Central Location</h3>
              <p className="text-sm text-muted-foreground">Easy access from all parts of Delhi NCR</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground mx-auto mb-3">
                <Clock size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Flexible Hours</h3>
              <p className="text-sm text-muted-foreground">Extended hours for working professionals</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground mx-auto mb-3">
                <MessageCircle size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expert Consultation</h3>
              <p className="text-sm text-muted-foreground">One-on-one guidance from education experts</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;