const INITIAL_STATE = { 
  count: 0,
  clicks: 0
};

const counterReducer = (state=INITIAL_STATE, action)=> {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        //espalha o state, para não perder os valores inalterados.
        ...state, 
        count: state.count + action.payload}
    default:
      return state
  }
}

export default counterReducer;