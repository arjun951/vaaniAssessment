import { Text, View } from 'react-native';
import { styles } from '../styles';

export default function TypeChip({ type }) {
  if (type !== 'Text' && type !== 'Recorded') return null;

  const isTextType = type === 'Text';

  return (
    <View style={[styles.typeChip, isTextType ? styles.textChip : styles.recordedChip]}>
      <Text style={[styles.typeText, isTextType ? styles.textChipText : styles.recordedChipText]}>
        {type}
      </Text>
    </View>
  );
}
