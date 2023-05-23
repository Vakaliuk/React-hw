const initialState = {
  indexOfObj: 0,
  clickedButton: null,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SCORE':
      return { ...state, score: action.score };

    case 'NEXT_QUESTION':
      return {
        ...state,
        indexOfObj: state.indexOfObj + 1,
      };

    case 'SELECT_OPTION':
      return {
        ...state,
        clickedButton: action.buttonId,
      };
    case 'RESET_QUIZ':
      return {
        ...state,
        indexOfObj: 0,
        clickedButton: null,
        score: 0,
      };

    default:
      return state;
  }
};

export default reducer;
