import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CourtListScreen from "../screens/CourtListScreen";
import CourtDetailScreen from "../screens/CourtDetailScreen";

export type RootStackParamList = {
  Courts: undefined;
  CourtDetail: { courtId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Courts"
        component={CourtListScreen}
        options={{ title: "Tennis Courts" }}
      />
      <Stack.Screen
        name="CourtDetail"
        component={CourtDetailScreen}
        options={{ title: "Court Details" }}
      />
    </Stack.Navigator>
  );
}
