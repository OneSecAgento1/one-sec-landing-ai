
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const CasesSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const cases = [
    {
      id: 1,
      title: "Supply Chain Optimization",
      category: "ai",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
      client: "LogiTech Industries",
      description: "Implementation of a predictive system to optimize the supply chain, reducing operational costs by 30%."
    },
    {
      id: 2,
      title: "Customer Support Chatbot",
      category: "chatbot",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
      client: "TelCare Services",
      description: "Development of a virtual assistant capable of handling 70% of customer requests, improving satisfaction and reducing response times."
    },
    {
      id: 3,
      title: "Workflow Automation Platform",
      category: "automation",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
      client: "FinBiz Solutions",
      description: "Creation of a platform for automating business processes, with a 45% increase in productivity."
    },
    {
      id: 4,
      title: "Predictive Sales Analysis",
      category: "data",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
      client: "RetailPro Corp",
      description: "Implementation of predictive analytics models to optimize sales strategies, resulting in a 25% increase in revenue."
    }
  ];
  
  const filteredCases = activeTab === 'all' ? 
    cases : 
    cases.filter(c => c.category === activeTab);
  
  return (
    <section id="cases" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-onesec-accent font-medium mb-3 opacity-0 animate-fade-in">CASE STUDIES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in delay-1">
            Results that speak for themselves
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in delay-2">
            Explore how we've helped companies across industries transform 
            their operations with customized AI and automation solutions.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <TabButton 
            active={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
          >
            All
          </TabButton>
          <TabButton 
            active={activeTab === 'ai'} 
            onClick={() => setActiveTab('ai')}
          >
            AI Solutions
          </TabButton>
          <TabButton 
            active={activeTab === 'automation'} 
            onClick={() => setActiveTab('automation')}
          >
            Automation
          </TabButton>
          <TabButton 
            active={activeTab === 'chatbot'} 
            onClick={() => setActiveTab('chatbot')}
          >
            Chatbot
          </TabButton>
          <TabButton 
            active={activeTab === 'data'} 
            onClick={() => setActiveTab('data')}
          >
            Data Analysis
          </TabButton>
        </div>
        
        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCases.map((caseStudy, index) => (
            <div 
              key={caseStudy.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-onesec-primary uppercase tracking-wider">
                  {caseStudy.client}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{caseStudy.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {caseStudy.description}
                </p>
                <Button variant="link" className="px-0 text-onesec-primary hover:text-onesec-secondary">
                  Read more →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TabButton = ({ 
  active, 
  onClick, 
  children 
}: { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
      active 
        ? 'bg-gradient-to-r from-onesec-primary to-onesec-secondary text-white shadow-md' 
        : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
    }`}
  >
    {children}
  </button>
);

export default CasesSection;
