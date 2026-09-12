import { Text, View } from 'react-native';
import { styles } from '../styles';
import TypeChip from './TypeChip';
import ScoreBlock from './ScoreBlock';
import FeedbackBox from './FeedbackBox';

export default function QuestionCard({ questionText, type, score, feedback }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.question} numberOfLines={2} ellipsizeMode="tail">
          {questionText}
        </Text>
        <ScoreBlock score={score} />
      </View>
      <TypeChip type={type} />
      <FeedbackBox feedback={feedback} />
    </View>
  );
}
