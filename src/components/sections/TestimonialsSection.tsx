import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      program: 'Computer Science, TU Munich',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'ConnectGermany made my dream of studying in Germany a reality. Their guidance throughout the application process was exceptional, and I secured admission to my dream university.',
      location: 'Delhi, India'
    },
    {
      name: 'Priya Patel',
      program: 'Mechanical Engineering, RWTH Aachen',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The visa process seemed daunting, but the team at ConnectGermany guided me step by step. Their expertise and support made everything smooth and stress-free.',
      location: 'Mumbai, India'
    },
    {
      name: 'Arjun Reddy',
      program: 'Business Administration, University of Mannheim',
      image: '/api/placeholder/80/80', 
      rating: 5,
      text: 'From university selection to settling in Germany, ConnectGermany provided comprehensive support. I couldn\'t have done it without their expert guidance.',
      location: 'Bangalore, India'
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear directly from students who have successfully started their academic journey in Germany with our guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background rounded-2xl p-8 shadow-card card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-accent/20">
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium">{testimonial.program}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-primary-foreground">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-sm opacity-90">Success Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;