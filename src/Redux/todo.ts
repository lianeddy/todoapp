import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {url} from '../config/API_URL';
import {AppThunk} from './reducer';

interface TodoParamsList {
  id: number;
  todo: string;
  imagePath: string;
}

const {actions, reducer} = createSlice({
  name: 'todo',
  initialState: {
    dataList: [] as Array<TodoParamsList>,
    error: '',
    loading: false,
  },
  reducers: {
    todo_start: state => {
      state.loading = true;
    },
    todo_success: (state, action) => {
      return {
        ...state,
        dataList: action.payload,
        loading: false,
      };
    },
    todo_failed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

let token = AsyncStorage.getItem('token');

export const fetchTodo = (id: number): AppThunk => {
  return async dispatch => {
    dispatch(todo_start());
    let headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      let res = await axios.get(`${url}/todo/get-todo/${id}`, headers);
      dispatch(todo_success(res.data.dataList));
    } catch (err) {
      dispatch(todo_failed(err.message));
    }
  };
};

export default reducer;
export const {todo_start, todo_success, todo_failed} = actions;
