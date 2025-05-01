
interface TabButtonProps { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode;
}

export const TabButton = ({ active, onClick, children }: TabButtonProps) => (
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
