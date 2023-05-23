import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateScore,
  nextQuestion,
  selectOption,
  resetQuiz,
} from '../redux-components/actions';

export default function Questions({ propsQuestions }) {
  const dispatch = useDispatch();
  const { indexOfObj, clickedButton, score } = useSelector((state) => state);

  const lenghtOfQuiz = propsQuestions.length;

  function nextStep() {
    if (indexOfObj < propsQuestions.length) {
      return (
        <div className="question">
          <h2>{propsQuestions[indexOfObj].question}</h2>
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
    dispatch(selectOption(buttonId));
  }

  useEffect(() => {
    if (clickedButton !== null) {
      ifCorrect();
      dispatch(nextQuestion());
    }
  }, [clickedButton, dispatch]);

  function ifCorrect() {
    if (clickedButton === propsQuestions[indexOfObj].correctAnswer) {
      const updatedScore = score + 1;
      dispatch(updateScore(updatedScore));
    } else if (clickedButton !== null) {
    }
  }

  function renderOptions() {
    return propsQuestions[indexOfObj].options.map((element, index) => (
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
    dispatch(resetQuiz());
  }

  return <>{nextStep()}</>;
}
