import { Court } from '../types';

export const generateMockCourts = (): Court[] => {
  const names = [
    'Central Park Courts', 'Riverside Tennis Club', 'Mountain View Courts',
    'Sunset Tennis Center', 'Bay Area Courts', 'Grand Slam Arena',
    'Forest Hills Courts', 'Ocean View Tennis', 'Downtown Courts',
    'Elite Tennis Club', 'Championship Courts', 'Valley View Tennis',
    'Lakeside Courts', 'Highland Tennis Club', 'Coastal Courts',
    'Metro Tennis Center', 'Parkside Courts', 'Summit Tennis Club',
    'Meadow Courts', 'Canyon View Tennis', 'Hillside Courts',
    'Waterfront Tennis', 'City Center Courts', 'Greenway Tennis',
    'Skyline Courts', 'Harbor Tennis Club', 'Ridge View Courts',
    'Plaza Tennis Center', 'Garden Courts', 'Beacon Tennis Club',
    'Terrace Courts', 'Marina Tennis Center', 'Peak Performance Courts',
    'Horizon Tennis Club', 'Vista Courts', 'Crossroads Tennis',
    'Gateway Courts', 'Premier Tennis Club', 'Athletic Club Courts',
    'Sportsplex Tennis', 'University Courts', 'College Tennis Center',
    'Academy Courts', 'Training Center Tennis', 'Pro Courts',
    'Champions Tennis Club', 'Victory Courts', 'Gold Medal Tennis',
    'Olympic Courts', 'Grand Courts', 'Royal Tennis Club',
    'Diamond Courts', 'Platinum Tennis Center', 'Premier League Courts',
    'National Tennis Club', 'International Courts', 'World Class Tennis',
    'All Star Courts', 'MVP Tennis Center', 'Hall of Fame Courts',
    'Legend Tennis Club', 'Icon Courts', 'Dynasty Tennis Center',
    'Empire Courts', 'Crown Tennis Club', 'Prestige Courts',
    'Excellence Tennis Center', 'Supreme Courts', 'Ultimate Tennis Club',
    'Apex Courts', 'Pinnacle Tennis Center', 'Summit Elite Courts',
    'Premier Pro Tennis', 'Championship Elite Courts', 'Grand Master Tennis',
  ];
  
  const cities = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin',
    'San Francisco', 'Seattle', 'Denver', 'Boston', 'Miami',
    'Portland', 'Atlanta', 'Nashville', 'Las Vegas', 'Detroit'
  ];
  
  const surfaces: Array = 
    ['Hard', 'Clay', 'Grass', 'Carpet'];
  
  const amenitiesList = [
    'Parking', 'Restrooms', 'Pro Shop', 'Lighting', 'Water Fountain',
    'Seating', 'Shade', 'Locker Rooms', 'Coaching Available', 'Equipment Rental'
  ];
  
  return Array.from({ length: 75 }, (_, i) => {
    const surface = surfaces[Math.floor(Math.random() * surfaces.length)];
    const amenities = amenitiesList
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 6) + 3);
    
    return {
      id: `court-${i + 1}`,
      name: names[i % names.length] + (i >= names.length ? ` ${Math.floor(i / names.length) + 1}` : ''),
      location: `${cities[Math.floor(Math.random() * cities.length)]}, ${['CA', 'NY', 'TX', 'FL', 'IL'][Math.floor(Math.random() * 5)]}`,
      surface,
      indoor: Math.random() > 0.6,
      rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
      reviewCount: Math.floor(Math.random() * 200) + 5,
      image: `https://picsum.photos/400/300?random=${i}`,
      amenities,
      priceRange: ['$', '$$', '$$$'][Math.floor(Math.random() * 3)] as '$' | '$$' | '$$$',
    };
  });
};
