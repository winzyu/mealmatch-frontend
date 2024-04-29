import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  item: {
    fontSize: 18,
    fontFamily: 'monospace',
    textAlign: 'left',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    marginBottom: 10,
  },
  comparisonContainer: {
    marginBottom: 30,
  },
  comparisonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  comparisonValue: {
    fontSize: 16,
    fontFamily: 'monospace',
  },
  backButton: {
    marginBottom: 10,
    fontFamily: 'monospace',
  },
  backButtonText: {
    fontSize: 18,
    color: 'blue',
    fontFamily: 'monospace',
  },
  sauceOptionContainer: {
    marginTop: 10,
  },
  sauceOptionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'monospace',
  },
  sauceButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});

export default styles;