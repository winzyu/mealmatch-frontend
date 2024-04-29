import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  redLogo: {
    backgroundColor: 'red',
  },
  blueLogo: {
    backgroundColor: 'blue',
  },
  greenLogo: {
    backgroundColor: 'green',
  },
  orangeLogo: {
    backgroundColor: 'orange',
  },
  purpleLogo: {
    backgroundColor: 'purple',
  },
  yellowLogo: {
    backgroundColor: 'yellow',
  },
});

export default styles;