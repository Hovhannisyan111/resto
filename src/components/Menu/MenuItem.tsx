import React from 'react';
import { MenuItem as MenuItemType } from '../../types';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {item.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      )}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-[#7D2E46]">{item.name}</h3>
          <span className="text-[#D4AF37] font-bold">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm flex-grow">{item.description}</p>
        <button className="mt-4 py-2 px-4 bg-[#F2E8DC] text-[#7D2E46] rounded hover:bg-[#7D2E46] hover:text-white transition-colors duration-300 text-sm font-medium">
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default MenuItem;