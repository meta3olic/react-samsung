const initialState = {
  isReady: false,
  products: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        ...state,
        products: action.payload,
      };
    case 'SET_IS_READY':
      return {
        ...state,
        isReady: action.payload
      }
    default:
      return state;
  }
}