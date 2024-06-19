import {
  StyledBadge,
  PokemonTypeColors
} from '../styles/badge-styles/BadgeStyle';
import { StyledTextLabel } from '../styles/Styles';
import { Colors } from '../styles/Colors';
export function Badge({ type }) {

  const color = PokemonTypeColors[type] || '#000000';

  return (
      <StyledBadge bgcolor={color}>
        <StyledTextLabel color={Colors.white} style={{ textTransform: 'uppercase'}}>{type}</StyledTextLabel>
      </StyledBadge> 
  );
}
