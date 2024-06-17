import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Detail({ route }) {
  const { pokemonName } = route.params;
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: pokemonName,
    });
  }, [navigation, pokemonName]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{pokemonName}</Text>
    </View>
  );
}
