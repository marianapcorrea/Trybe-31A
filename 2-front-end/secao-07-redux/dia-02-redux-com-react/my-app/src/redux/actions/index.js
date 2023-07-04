//increment = 1 define o valor defaut de increment como 1
export const actionCreator = (increment=1)=> ({
  type: 'INCREMENT_COUNTER',
  payload: increment
})