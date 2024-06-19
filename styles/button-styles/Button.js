import styled from 'styled-components/native';
import { Colors } from '../Colors';

export const StyledButtonText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.color || 'black'};
`;

export const StyledDetailButton = styled.TouchableOpacity`
  background-color: ${Colors.green};
  padding: 15px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width: 300px;
`;