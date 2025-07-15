import { Shield, Award, Users, MapPin } from 'lucide-react';

const TrustSection = () => {
  const stats = [
    { icon: Users, label: 'Students Guided', value: '5000+', color: 'text-primary' },
    { icon: Award, label: 'Visa Success Rate', value: '95%', color: 'text-success' },
    { icon: MapPin, label: 'Partner Universities', value: '500+', color: 'text-accent' },
    { icon: Shield, label: 'Years of Experience', value: '10+', color: 'text-primary' }
  ];

  const universities = [
    'Technical University of Munich',
    'RWTH Aachen University', 
    'University of Stuttgart',
    'Karlsruhe Institute of Technology',
    'TU Dresden',
    'University of Mannheim'
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        {/* Trust Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Trusted by Thousands of Students
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven track record speaks for itself. Join the community of successful students who achieved their German education dreams with us.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-card rounded-xl shadow-card card-hover">
                <div className={`inline-flex p-3 rounded-lg bg-secondary mb-4`}>
                  <Icon size={24} className={stat.color} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* University Logos Section */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-xl font-heading font-semibold text-center text-foreground mb-8">
            Our Partner Universities in Germany
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {universities.map((university, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-secondary rounded-lg hover:bg-accent/10 transition-colors duration-200"
              >
                <span className="text-sm font-medium text-center text-muted-foreground">
                  {university}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;