
import { useState } from 'react';
import { TabButton } from './TabButton';
import { CaseCard } from './CaseCard';
import { caseData } from './caseData';

const CasesSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredCases = activeTab === 'all' ? 
    caseData : 
    caseData.filter(c => c.category === activeTab);
  
  return (
    <section id="cases" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-purple-900/10 pointer-events-none"></div>
      
      {/* Dot texture background */}
      <div className="absolute inset-0 dot-texture"></div>
      
      {/* Decorative shapes */}
      <div className="decorative-shape shape-circle bg-onesec-primary/8 w-80 h-80 -top-20 -right-20 animate-float"
        style={{ animationDelay: '1.5s' }}></div>
      <div className="decorative-shape shape-blob bg-onesec-secondary/5 w-96 h-96 -bottom-40 -left-20 animate-rotate-slow"></div>
      
      {/* Connecting line to next section */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <svg width="2" height="96" className="mx-auto">
          <line x1="1" y1="0" x2="1" y2="96" stroke="rgba(84,169,255,0.2)" strokeWidth="2" strokeDasharray="4,4" className="animate-draw" style={{ animationDelay: '0.8s' }} />
        </svg>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <p className="text-[#94a3b8] font-medium mb-3 uppercase tracking-wider text-sm opacity-0 animate-fade-in">CASE STUDIES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in delay-1">
            Results that speak for themselves
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in delay-2">
            Explore how we've helped companies across industries transform 
            their operations with customized AI and automation solutions.
          </p>
        </div>
        
        {/* Tabs with glassmorphism */}
        <div className="glassmorphism rounded-2xl p-2 flex flex-wrap justify-center gap-2 mb-10 backdrop-blur-md max-w-3xl mx-auto">
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
            <CaseCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
