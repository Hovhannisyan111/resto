import React from 'react';
import TableItem from './TableItem';
import { Table, HourlyAvailability } from '../../types';

interface TableGridProps {
  tables: Table[];
  currentAvailability: HourlyAvailability;
}

const TableGrid: React.FC<TableGridProps> = ({ tables, currentAvailability }) => {
  return (
    <div className="bg-[#F8F5F0] p-6 rounded-xl shadow-md">
      <div className="flex flex-wrap justify-center">
        {tables.map(table => {
          const tableStatus = currentAvailability.tables.find(t => t.id === table.id);
          const isReserved = tableStatus?.isReserved || false;
          const reservationName = tableStatus?.reservationDetails?.name;
          
          return (
            <TableItem 
              key={table.id} 
              table={table} 
              isReserved={isReserved}
              reservationName={reservationName}
            />
          );
        })}
      </div>
      
      <div className="mt-6 flex justify-center space-x-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#81C784] rounded-full mr-2"></div>
          <span className="text-sm">Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-[#E57373] rounded-full mr-2"></div>
          <span className="text-sm">Reserved</span>
        </div>
      </div>
    </div>
  );
};

export default TableGrid;