import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F6F8',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1A1A',
    letterSpacing: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  list: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 8,
    paddingBottom: 32,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  emptyText: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ECEEF2',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  question: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    lineHeight: 22,
  },
  scoreBlock: {
    alignItems: 'flex-end',
    gap: 6,
  },
  score: {
    fontSize: 14,
    color: '#6B7280',
  },
  ratingPill: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  goodPill: {
    backgroundColor: '#E8F8EE',
  },
  needsWorkPill: {
    backgroundColor: '#FFF3E6',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
  },
  goodText: {
    color: '#1B8A4A',
  },
  needsWorkText: {
    color: '#C56A12',
  },
  typeChip: {
    alignSelf: 'flex-start',
    marginTop: 12,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  textChip: {
    backgroundColor: '#E8F1FF',
  },
  recordedChip: {
    backgroundColor: '#F0E9FF',
  },
  typeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  textChipText: {
    color: '#2F6FED',
  },
  recordedChipText: {
    color: '#7B5CDB',
  },
  feedbackBox: {
    marginTop: 12,
    backgroundColor: '#F7F8FA',
    borderRadius: 12,
    padding: 12,
  },
  feedbackLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  feedback: {
    fontSize: 13,
    lineHeight: 20,
    color: '#4B5563',
  },
});
