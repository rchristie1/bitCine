import { API, APILIVE } from '../../config';

/* to use the live API uncomment the other fetch and 
dispatch actions and comment out the current */

export const returnShips = (data) => {
  return {
    type: 'GET_ALL_SHIPS',
    payload: data,
  };
};

export const returnPeople = (people) => {
  return {
    type: 'GET_ALL_PEOPLE',
    payload: people,
  };
};
  
export const getAllShips = () => {
  return dispatch => {
    // fetch(`${APILIVE}/starships`)
    fetch(`${API}/starships`)
      .then((res) => res.json())
      .then(data => {
        dispatch(returnShips(data));
        // dispatch(returnShips(data.results));
      })
      .catch(err => console.log(err));
  };
};

export const getAllPeople = () => {
  return dispatch => {
    // fetch(`${APILIVE}/people`)
    fetch(`${API}/people`)
      .then((res) => res.json())
      .then(data => {
        dispatch(returnPeople(data));
        // dispatch(returnPeople(data.results));
      })
      .catch(err => console.log(err));
  };
};

export const getShipDetails = (data) => {
  return {
    type: 'GET_SHIP_DETAILS',
    payload: data,
  };
};

