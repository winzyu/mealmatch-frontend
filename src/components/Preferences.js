import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native';
import styles from './styles/Preferences.style';

const Preferences = ({ navigation }) => {
  const [location, setLocation] = useState('');
  const [hasDietaryRestrictions, setHasDietaryRestrictions] = useState(false);

  const handleContinue = () => {
    // Handle saving preferences if needed
    navigation.navigate('GroceryStore');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferences</Text>

      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Enter your location"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Dietary Restrictions:</Text>
        <Switch
          value={hasDietaryRestrictions}
          onValueChange={setHasDietaryRestrictions}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Preferences;