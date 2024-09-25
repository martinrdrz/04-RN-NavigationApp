import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {StackNavigator} from './presentation/routes/StackNavigator';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';
import {BottomTabsNavigator} from './presentation/routes/BottomTabsNavigator';
import {TopTabNavigator} from './presentation/routes/TopTabNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  );
};
