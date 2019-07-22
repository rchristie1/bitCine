const applicationState = {
  data: null,
  people: null,
  shipDetails: null,
};

export default (state = applicationState, action) => {
  switch (action.type) {
    case 'GET_ALL_SHIPS':
      return { ...state, data: action.payload };
    case 'GET_ALL_PEOPLE':
      return { ...state, people: action.payload };
    case 'GET_SHIP_DETAILS':
      return { ...state, shipDetails: action.payload };
    default:
      return state;
  }
};
