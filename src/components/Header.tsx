import React, { useState, useEffect } from 'react';
import { Utensils } from 'lucide-react';

interface HeaderProps {
  activeTab: 'menu' | 'tables';
  setActiveTab: (tab: 'menu' | 'tables') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#7D2E46] text-white shadow-md py-3' 
          : 'bg-transparent text-[#7D2E46] py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Utensils className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-serif font-bold">La Tavola</h1>
        </div>
        
        <nav className="flex space-x-1">
          <button
            onClick={() => setActiveTab('menu')}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              activeTab === 'menu'
                ? 'bg-white text-[#7D2E46] shadow-sm'
                : isScrolled
                  ? 'text-white hover:bg-white/20'
                  : 'text-[#7D2E46] hover:bg-[#7D2E46]/10'
            }`}
          >
            Menu
          </button>
          <button
            onClick={() => setActiveTab('tables')}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              activeTab === 'tables'
                ? 'bg-white text-[#7D2E46] shadow-sm'
                : isScrolled
                  ? 'text-white hover:bg-white/20'
                  : 'text-[#7D2E46] hover:bg-[#7D2E46]/10'
            }`}
          >
            Tables
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;