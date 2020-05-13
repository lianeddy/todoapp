import {combineReducers, ThunkAction} from '@reduxjs/toolkit';
import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {Action} from 'redux';
import auth from './auth';
import todo from './todo';

const reducer = combineReducers({
  auth,
  todo,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
