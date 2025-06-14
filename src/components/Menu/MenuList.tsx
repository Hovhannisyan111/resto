import React from 'react';
import { MenuCategory } from '../../types';
import MenuCategories from './MenuCategories';
import MenuItem from './MenuItem';
import { useMenu } from '../../hooks/useMenu';

const MenuList: React.FC = () => {
  const { categories, selectedCategory, setSelectedCategory, activeItems } = useMenu();

  return (
    <div className="pt-24 pb-12 min-h-screen bg-[#F8F5F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-6 text-[#7D2E46]">
          Our Menu
        </h2>
        
        <MenuCategories 
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList;