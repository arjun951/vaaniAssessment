# Assessment Results

React Native (Expo) screen for reviewing completed assessments — question, type, score, performance label, and AI feedback.

## What it does

- Shows **Completed** assessments only (Pending items have no score/feedback)
- Labels each result as **Recorded** or **Text**
- Marks performance as **Good** (`score >= 80`) or **Needs Improvement**
- Skips invalid rows (missing question/type/feedback, or score out of range)
- Empty state when there are no completed results
- Uses `FlatList` so the list stays fast with many results

## Run

```bash
npm install
npx expo start
