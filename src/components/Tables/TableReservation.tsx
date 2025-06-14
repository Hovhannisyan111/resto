import React from 'react';
import TimeSelector from './TimeSelector';
import TableGrid from './TableGrid';
import { useTables } from '../../hooks/useTables';

const TableReservation: React.FC = () => {
  const { 
    selectedHour,
    setSelectedHour,
    currentAvailability,
    businessHours,
    formatHour,
    allTables
  } = useTables();

  return (
    <div className="pt-24 pb-12 min-h-screen bg-[#F8F5F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-6 text-[#7D2E46]">
          Table Availability
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center mb-6 text-gray-600">
            Check table availability in real-time.
            Hover over reserved tables to see reservation details.
          </p>
          
          <TimeSelector 
            businessHours={businessHours}
            selectedHour={selectedHour}
            setSelectedHour={setSelectedHour}
            formatHour={formatHour}
          />
          
          <div className="mb-4 text-center">
            <h3 className="font-semibold text-lg text-[#7D2E46]">
              Table Status for {formatHour(selectedHour)}
            </h3>
          </div>
          
          <TableGrid 
            tables={allTables}
            currentAvailability={currentAvailability}
          />
        </div>
      </div>
    </div>
  );
};

export default TableReservation;