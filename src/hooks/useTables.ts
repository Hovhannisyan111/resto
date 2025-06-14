import { useState, useMemo } from 'react';
import { tables, reservations, generateHourlyAvailability } from '../data/tableData';
import { HourlyAvailability, Table } from '../types';

export const useTables = () => {
  const [selectedHour, setSelectedHour] = useState<number>(new Date().getHours());
  
  // Ensure the selected hour is within business hours (4 PM - 11 PM)
  const normalizedHour = useMemo(() => {
    if (selectedHour < 16) return 16; // Before opening
    if (selectedHour > 23) return 23; // After closing
    return selectedHour;
  }, [selectedHour]);
  
  // Generate hourly availability data
  const hourlyAvailability: HourlyAvailability[] = useMemo(() => {
    return generateHourlyAvailability();
  }, []);
  
  // Get current table availability
  const currentAvailability = useMemo(() => {
    return hourlyAvailability.find(h => h.hour === normalizedHour) || hourlyAvailability[0];
  }, [hourlyAvailability, normalizedHour]);
  
  // Business hours for display
  const businessHours = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => i + 16); // 4 PM to 11 PM
  }, []);
  
  // Format hour for display (e.g., "7:00 PM")
  const formatHour = (hour: number): string => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:00 ${period}`;
  };
  
  // Get all table data
  const allTables: Table[] = tables;
  
  return {
    selectedHour: normalizedHour,
    setSelectedHour,
    hourlyAvailability,
    currentAvailability,
    businessHours,
    formatHour,
    allTables,
  };
};