import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface StarRatingProps {
  rating: number;
  size?: number;
  onRate?: (rating: number) => void;
}

export const StarRating: React.FC = ({ 
  rating, 
  size = 16, 
  onRate 
}) => {
  return (
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity 
          key={star} 
          onPress={() => onRate && onRate(star)}
          disabled={!onRate}
          activeOpacity={0.7}
        >
          {star <= rating ? '★' : '☆'}
      ))}
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 2,
  },
  star: {
    color: '#FFB800',
  },
});
