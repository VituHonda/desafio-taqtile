import styled from 'styled-components/native';
import { Colors } from '../Colors';

export const StyledBadge = styled.View`
  height: 36px;
  width: 64px;
  background-color: ${(props) => props.bgcolor || Colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 16px 0px 0px 12px;
`;

export const PokemonTypeColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};
