import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { url } from '../config/API_URL';
import { AppThunk } from './reducer';

type AuthParams = {
  username: string;
  password: string;
};

const { actions, reducer } = createSlice({
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
    auth_start: (state) => {
      state.loading = true;
    },
    auth_success: (state, action: PayloadAction<object>) => {
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    },
    auth_failed: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    token_checked: (state) => {
      state.checkToken = true;
    },
  },
});

export default reducer;
export const { auth_start, auth_failed, auth_success, token_checked } = actions;

export const LoginAction = (data: AuthParams): AppThunk => {
  return async (dispatch) => {
    dispatch(auth_start());
    try {
      const res = await axios.post(`${url}/users/login`, data);
      const {
        id,
        username,
        roleId,
        email,
        verified,
        token,
        displayPicture,
      } = res.data.data;
      dispatch(
        auth_success({ id, username, roleId, email, verified, displayPicture }),
      );
      AsyncStorage.setItem('token', token);
    } catch (err) {
      dispatch(auth_failed(err.message));
    }
  };
};

export const KeepLogin = (): AppThunk => {
  return async (dispatch) => {
    dispatch(auth_start());
    try {
      const token = AsyncStorage.getItem('token');
      dispatch(token_checked());
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.post(`${url}/users/keep-login`, {}, headers);
      const { id, username, roleId, email, verified } = res.data.data;
      dispatch(auth_success({ id, username, roleId, email, verified }));
    } catch (err) {
      dispatch(auth_failed(err.message));
      dispatch(token_checked());
    }
  };
};
