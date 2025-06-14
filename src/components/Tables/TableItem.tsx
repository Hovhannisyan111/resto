import React, { useState } from 'react';
import { Table } from '../../types';

interface TableItemProps {
  table: Table;
  isReserved: boolean;
  reservationName?: string;
}

const TableItem: React.FC<TableItemProps> = ({ table, isReserved, reservationName }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Dimensions based on table size and shape
  const getDimensions = () => {
    switch(table.shape) {
      case 'round':
        return {
          width: table.size === 'small' ? 'w-20 h-20' : 'w-24 h-24',
          shape: 'rounded-full',
        };
      case 'square':
        return {
          width: table.size === 'medium' ? 'w-24 h-24' : 'w-28 h-28',
          shape: 'rounded-lg',
        };
      case 'rectangle':
        return {
          width: table.size === 'large' ? 'w-36 h-24' : 'w-32 h-20',
          shape: 'rounded-lg',
        };
      default:
        return {
          width: 'w-24 h-24',
          shape: 'rounded-lg',
        };
    }
  };
  
  const { width, shape } = getDimensions();
  
  return (
    <div 
      className={`relative ${width} ${shape} flex items-center justify-center m-2 transition-all duration-300 cursor-default
        ${isReserved 
          ? 'bg-[#E57373] text-white' 
          : 'bg-[#81C784] text-[#1B5E20]'
        }
        ${isHovered ? 'shadow-lg scale-105' : 'shadow-md'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center">
        <div className="font-bold">{table.name}</div>
        <div className="text-xs">{table.seats} seats</div>
      </div>
      
      {isHovered && isReserved && reservationName && (
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 shadow-lg rounded-md p-2 text-xs w-max z-10">
          <p className="font-semibold">Reserved by: {reservationName}</p>
        </div>
      )}
    </div>
  );
};

export default TableItem;