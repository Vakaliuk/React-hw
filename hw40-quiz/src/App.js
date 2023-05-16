import './App.css';
import Quiz from './components/quiz';
import { QuestAnswContext } from './context/index.js';

function App() {
  const questions = [
    {
      question: 'The capital of Great Britain?',
      options: ['Paris', 'Tokio', 'London', 'Berlin'],
      correctAnswer: 'London',
    },
    {
      question: 'The highest mountain on the Earth?',
      options: ['Fuji', 'Matterhorn', 'Kilimanjaro', 'Everest'],
      correctAnswer: 'Everest',
    },
    {
      question: 'What is the population of the Earth?',
      options: ['4 billion', '6 billion', 'more than 8 billion'],
      correctAnswer: 'more than 8 billion',
    },
    {
      question: 'What is the biggest country of Europe?',
      options: ['France', 'Sweden', 'Italy', 'Ukraine'],
      correctAnswer: 'Ukraine',
    },
  ];

  return (
    <div className="App">
      <QuestAnswContext.Provider value={{ questions }}>
        <Quiz />
      </QuestAnswContext.Provider>
    </div>
  );
}

export default App;
