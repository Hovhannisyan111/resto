import { Table, Reservation, HourlyAvailability } from '../types';

export const tables: Table[] = [
  { id: 1, name: 'Table 1', seats: 2, shape: 'round', size: 'small', position: { x: 10, y: 20 } },
  { id: 2, name: 'Table 2', seats: 2, shape: 'round', size: 'small', position: { x: 70, y: 20 } },
  { id: 3, name: 'Table 3', seats: 4, shape: 'square', size: 'medium', position: { x: 10, y: 80 } },
  { id: 4, name: 'Table 4', seats: 4, shape: 'square', size: 'medium', position: { x: 70, y: 80 } },
  { id: 5, name: 'Table 5', seats: 6, shape: 'rectangle', size: 'large', position: { x: 10, y: 150 } },
  { id: 6, name: 'Table 6', seats: 8, shape: 'rectangle', size: 'large', position: { x: 70, y: 150 } },
];

// Sample reservations for today
const today = new Date().toISOString().split('T')[0];

export const reservations: Reservation[] = [
  { id: 1, tableId: 1, date: today, hour: 18, name: 'John Smith', phone: '555-1234' },
  { id: 2, tableId: 3, date: today, hour: 19, name: 'Emma Johnson', phone: '555-5678' },
  { id: 3, tableId: 5, date: today, hour: 20, name: 'Michael Brown', phone: '555-9012' },
  { id: 4, tableId: 2, date: today, hour: 20, name: 'Sarah Davis', phone: '555-3456' },
  { id: 5, tableId: 4, date: today, hour: 21, name: 'David Wilson', phone: '555-7890' },
  { id: 6, tableId: 6, date: today, hour: 21, name: 'Jennifer Taylor', phone: '555-2345' },
  { id: 7, tableId: 1, date: today, hour: 20, name: 'Robert Miller', phone: '555-6789' },
  { id: 8, tableId: 3, date: today, hour: 21, name: 'Lisa Anderson', phone: '555-0123' },
];

// Generate hourly availability data for the current date
export const generateHourlyAvailability = (): HourlyAvailability[] => {
  const hours = Array.from({ length: 8 }, (_, i) => i + 16); // 4 PM to 11 PM
  
  return hours.map(hour => {
    const hourReservations = reservations.filter(r => r.hour === hour);
    
    return {
      hour,
      tables: tables.map(table => {
        const reservation = hourReservations.find(r => r.tableId === table.id);
        return {
          id: table.id,
          isReserved: !!reservation,
          reservationDetails: reservation 
            ? { 
                id: reservation.id, 
                date: reservation.date, 
                name: reservation.name, 
                phone: reservation.phone 
              } 
            : undefined
        };
      })
    };
  });
};