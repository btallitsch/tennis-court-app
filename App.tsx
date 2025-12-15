import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { generateMockCourts } from '.src/data/mockCourts';
import { Court, Review, RootStackParamList } from '.src/types';
import { loadReviews, saveReviews } from '.src/utils/storage';
import { CourtsListScreen } from '.src/screens/CourtsListScreen';
import { CourtDetailScreen } from '.src/screens/CourtDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [courts] = useState<Court[]>(() => generateMockCourts());
  const [reviews, setReviews] = useState<{ [courtId: string]: Review[] }>
  const [isLoading, setIsLoading] = useState(true);

  // save reviews to AsyncStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      saveReviews(reviews);
    }
  }, [reviews, isLoading]);

  const loadStoredReviews = async () => {
    const storedRewviews = await loadReviews();
    setReviews(storedReviews);
    setIsLoading(false)
  }

  const handleAddReview = (
    courtId: string,
    rating: number,
    comment: string,
    userName: string,
  ) => {
    const newReview: Review = {
      id: `review-${Date.now()}`,
      courtId,
      rating,
      comment,
      date: new Date().toISOString(),
      userName,
    };

    setReviews((prev) => ({
      ...prev,
      [courtId]: [...(prev[courtId] || []), newReview],
    }));
  };

  if (isLoading) {
    return null; //add loading component here
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen
          name="CourtsList"
          component={CourtsListScreen}
          initialParams={{ courts }}
        />
        <Stack.Screen
          name="CourtDetail"
          component={CourtDetailScreen}
          initialParams={{
            reviews,
            onAddReview: handleAddReview
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
