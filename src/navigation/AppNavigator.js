import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Preferences from '../components/Preferences';
import FastFoodLogos from '../components/FastFoodLogos';
import FastFoodMenu from '../components/FastFoodMenu';
import ItemDetails from '../components/ItemDetails';
import RecipeDetails from '../components/RecipeDetails';
import GroceryStore from '../components/GroceryStore';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
              screenOptions={{
                // headerShown: false,
                cardStyle: { backgroundColor: 'white' },
                cardOverlayEnabled: true,
                cardStyleInterpolator: ({ current: { progress } }) => ({
                  cardStyle: {
                    opacity: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                  },
                  overlayStyle: {
                    opacity: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 0.5],
                      extrapolate: 'clamp',
                    }),
                  },
                }),
              }}
      initialRouteName="Preferences">
        <Stack.Screen name="Preferences" component={Preferences} />
        <Stack.Screen name="FastFoodLogos" component={FastFoodLogos} />
        <Stack.Screen name="FastFoodMenu" component={FastFoodMenu} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
        <Stack.Screen name="GroceryStore" component={GroceryStore} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;