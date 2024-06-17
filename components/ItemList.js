import * as React from 'react';
import { ActivityIndicator, Text, View, Image, FlatList } from 'react-native';
import Constants from 'expo-constants';
import Wrapper from './Wrapper';
import styled from 'styled-components/native';
import { StyledContainer, StyledImage } from '../styles/ItemListStyle/ItemListStyle.js';
import { StyledTextH3 } from '../styles/styles'

interface ItemListProps {
  name: String;
  url: String;
}

export function ItemList({ name, url }: ItemListProps) {
  return (
    <StyledContainer>
      <StyledImage
        source={{
          uri: url,
        }}
      />
      <StyledTextH3>{name}</StyledTextH3>
    </StyledContainer>
  );
}
