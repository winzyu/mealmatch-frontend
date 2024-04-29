import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  container: {
    background: 'linear-gradient(270deg, rgba(229, 141, 131, 0.41) 0%, rgba(233, 144, 117, 0.41) 10.83%, rgba(237, 148, 102, 0.41) 21.67%, rgba(238, 149, 97, 0.41) 51.17%, rgba(247, 157, 64, 0.41) 100%)',
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FDEDEC', // Soft pink background like the card
    borderRadius: 25, // Rounded corners
    margin: 10,
    shadowColor: '#000', // Adding some shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Darker color for text
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333', // Darker color for text
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5, // Rounded corners for input
    backgroundColor: '#FFF', // White background for input
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFC0CB', // Match button color to theme
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // More rounded corners for buttons
    marginTop: 20, // Extra spacing from last element
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default styles;
