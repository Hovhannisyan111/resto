export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Table {
  id: number;
  name: string;
  seats: number;
  shape: 'round' | 'square' | 'rectangle';
  size: 'small' | 'medium' | 'large';
  position: {
    x: number;
    y: number;
  };
}

export interface Reservation {
  id: number;
  tableId: number;
  date: string;
  hour: number;
  name: string;
  phone: string;
}

export interface HourlyAvailability {
  hour: number;
  tables: {
    id: number;
    isReserved: boolean;
    reservationDetails?: Omit<Reservation, 'tableId' | 'hour'>;
  }[];
}