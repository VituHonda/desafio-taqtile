import styled from 'styled-components/native';
import {Colors} from '../Colors';

export const StyledContainer = styled.View`
  background-color: ${Colors.bgGreen};
  flex: 1;
`;

export const StyledDetailImageContainer = styled.View`
  flex: 2;
  background-color: ${Colors.white};
  align-items: center;
  overflow: visible;
  position: relative;
  border-radius: 30px;
`;

export const StyledDetailImage = styled.Image`
  width: 200px;
  height: 200px;
  top: -150px;
  position: absolute;
`;

export const StyledBadgeContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const StyledStatContainerColumn = styled.View`
  display: flex;
  width: 300px;
  margin-top: 30px;
`;

export const StyledBadgeFlatList = styled.FlatList`
  
`;


