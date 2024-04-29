import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    height: '55%',
    width: '45%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItemImage: {
    width: '100%',
    height: '40%', // Set a fixed height or remove it to allow dynamic height
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  menuItemPrice: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  menuItemCalories: {
    fontSize: 12,
    color: '#888',
  },
});

export default styles;
