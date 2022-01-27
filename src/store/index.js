import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bags from './bags/reducer'
import user from './user/reducer'

const combinedReducer = combineReducers({
  bags,
  user,
});

export default function configureStore(initialState) {
    return createStore(
      combinedReducer,
        initialState,
        applyMiddleware(thunk)
    );
}