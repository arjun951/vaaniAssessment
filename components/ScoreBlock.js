import { Text, View } from 'react-native';
import { GOOD_PERFORMANCE_SCORE } from '../Constants';
import { styles } from '../styles';

export default function ScoreBlock({ score }) {
  if (score < 0 || score > 100) return null;

  const isGood = score >= GOOD_PERFORMANCE_SCORE;

  return (
    <View style={styles.scoreBlock}>
      <Text style={styles.score}>{score}/100</Text>
      <View style={[styles.ratingPill, isGood ? styles.goodPill : styles.needsWorkPill]}>
        <Text style={[styles.ratingText, isGood ? styles.goodText : styles.needsWorkText]}>
          {isGood ? 'Good' : 'Needs Improvement'}
        </Text>
      </View>
    </View>
  );
}
