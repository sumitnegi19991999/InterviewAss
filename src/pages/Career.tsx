import Layout from '@/components/Layout';
import { Briefcase, TrendingUp, DollarSign, Users, ArrowRight, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Career = () => {
  const careerPaths = [
    {
      title: 'Engineering & Technology',
      description: 'Germany leads in automotive, manufacturing, and renewable energy',
      salary: '€45,000 - €85,000',
      demand: 'Very High',
      companies: ['BMW', 'Siemens', 'SAP', 'Bosch'],
      icon: Building
    },
    {
      title: 'Business & Finance',
      description: 'Strong financial sector with opportunities in major European markets',
      salary: '€40,000 - €90,000',
      demand: 'High',
      companies: ['Deutsche Bank', 'Allianz', 'Commerzbank', 'KPMG'],
      icon: TrendingUp
    },
    {
      title: 'Information Technology',
      description: 'Growing tech scene with startups and multinational corporations',
      salary: '€50,000 - €95,000',
      demand: 'Very High',
      companies: ['SAP', 'Zalando', 'Delivery Hero', 'Rocket Internet'],
      icon: Briefcase
    },
    {
      title: 'Healthcare & Life Sciences',
      description: 'World-class healthcare system with research opportunities',
      salary: '€42,000 - €80,000',
      demand: 'High',
      companies: ['Bayer', 'Merck KGaA', 'Fresenius', 'B. Braun'],
      icon: Users
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Career Opportunities in Germany
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Discover the vast career landscape that awaits you in Germany. From engineering excellence 
            to cutting-edge technology, find your path to professional success.
          </p>
          <Button variant="accent" size="lg">
            Explore Career Paths
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Top Career Fields in Germany
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Germany offers exceptional career opportunities across various industries. Here are the most promising fields for international graduates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => {
              const Icon = career.icon;
              return (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-card card-hover">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-gradient-primary rounded-xl text-primary-foreground">
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                        {career.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{career.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Average Salary</div>
                          <div className="font-semibold text-success">{career.salary}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Job Demand</div>
                          <div className="font-semibold text-primary">{career.demand}</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">Top Companies</div>
                        <div className="flex flex-wrap gap-2">
                          {career.companies.map((company, companyIndex) => (
                            <span 
                              key={companyIndex}
                              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                            >
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Germany for Career */}
      <section className="py-16 bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Why Choose Germany for Your Career?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg text-primary-foreground mt-1">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Competitive Salaries</h3>
                    <p className="text-muted-foreground">Germany offers some of the highest salaries in Europe, with excellent work-life balance and comprehensive benefits.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg text-primary-foreground mt-1">
                    <Building size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Industrial Excellence</h3>
                    <p className="text-muted-foreground">Home to global leaders in automotive, engineering, and manufacturing industries with cutting-edge technology.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary rounded-lg text-primary-foreground mt-1">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Work-Life Balance</h3>
                    <p className="text-muted-foreground">German work culture emphasizes efficiency and balance, with generous vacation time and flexible working arrangements.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                Career Success Stats
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Employment Rate for Graduates</span>
                  <span className="font-bold text-success text-lg">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Average Starting Salary</span>
                  <span className="font-bold text-success text-lg">€45,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Job Satisfaction Rate</span>
                  <span className="font-bold text-success text-lg">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">International Companies</span>
                  <span className="font-bold text-success text-lg">30+ in DAX</span>
                </div>
              </div>
              
              <Button className="w-full mt-6" variant="hero">
                Schedule Career Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;