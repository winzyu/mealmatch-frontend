import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles/FastFoodMenu.style';
import { fastFoodMenuItems } from '../data/FastFoodMenuItems';

const FastFoodMenu = ({ navigation }) => {
  const handleMenuItemPress = (item) => {
    navigation.navigate('ItemDetails', { item });
  };

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {fastFoodMenuItems.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleMenuItemPress(item)}
          >
            <Image source={item.image} style={styles.menuItemImage} />
            <Text style={styles.menuItemName}>{item.name}</Text>
            <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
            <Text style={styles.menuItemCalories}>
              {item.calorieCount} calories
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default FastFoodMenu;
