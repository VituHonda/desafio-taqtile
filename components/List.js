import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { ItemList } from './ItemList';
import { StyledListFlatList, StyledTouchableOpacity, StyledSafeAreaView } from '../styles/list-styles/ListStyle';

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
        console.error('Error on the API with pokemon list', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const itemPress = (name, url) => {
    navigation.navigate('Details', { pokemonName: name, url: url});
  };

  return (
    <StyledSafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <StyledListFlatList
          data={list}
          renderItem={({ item }) => (
            <StyledTouchableOpacity onPress={() => itemPress(item.name, item.url)}>
              <ItemList name={item.name} url={item.url} />
            </StyledTouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </StyledSafeAreaView>
  );
}
