import { Colors } from '../styles/Colors';
import {
  StyledLabelContainerRow,
  StyledStatContainer,
  StyledProgressBar,
} from '../styles/label-styles/LabelStyles';
import {
  StyledTextDd,
} from '../styles/Styles';

export function Label({ text, progress, value }) {
  return (
    <StyledLabelContainerRow>
      <StyledStatContainer>
        <StyledTextDd>{text}</StyledTextDd>
      </StyledStatContainer>
      <StyledProgressBar progress={progress} color={Colors.green} />
      <StyledTextDd>{value}</StyledTextDd>
    </StyledLabelContainerRow>
  );
}
