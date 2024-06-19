import styled from 'styled-components/native';
import {Colors} from './Colors';

export const StyledTextH1 = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const StyledTextH2 = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const StyledTextH3 = styled.Text`
  font-size: 16px;
  font-weight: bold;
  
`;

export const StyledTextBody = styled.Text`
  font-size: 12px;
`;

export const StyledTextDt = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;

export const StyledTextDd = styled.Text`
  font-size: 16px;
`;

export const StyledTextDisplay = styled.Text`
  font-size: 40px;
  font-weight: bold;
`;

export const StyledTextLabel = styled.Text`
  font-size: 14px;
  color: ${(props) => props.color || 'black'};
`;