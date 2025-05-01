
import { CaseCard } from './CaseCard';
import { caseData } from './caseData';

const CasesSection = () => {
  return (
    <section id="cases" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements with increased opacity */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent dark:from-blue-900/15 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/30 via-transparent to-transparent dark:from-purple-900/15 pointer-events-none"></div>
      
      {/* Dot texture background with increased opacity */}
      <div className="absolute inset-0 dot-texture pointer-events-none" style={{ opacity: '0.1' }}></div>
      
      {/* Decorative shapes with increased opacity */}
      <div className="decorative-shape shape-circle bg-onesec-primary/20 w-80 h-80 -top-20 -right-20 animate-float pointer-events-none"
        style={{ animationDelay: '1.5s' }}></div>
      <div className="decorative-shape shape-blob bg-onesec-secondary/15 w-96 h-96 -bottom-40 -left-20 animate-rotate-slow pointer-events-none"></div>
      <div className="decorative-shape shape-triangle bg-onesec-accent/15 w-48 h-48 top-1/4 left-1/4 animate-float pointer-events-none"
        style={{ animationDelay: '2s' }}></div>
      
      {/* Background floating elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {[...Array(8)].map((_, i) => <div key={i} className="absolute w-24 h-24 lg:w-40 lg:h-40 rounded-full animate-pulse-light pointer-events-none" style={{
          background: 'radial-gradient(circle, rgba(126, 100, 224, 0.4) 0%, rgba(126, 100, 224, 0.1) 70%, transparent 100%)',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`
        }}></div>)}
      </div>
      
      {/* Connecting line to next section with increased opacity */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
        <svg width="2" height="96" className="mx-auto">
          <line x1="1" y1="0" x2="1" y2="96" stroke="rgba(84,169,255,0.3)" strokeWidth="2" strokeDasharray="4,4" className="animate-draw" style={{ animationDelay: '0.8s' }} />
        </svg>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 select-text">
          <p className="text-[#94a3b8] font-medium mb-3 uppercase tracking-wider text-sm opacity-0 animate-fade-in">CASE STUDIES</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in delay-1">
            Results that speak for themselves
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in delay-2">
            Explore how we've helped companies across industries transform 
            their operations with customized AI and automation solutions.
          </p>
        </div>
        
        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseData.map((caseStudy, index) => (
            <CaseCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
