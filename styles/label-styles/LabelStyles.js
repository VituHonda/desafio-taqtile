import styled from 'styled-components/native';
import { ProgressBar } from 'react-native-paper';

export const StyledLabelContainerRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 15px;
  
  align-items: center;
`;
export const StyledStatContainer = styled.View`
  flex: 0.6;
`;
export const StyledProgressBar = styled(ProgressBar)`
  width: 180px;
  height: 5px;
  border-radius: 5px;
`;
