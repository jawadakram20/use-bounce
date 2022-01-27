
export const userActionTypes = {
  SET_USER_NAME: 'SET_USER_NAME',
  SET_USER_EMAIL: 'SET_USER_EMAIL',
  SET_USER_CARD: 'SET_USER_CARD',
  SET_USER_CARD_ERROR: 'SET_USER_CARD_ERROR',
};

function setUserEmail(data) {
  return {
    type: userActionTypes.SET_USER_EMAIL,
    data
  };
}

function setUserName(data) {
  return {
    type: userActionTypes.SET_USER_NAME,
    data,
  };
}

function setCardDetails(data) {
  return {
    type: userActionTypes.SET_USER_CARD,
    data,
  };
}

function setCardError(data) {
  return {
    type: userActionTypes.SET_USER_CARD_ERROR,
    data,
  };
}



export { setUserName, setUserEmail, setCardDetails, setCardError };
