import {ImageBackground, StyleSheet} from 'react-native';

export const globalColores = {
  primary: '#7037eb',
  secondary: '#f72585',
  tertiary: '#3a0ca3',
  success: '#4cc9f0',
  warning: '#fca311',
  danger: '#e71d36',
  dark: '#22223b',
  background: '#fff',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColores.background,
  },
  primaryButtom: {
    backgroundColor: globalColores.primary,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: globalColores.background,
    fontSize: 18,
  },
});
