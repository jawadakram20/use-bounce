import { userActionTypes } from './actions';

const initState = {
  name: '',
  email: '',
  card: '',
  error: false,
  paymentError: false,
};

const user = (state = initState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER_EMAIL:
      return {
        ...state,
        email: action.data,
      };
    case userActionTypes.SET_USER_NAME:
      return {
        ...state,
        name: action.data,
      };
    case userActionTypes.SET_USER_CARD:
      return {
        ...state,
        card: action.data,
      };
    case userActionTypes.SET_USER_CARD_ERROR:
      return {
        ...state,
        error: action.data,
      };
    default:
      return state;
  }
};
export default user;

