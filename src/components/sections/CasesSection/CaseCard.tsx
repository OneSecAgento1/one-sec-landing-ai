
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type CaseStudy = {
  id: number;
  title: string;
  category: string;
  image: string;
  client: string;
  description: string;
  result: string;
  challenge: string;
  cta: string;
};

interface CaseCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export const CaseCard = ({ caseStudy, index }: CaseCardProps) => {
  return (
    <div 
      key={caseStudy.id}
      className="case-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
        shadow-md transition-all duration-300 
        hover:shadow-[0_15px_30px_rgba(84,169,255,0.2)] 
        hover:scale-105
        hover:card-border-gradient opacity-0 animate-fade-in"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="h-48 overflow-hidden relative">
        {/* Decorative mask overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-onesec-primary/40 to-transparent 
          mask-pattern opacity-0 transition-opacity duration-300 z-10"></div>
        
        {/* Result badge */}
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-white/90 text-onesec-primary font-bold px-3 py-1.5 text-xs">
            {caseStudy.result}
          </Badge>
        </div>
        
        {/* Image with hexagon clip path */}
        <div className="case-image-container relative h-full w-full transition-transform duration-300">
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-onesec-primary uppercase tracking-wider">
          {caseStudy.client}
        </span>
        <h3 className="text-xl font-bold mt-2 mb-3">{caseStudy.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {caseStudy.description}
        </p>
        
        {/* Challenge and Result Summary */}
        <div className="mb-4 text-sm">
          <p className="mb-1">
            <span className="font-bold text-gray-800 dark:text-gray-200">Challenge: </span>
            <span className="text-gray-600 dark:text-gray-300">{caseStudy.challenge}</span>
          </p>
          <p>
            <span className="font-bold text-gray-800 dark:text-gray-200">Result: </span>
            <span className="text-gray-600 dark:text-gray-300">{caseStudy.result}</span>
          </p>
        </div>
        
        <Button variant="link" className="px-0 text-onesec-primary hover:text-onesec-secondary">
          {caseStudy.cta}
        </Button>
      </div>
    </div>
  );
};
