
export const bagsActionTypes = {
  UPDATE_BAGS_COUNT: 'UPDATE_BAGS_COUNT',
  BAGS_PRICE: 'BAGS_PRICE',
};

function updateBagsCount(data) {
  return {
    type: bagsActionTypes.UPDATE_BAGS_COUNT,
    data
  };
}

function updateBagsPrice(data) {
  return {
    type: bagsActionTypes.BAGS_PRICE,
    data,
  };
}

function updateBagsCountAction(data) {
  return async (dispatch, getState) => {
    dispatch(updateBagsCount(data))
    const price = data * 5.90;
    dispatch(updateBagsPrice(price))
  };
}


export { updateBagsCountAction };
