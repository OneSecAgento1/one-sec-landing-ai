
interface TabButtonProps { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode;
}

export const TabButton = ({ active, onClick, children }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
      active 
        ? 'bg-gradient-to-r from-onesec-primary to-onesec-secondary text-white shadow-md' 
        : 'neumorphic-light dark:neumorphic-dark neumorphic-btn text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
    }`}
  >
    {children}
  </button>
);
