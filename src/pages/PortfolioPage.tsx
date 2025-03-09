
import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "A full-scale e-commerce platform with advanced filtering, user accounts, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "Healthcare Dashboard",
    category: "Data Visualization",
    description: "Interactive dashboard for healthcare providers to monitor patient data and treatment outcomes.",
    technologies: ["React", "D3.js", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Real Estate Platform",
    category: "Web Application",
    description: "Property listing and management platform with virtual tours and integration with MLS databases.",
    technologies: ["Next.js", "PostgreSQL", "Google Maps API", "AWS"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "Educational Learning System",
    category: "EdTech Platform",
    description: "Interactive learning management system with course creation, student progress tracking, and certification.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.IO"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    category: "Mobile Application",
    description: "Cross-platform fitness application with workout tracking, nutrition planning, and social features.",
    technologies: ["React Native", "Firebase", "Redux", "Health API"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 6,
    title: "Financial Analytics Dashboard",
    category: "Data Visualization",
    description: "Real-time financial data visualization and analysis tool for investment professionals.",
    technologies: ["React", "D3.js", "Node.js", "WebSockets"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  }
];

const PortfolioPage = () => {
  return (
    <PageLayout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-lucent-50 text-lucent-600">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our portfolio of successful digital solutions that have helped businesses transform and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-lucent-400/40 to-lucent-600/40 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative glass rounded-xl overflow-hidden hover-lift">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-xs font-medium text-lucent-500 mb-1 block">{project.category}</span>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-lucent-50 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-lucent-600" />
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2.5 py-0.5 text-xs rounded-full bg-lucent-50 text-lucent-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-lucent-500 hover:text-lucent-600 transition-colors group/link"
                    >
                      View Project 
                      <ExternalLink className="h-4 w-4 ml-2 transform transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="#" 
              className="px-6 py-3 rounded-md bg-lucent-500 text-white font-medium hover:bg-lucent-600 transition-colors inline-flex items-center"
            >
              View All Projects
              <svg 
                className="ml-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PortfolioPage;
