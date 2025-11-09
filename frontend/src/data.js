// src/data.js
export const vehicles = [
  { id: 1, name: 'Tesla Model 3', type: 'Sedan', color: 'Black', pricePerHour: 42, rating: 4.9 },
  { id: 2, name: 'Ford Mustang', type: 'Sport', color: 'Red', pricePerHour: 65, rating: 4.8 },
  { id: 3, name: 'Toyota Corolla', type: 'Sedan', color: 'Blue', pricePerHour: 30, rating: 4.7 },
  { id: 4, name: 'Mahindra Thar', type: 'SUV', color: 'Green', pricePerHour: 50, rating: 4.6 }
];

export const inquiries = [
  { id: 1, name: 'Darrell Steward', car: 'Toyota Corolla', color: '#fb923c' },
  { id: 2, name: 'Floyd Miles', car: 'Toyota Corolla', color: '#60a5fa' },
  { id: 3, name: 'Jenny Wilson', car: 'Toyota Corolla', color: '#a78bfa' },
  { id: 4, name: 'Kathryn Murphy', car: 'Toyota Corolla', color: '#f472b6' }
];

export const stats = [
  { label: 'Active Rentals', value: '28', change: '+25%', emoji: '🚗', bg: '#ffffff', borderColor: '#8b5cf6' },
  { label: 'Available Vehicles', value: '252', change: '+12%', emoji: '🚙', bg: '#f3e8ff', borderColor: '#a78bfa' },
  { label: 'Pending Returns', value: '13', change: '+21%', emoji: '⏰', bg: '#cffafe', borderColor: '#06b6d4' }
];
