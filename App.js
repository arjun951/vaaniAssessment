import { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { QUESTION_DETAIL } from './Constants';
import { isInvalidString } from './Utils';
import { styles } from './styles';
import QuestionCard from './components/QuestionCard';

export default function App() {

  const shouldShowQuestions = (question) => {
    const { status = '' } = question;
    if (status != 'Completed') return false;
    else return true;
  };

  const questionsToRender = useMemo(() => {
    return QUESTION_DETAIL.filter((element) => shouldShowQuestions(element));
  }, []);

  const renderQuestion = ({ item: ques }) => {
    const { question: questionText = '', type = '', score = -1, feedback = '' } = ques;
    if (
      isInvalidString(questionText) ||
      isInvalidString(type) ||
      isInvalidString(feedback) ||
      score === -1
    ) {
      return null;
    }

    return (
      <QuestionCard
        questionText={questionText}
        type={type}
        score={score}
        feedback={feedback}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen} edges={['top', 'left', 'right']}>
        <Text style={styles.heading}>RESULTS</Text>
        <FlatList
          contentContainerStyle={styles.list}
          data={questionsToRender}
          keyExtractor={(item, index) => String(item.id ?? index)}
          renderItem={renderQuestion}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>No completed assessments yet.</Text>
            </View>
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
