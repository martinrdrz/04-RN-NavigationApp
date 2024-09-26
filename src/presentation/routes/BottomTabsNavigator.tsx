import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {Tab2Screen} from '../screens/tabs/Tab2Screen';
import {Tab3Screen} from '../screens/tabs/Tab3Screen';
import {globalColores} from '../theme/theme';
import {Text} from 'react-native';
import {TopTabNavigator} from './TopTabNavigator';
import {StackNavigator} from './StackNavigator';
import {IonIcon} from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColores.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColores.primary,
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        component={Tab1Screen}
        options={{
          title: 'Tit-Tab1',
          tabBarIcon: props => (
            <IonIcon
              name="accessibility-outline"
              size={25}
              color={props.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={TopTabNavigator}
        options={{
          title: 'Tit-Tab2',
          tabBarIcon: props => (
            <IonIcon name="airplane-outline" size={25} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={StackNavigator}
        options={{
          title: 'Tit-Tab3',
          tabBarIcon: props => (
            <IonIcon name="bar-chart-outline" size={25} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
