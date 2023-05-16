import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { QuestAnswContext } from '../context/index.js';

export default function Questions() {
  const { questions } = useContext(QuestAnswContext);

  const [indexOfObj, setIndexofObj] = useState(0);
  const [clickedButton, setClickedButton] = useState(null);
  const [score, setScore] = useState(0);
  const [lenghtOfQuiz, setLengthOfQuiz] = useState(questions.length);

  function nextQuestion() {
    setIndexofObj((prevIndex) => prevIndex + 1);
  }

  function nextStep() {
    if (indexOfObj < questions.length) {
      return (
        <div className="question">
          <h2>{questions[indexOfObj].question}</h2>
          <div className="options">{renderOptions()}</div>
        </div>
      );
    } else {
      return (
        <div>
          {renderGameOver()}
          <button onClick={tryAgain} className="btn">
            Try again
          </button>
        </div>
      );
    }
  }

  function handleButtonClick(buttonId) {
    setClickedButton(buttonId);
  }

  useEffect(() => {
    if (clickedButton !== null) {
      ifCorrect();
      nextQuestion();
    }
  }, [clickedButton]);

  function ifCorrect() {
    if (clickedButton === questions[indexOfObj].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      console.log('Correct');
    } else if (clickedButton !== null) {
      console.log('Incorrect');
    }
  }

  function renderOptions() {
    return questions[indexOfObj].options.map((element, index) => (
      <div key={index} className="question">
        <button
          onClick={() => {
            handleButtonClick(element);
          }}
          className="btn"
          key={index}
        >
          {element}
        </button>
      </div>
    ));
  }

  function renderGameOver() {
    return (
      <div>
        <h4>
          your scored {score} points of {lenghtOfQuiz} questions
        </h4>
      </div>
    );
  }

  function tryAgain() {
    setScore((prevScore) => (prevScore = 0));
    setIndexofObj((prevIndex) => (prevIndex = 0));
    nextStep();
  }

  return <>{nextStep()}</>;
}
