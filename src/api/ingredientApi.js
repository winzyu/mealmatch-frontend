import axios from 'axios';

export const getIngredientData = async () => {
  try {
    const response = await axios.get('https://api.example.com/ingredients');
    return response.data;
  } catch (error) {
    throw error;
  }
};