import { Divider } from '@rneui/themed';
import {
  StyledDisplayContainerColumn,
  StyledDisplayContainerRow,
} from '../styles/display-styles/DisplayStyles';
import {
  StyledTextLabel,
  StyledTextDisplay,
} from '../styles/Styles';

export function Display({ weight, height }) {
  return (
    <StyledDisplayContainerRow>
      <StyledDisplayContainerColumn>
        <StyledTextDisplay>{height} m</StyledTextDisplay>
        <StyledTextLabel>HEIGHT</StyledTextLabel>
      </StyledDisplayContainerColumn>

      <Divider orientation="vertical" width={1} />

      <StyledDisplayContainerColumn>
        <StyledTextDisplay>{weight} KG</StyledTextDisplay>
        <StyledTextLabel>WEIGHT</StyledTextLabel>
      </StyledDisplayContainerColumn>
    </StyledDisplayContainerRow>
  );
}
