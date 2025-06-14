import React from 'react';

interface TimeSelectorProps {
  businessHours: number[];
  selectedHour: number;
  setSelectedHour: (hour: number) => void;
  formatHour: (hour: number) => string;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({
  businessHours,
  selectedHour,
  setSelectedHour,
  formatHour,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3 text-[#7D2E46]">Select Time</h3>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {businessHours.map((hour) => (
          <button
            key={hour}
            onClick={() => setSelectedHour(hour)}
            className={`px-4 py-2 rounded-md whitespace-nowrap transition-all duration-200 ${
              selectedHour === hour
                ? 'bg-[#7D2E46] text-white'
                : 'bg-[#F2E8DC] text-[#7D2E46] hover:bg-[#F2E8DC]/80'
            }`}
          >
            {formatHour(hour)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSelector;