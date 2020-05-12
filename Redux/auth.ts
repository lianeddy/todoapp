import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {url} from '../config/API_URL';

const {actions, reducer} = createSlice({
  name: 'auth',
  initialState: {
    id: 0,
    username: '',
    roleId: 0,
    email: '',
    verified: '',
    loading: false,
    error: '',
    checkToken: false,
    displayPicture: null,
  },
  reducers: {
    auth_start: state => {
      state.loading = true;
    },
    auth_success: (state, action) => {
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    },
    auth_failed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    token_checked: state => {
      state.checkToken = true;
    },
  },
});

export const LoginAction = data => {
  return async dispatch => {
    dispatch(auth_start());
    try {
      let res = await axios.post(`${url}/users/login`, data);
      let {
        id,
        username,
        roleId,
        email,
        verified,
        token,
        displayPicture,
      } = res.data.data;
      dispatch(
        auth_success({id, username, roleId, email, verified, displayPicture}),
      );
      AsyncStorage.setItem('token', token);
    } catch (err) {
      dispatch(auth_failed(err.message));
    }
  };
};

export const KeepLogin = () => {
  return async dispatch => {
    dispatch(auth_start());
    try {
      let token = AsyncStorage.getItem('token');
      dispatch(token_checked());
      let headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let res = await axios.post(`${url}/users/keep-login`, {}, headers);
      let {id, username, roleId, email, verified} = res.data.data;
      dispatch(auth_success({id, username, roleId, email, verified}));
    } catch (err) {
      dispatch(auth_failed(err.message));
      dispatch(token_checked());
    }
  };
};

export default reducer;
export const {auth_start, auth_failed, auth_success, token_checked} = actions;
