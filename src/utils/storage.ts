import AsyncStorage from '@react-native-async-storage/async-storage';
import { Review } from '../types';

const REVIEWS_KEY = '@tennis_reviews';

export const saveReviews = async (reviews: { [courtId: string]: Review[] }) => {
  try {
    await AsyncStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
  } catch (error) {
    console.error('Error saving reviews:', error);
  }
};

export const loadReviews = async (): Promise => {
  try {
    const data = await AsyncStorage.getItem(REVIEWS_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error loading reviews:', error);
    return {};
  }
};
