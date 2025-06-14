import { useState } from 'react';
import { menuData } from '../data/menuData';
import { MenuCategory, MenuItem } from '../types';

export const useMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(menuData[0]?.id || '');
  
  const categories = menuData;
  
  const getMenuItemsByCategory = (categoryId: string): MenuItem[] => {
    const category = menuData.find(cat => cat.id === categoryId);
    return category?.items || [];
  };
  
  const activeCategory = menuData.find(cat => cat.id === selectedCategory);
  const activeItems = activeCategory?.items || [];
  
  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    activeItems,
    getMenuItemsByCategory,
  };
};