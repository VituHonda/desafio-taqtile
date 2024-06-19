import {
  StyledButtonText,
  StyledDetailButton,
} from '../styles/button-styles/Button';
import { Alert, Share } from 'react-native';

export const ShareButton = ({
  name,
  height,
  weight,
  hp,
  attack,
  defense,
  types,
}) => {
  const formattedTypes = types && types.length > 0 ? types.join(', ') : '';
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `
--- Pokemon Info ---
Name/Nome: ${name}
Height/Altura: ${height}
Weight/Peso: ${weight}
HP: ${hp}
ATTACK: ${attack}
DEFENSE: ${defense}
Type/Tipo: ${formattedTypes}
`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Shared with ${result.activityType}`);
        } else {
          console.log('Shared!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share canceled');
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <StyledDetailButton onPress={onShare}>
      <StyledButtonText color="white">Compartilhar</StyledButtonText>
    </StyledDetailButton>
  );
};
