import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import styles from './styles/RecipeDetails.style';
import { fastFoodMenuItems } from '../data/FastFoodMenuItems';
import ingredients from '../data/ingredients';
import { alternativeRecipes } from '../data/alternativeRecipes';

const RecipeDetails = ({ route, navigation }) => {
  const { item } = route.params;
  const [alternativeCalories, setAlternativeCalories] = useState(0);
  const [alternativePrice, setAlternativePrice] = useState(0);
  const [effectivePrice, setEffectivePrice] = useState(0);
  const [mealCount, setMealCount] = useState(0);
  const [leftovers, setLeftovers] = useState({});
  const [sauceOption, setSauceOption] = useState('');

  const originalItem = fastFoodMenuItems.find(menuItem => menuItem.name === item.name);

  useEffect(() => {
    calculateAlternativeValues();
  }, [sauceOption]);

  const calculateAlternativeValues = () => {
    const recipe = alternativeRecipes[item.name];

    if (item.name === 'Big Mac') {
      if (sauceOption === 'no-sauce') {
        delete recipe['Big Mac Sauce'];
      } else if (sauceOption !== '') {
        delete recipe['Big Mac Sauce'];
        recipe[sauceOption] = 1;
      }
    }

    let totalCalories = 0;
    let totalPrice = 0;
    let effectivePrice = 0;
    const ingredientQuantities = {};

    Object.entries(recipe).forEach(([ingredient, quantity]) => {
      const ingredientData = ingredients.find((data) => data.name === ingredient);
      totalCalories += ingredientData.caloriesPerOunce * quantity;
      totalPrice += ingredientData.cost;
      if (ingredientData.count !== 0) {
        effectivePrice += (ingredientData.cost * quantity) / ingredientData.count;
        ingredientQuantities[ingredient] = ingredientData.count / quantity;
      } else {
        effectivePrice += (ingredientData.cost * quantity) / ingredientData.weight[0];
        ingredientQuantities[ingredient] = ingredientData.weight[0] / quantity;
      }
    });

    var mealCount = 10000;
    var meals = 0;
    const leftovers = {};
    Object.entries(ingredientQuantities).forEach(([ingredient]) => {
      const ingredientData = ingredients.find((data) => data.name === ingredient);
      if (ingredientData.count !== 0) {
        meals = (ingredientData.count / recipe[ingredient]);
      } else {
        meals = Math.floor(ingredientData.weight[0] / recipe[ingredient]);
      }
      mealCount = Math.min(mealCount, meals);
    });

    Object.entries(ingredientQuantities).forEach(([ingredient]) => {
      const ingredientData = ingredients.find((data) => data.name === ingredient);
      if (ingredientData.count != 0){
        leftovers[ingredient] = ingredientData.count - mealCount * recipe[ingredient];
      } else {
        leftovers[ingredient] = ingredientData.weight[0] - mealCount * recipe[ingredient];
      }
    });

    setEffectivePrice(effectivePrice);
    setAlternativeCalories(totalCalories);
    setAlternativePrice(totalPrice);
    setMealCount(mealCount);
    setLeftovers(leftovers);
  };

  const handleSauceOptionChange = (option) => {
    setSauceOption(option);
  };
  
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Recipe Comparison</Text>
      <Text style={styles.item}>{item.name}</Text>
      <View style={styles.comparisonContainer}>
        <Text style={styles.comparisonLabel}>Calories:</Text>
        <Text style={styles.comparisonValue}>
          Original: {originalItem.calorieCount.toFixed(2)} | Alternative: {alternativeCalories.toFixed(2)}
        </Text>
      </View>
      <View style={styles.comparisonContainer}>
        <Text style={styles.comparisonLabel}>Price:</Text>
        <Text style={styles.comparisonValue}>
          Original: ${originalItem.price.toFixed(2)} | Effective: ${effectivePrice.toFixed(2)} | Alternative: ${alternativePrice.toFixed(2)}
        </Text>
      </View>
      <View style={styles.comparisonContainer}>
        <Text style={styles.comparisonLabel}>Meal Count:</Text>
        <Text style={styles.comparisonValue}>{mealCount}</Text>
      </View>
      <View style={styles.comparisonContainer}>
        <Text style={styles.comparisonLabel}>Leftovers:</Text>
        {Object.entries(leftovers).map(([ingredient, quantity]) => (
          <Text key={ingredient} style={styles.comparisonValue}>
            {ingredient}: {quantity}
          </Text>
        ))}
      </View>

      {item.name === 'Big Mac' && (
        <View style={styles.sauceOptionContainer}>
          <Text style={styles.sauceOptionLabel}>Big Mac Sauce Options:</Text>
          <View style={styles.sauceButtonsContainer}>
            <Button
              title="Ketchup"
              onPress={() => handleSauceOptionChange('Ketchup')}
              color={sauceOption === 'Ketchup' ? 'blue' : 'gray'}
            />
            <Button
              title="Mustard"
              onPress={() => handleSauceOptionChange('Mustard')}
              color={sauceOption === 'Mustard' ? 'blue' : 'gray'}
            />
            <Button
              title="Mayonnaise"
              onPress={() => handleSauceOptionChange('Mayonnaise')}
              color={sauceOption === 'Mayonnaise' ? 'blue' : 'gray'}
            />
            <Button
              title="No Sauce"
              onPress={() => handleSauceOptionChange('no-sauce')}
              color={sauceOption === 'no-sauce' ? 'blue' : 'gray'}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default RecipeDetails;