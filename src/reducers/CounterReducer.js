const initialState = {
  number: 0
};

const CounterReducer = (state = initialState, action) => {
  console.log(action);

  switch(action.type) {
    case `INCREMENT`:
      return {
        number: state.number + action.diff
      };
    case `DECREMENT`:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
};

export default CounterReducer;
