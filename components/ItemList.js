import { StyledItemListContainer, StyledImage } from '../styles/ItemListStyle/ItemListStyle.js';
import { StyledTextH3 } from '../styles/Styles'

interface ItemListProps {
  name: String;
  url: String;
}

export function ItemList({ name, url }: ItemListProps) {
  return (
    <StyledItemListContainer>
      <StyledImage
        source={{
          uri: url,
        }}
      />
      <StyledTextH3>{name}</StyledTextH3>
    </StyledItemListContainer>
  );
}
