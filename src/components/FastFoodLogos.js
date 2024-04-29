import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; // Import necessary components
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation

const FoodCard = () => {
  const navigation = useNavigation();

  const handleLogoClick = (restaurantName) => {
    if (restaurantName === 'McDonalds') {
      navigation.navigate('FastFoodMenu');
    } else {
      console.log(`You clicked on: ${restaurantName}`);
    }
  };

  const cardStyle = {
    width: '300px',
    borderRadius: '20px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    padding: '20px',
    background: 'linear-gradient(270deg, rgba(229, 141, 131, 0.41) 0%, rgba(233, 144, 117, 0.41) 10.83%, rgba(237, 148, 102, 0.41) 21.67%, rgba(238, 149, 97, 0.41) 51.17%, rgba(247, 157, 64, 0.41) 100%)', // Updated gradient background
    margin: 'auto',
    textAlign: 'center',
    fontFamily: 'Arial',
    color: 'black ', // Text color
    position: 'relative',
  };

  const questionStyle = {
    fontSize: '30px',
    marginBottom: '20px',
    backgroundColor: '#ffffff', // Contrast background color
    color: 'black', // Text color
    display: 'inline-block', // To wrap the background around the text
    padding: '10px 20px', // Padding to simulate border around the text
    borderRadius: '25px', // Rounded corners for the background/border
    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)', // Optional: subtle shadow
  };

  const logoContainerStyle = {
    display: 'grid',
    gridTemplateRows: 'repeat(2, 1fr)', // Add this line
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    maxWidth: '300px',
    margin: '10 auto',
  };
  

  const logoStyle = {
    cursor: 'pointer',
    width: '80px',
    height: '80px',
    margin: '5px',
    border: '2px ', // Example border: 2px solid white
    borderRadius: '10px', // Rounded corners to match the card style
    boxSizing: 'border-box', // Include border in the element's dimensions
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensure images fit within the border
  };

    return (
      <div style={cardStyle}>
        <div style={questionStyle}><b>What do you feel like eating?</b></div>
        <div style={logoContainerStyle}>
          <TouchableOpacity onPress={() => handleLogoClick('McDonalds')}>
            <img src="src/assets/logos/mcdonalds.png" alt="McDonald's" style={logoStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLogoClick('Chipotle')}>
            <img src="src/assets/logos/chipotle.png" alt="Chipotle" style={logoStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLogoClick('Chick-fil-A')}>
            <img src="src/assets/logos/chickfila.png" alt="Chick-fil-A" style={logoStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLogoClick('Wendys')}>
            <img src="src/assets/logos/wendy.png" alt="Wendy's" style={logoStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLogoClick('Arbys')}>
            <img src="src/assets/logos/arbys.png" alt="Arby's" style={logoStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLogoClick('Pizza Hut')}>
            <img src="src/assets/logos/pizzahut.png" alt="Pizza Hut" style={logoStyle} />
          </TouchableOpacity>
        </div>
      </div>
    );
  };

export default FoodCard;