import styled from 'styled-components/native';
import {Colors} from '../colors';

export const StyledContainer = styled.View`
  width: auto;
  height: 60px;
  padding: 12px;
  margin: 8px 16px;
  background-color: ${Colors.white};
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction:row;
  align-items:center;
  overflow: hidden;
`;

export const StyledImage = styled.Image`
  width: 70px;
  height: 70px;
  margin-right: 12px;
  margin-top: 20px;
`;