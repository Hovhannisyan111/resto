import React from 'react';
import { MenuCategory } from '../../types';

interface MenuCategoriesProps {
  categories: MenuCategory[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
}

const MenuCategories: React.FC<MenuCategoriesProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex space-x-2 px-1 md:justify-center min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-5 py-3 rounded-lg transition-all duration-200 whitespace-nowrap font-medium ${
              selectedCategory === category.id
                ? 'bg-[#7D2E46] text-white shadow-md'
                : 'bg-[#F2E8DC] text-[#7D2E46] hover:bg-[#F2E8DC]/80'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuCategories;