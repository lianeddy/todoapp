import {combineReducers} from '@reduxjs/toolkit';
import auth from './auth';
import todo from './todo';

const reducer = combineReducers({
  auth,
  todo,
});

export default reducer;
