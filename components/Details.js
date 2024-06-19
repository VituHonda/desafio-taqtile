import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyledContainer,
  StyledDetailImage,
  StyledDetailImageContainer,
  StyledBadgeContainer,
  StyledStatContainerColumn,
  StyledBadgeFlatList,
} from '../styles/detail-style/DetailStyle';
import { Badge } from './Badge';
import { Display } from './Display';
import { Label } from './Label';
import { ShareButton } from './Button';
import { StyledTextDt } from '../styles/Styles';

export default function Detail({ route }) {
  const { pokemonName } = route.params;
  const { url } = route.params;
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const data = await response.json();

        const mappedData = {
          name: data.name,
          height: data.height / 10,
          weight: data.weight / 10,

          attack: data.stats.find((stat) => stat.stat.name === 'attack')
            .base_stat,
          defense: data.stats.find((stat) => stat.stat.name === 'defense')
            .base_stat,
          hp: data.stats.find((stat) => stat.stat.name === 'hp').base_stat,

          types: data.types.map((typeInfo) => typeInfo.type.name),
        };

        setPokemonData(mappedData);
        setLoading(false);
      } catch (error) {
        console.error('Error on the API with pokemon data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pokemonName]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: pokemonName,
    });
  }, [navigation, pokemonName]);

  return (
    <StyledContainer>
      <StyledContainer>
        <StyledBadgeContainer>
          <StyledBadgeFlatList
            horizontal
            data={pokemonData.types}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Badge type={item} />}
          />
        </StyledBadgeContainer>

        <StyledDetailImageContainer>
          <StyledDetailImage
            source={{
              uri: url,
            }}
          />

          <Display weight={pokemonData.weight} height={pokemonData.height} />

          <StyledStatContainerColumn>
            <StyledTextDt>Base Stats</StyledTextDt>

            <Label
              text="Hp"
              progress={pokemonData.hp / 100}
              value={pokemonData.hp}
            />

            <Label
              text="Attack"
              progress={pokemonData.attack / 100}
              value={pokemonData.attack}
            />

            <Label
              text="Defense"
              progress={pokemonData.defense / 100}
              value={pokemonData.defense}
            />
          </StyledStatContainerColumn>

          <ShareButton
            name={pokemonName}
            height={pokemonData.height}
            weight={pokemonData.weight}
            hp={pokemonData.hp}
            attack={pokemonData.attack}
            defense={pokemonData.defense}
            types={pokemonData.types}
          />
        </StyledDetailImageContainer>
      </StyledContainer>
    </StyledContainer>
  );
}
