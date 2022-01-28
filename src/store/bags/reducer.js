import { bagsActionTypes } from './actions';

const initState = {
  bagsCount: 0,
  price: null,
};

const bags = (state = initState, action) => {
  console.log(action.data)
  switch (action.type) {
    case bagsActionTypes.UPDATE_BAGS_COUNT:
      return {
        ...state,
        bagsCount: action.data,
      };
    case bagsActionTypes.BAGS_PRICE:
      return {
        ...state,
        price: action.data,
      };
    default:
      return state;
  }
};
export default bags;

