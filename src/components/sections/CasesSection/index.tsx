
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
    <section id="cases" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
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
            <CaseCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
