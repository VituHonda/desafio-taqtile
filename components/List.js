import React, { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ItemList } from './ItemList';

export default function List(props) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();

        const mappedData = data.results.map((pokemon, index) => ({
          name: pokemon.name,
          url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
        }));

        setList(mappedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleItemPress = (name) => {
    navigation.navigate('Detalhes', { pokemonName: name });
  };

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item.name)}>
              <ItemList name={item.name} url={item.url} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeAreaView>
  );
}
