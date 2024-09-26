import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Pressable, Text} from 'react-native';
import {IonIcon} from './IonIcon';
import {globalColores} from '../../theme/theme';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 5}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          {/* <Text>Menu</Text> */}
          <IonIcon
            name="menu-outline"
            size={30}
            color={globalColores.primary}
          />
        </Pressable>
      ),
    });
  }, []); // se podria poner navigation como dependencia por si llega a cambiar algo en el menú

  return <></>;
};
