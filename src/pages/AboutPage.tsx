
import React, { useState } from 'react';
import { CheckCircle, Award, Target, Heart, ArrowLeft, ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const teamMembers = [
  {
    name: "Anthony Rivers",
    role: "Founder & CEO",
    bio: "With over 8 years of experience in web development and digital strategy, Anthony founded Lucent Rivers to create transformative digital experiences.",
    avatar: "AR"
  },
  {
    name: "Samantha Chen",
    role: "Creative Director",
    bio: "Sam leads our design team with her innovative approach to UX/UI design and her passion for creating intuitive, beautiful interfaces.",
    avatar: "SC"
  },
  {
    name: "Marcus Williams",
    role: "Lead Developer",
    bio: "Marcus specializes in frontend frameworks and has a talent for turning complex requirements into elegant, efficient code.",
    avatar: "MW"
  },
  {
    name: "Emma Rodriguez",
    role: "Project Manager",
    bio: "Emma ensures our projects are delivered on time and on budget while maintaining constant communication with our clients.",
    avatar: "ER"
  },
  {
    name: "David Kumar",
    role: "Backend Specialist",
    bio: "David architects robust, scalable backend systems that power our most demanding web applications.",
    avatar: "DK"
  },
  {
    name: "Olivia Wilson",
    role: "UX Researcher",
    bio: "Olivia's research-driven approach helps us understand user needs and create products that truly resonate with audiences.",
    avatar: "OW"
  }
];

const AboutPage = () => {
  const [currentTeamMember, setCurrentTeamMember] = useState(0);
  
  const nextTeamMember = () => {
    setCurrentTeamMember((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };
  
  const prevTeamMember = () => {
    setCurrentTeamMember((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-lucent-50 text-lucent-600">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">We craft digital experiences that transform brands</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2015, Lucent Rivers has grown from a small team of passionate developers to a full-service web development agency serving clients worldwide.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-lucent-500 mr-2" />
                  <span>100+ Projects Completed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-lucent-500 mr-2" />
                  <span>40+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-lucent-500 mr-2" />
                  <span>15+ Team Members</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-lucent-400/30 to-lucent-600/30 rounded-3xl blur-xl"></div>
              <div className="relative glass rounded-3xl p-8 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Our team" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="relative py-16 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-lucent-50 text-lucent-600">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from how we work together to how we serve our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in everything we create, paying meticulous attention to every detail to deliver premium quality work."
              },
              {
                icon: Target,
                title: "Innovation",
                description: "We embrace new technologies and approaches, constantly pushing boundaries to create cutting-edge digital solutions."
              },
              {
                icon: Heart,
                title: "Client Partnership",
                description: "We build lasting relationships with our clients, working collaboratively to achieve shared success and growth."
              }
            ].map((value, index) => (
              <div key={index} className="glass p-8 rounded-xl text-center hover-lift">
                <div className="mx-auto w-16 h-16 rounded-full bg-lucent-50 flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-lucent-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section with Carousel */}
      <section className="relative py-16">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-lucent-50 text-lucent-600">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Experts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our talented team brings diverse skills and experiences to every project.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto relative">
            {/* Carousel Navigation */}
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
              <button 
                onClick={prevTeamMember}
                className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-lucent-50 transition-colors"
                aria-label="Previous team member"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <button 
                onClick={nextTeamMember}
                className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-lucent-50 transition-colors"
                aria-label="Next team member"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Team Member Card */}
            <div className="glass p-6 rounded-xl hover-lift min-h-[220px]">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-lucent-400 to-lucent-600 flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white text-xl font-bold">{teamMembers[currentTeamMember].avatar}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{teamMembers[currentTeamMember].name}</h3>
                  <p className="text-sm text-lucent-500">{teamMembers[currentTeamMember].role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{teamMembers[currentTeamMember].bio}</p>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamMember(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTeamMember ? 'w-6 bg-lucent-500' : 'bg-lucent-200'
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
