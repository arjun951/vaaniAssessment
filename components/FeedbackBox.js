import { Text, View } from 'react-native';
import { isInvalidString } from '../Utils';
import { styles } from '../styles';

export default function FeedbackBox({ feedback }) {
  if (isInvalidString(feedback)) return null;

  return (
    <View style={styles.feedbackBox}>
      <Text style={styles.feedbackLabel}>AI Feedback</Text>
      <Text style={styles.feedback} numberOfLines={4} ellipsizeMode="tail">
        {feedback}
      </Text>
    </View>
  );
}
