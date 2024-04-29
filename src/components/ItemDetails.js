import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/ItemDetails.style';

const ItemDetails = ({ route, navigation }) => {
  const { item } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleViewRecipe = () => {
    navigation.navigate('RecipeDetails', { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Price:</Text>
          <Text style={styles.detailValue}>${item.price.toFixed(2)}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Calorie Count:</Text>
          <Text style={styles.detailValue}>{item.calorieCount}</Text>
        </View>
      </View>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        {item.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredientItem}>
            - {ingredient}
          </Text>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGoBack}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleViewRecipe}>
          <Text style={styles.buttonText}>View Recipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemDetails;