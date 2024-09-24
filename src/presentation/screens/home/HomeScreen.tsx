import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>Home Screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Products' as never)}
        style={globalStyles.primaryButtom}>
        <Text style={globalStyles.buttonText}>Productos</Text>
      </Pressable>
    </View>
  );
};
