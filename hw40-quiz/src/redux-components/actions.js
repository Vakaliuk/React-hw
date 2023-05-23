export const updateScore = (score) => {
  return {
    type: 'UPDATE_SCORE',
    score,
  };
};

export const nextQuestion = () => {
  return {
    type: 'NEXT_QUESTION',
  };
};

export const selectOption = (buttonId) => {
  return {
    type: 'SELECT_OPTION',
    buttonId,
  };
};

export const resetQuiz = () => {
  return {
    type: 'RESET_QUIZ',
  };
};
