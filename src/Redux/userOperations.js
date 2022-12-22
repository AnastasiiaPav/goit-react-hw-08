import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginUser, logoutUser, refreshUser, registerUser } from 'ApiUser';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerThunk = createAsyncThunk(
  'users/singup',
  async (user, { rejectWithValue }) => {
    try {
      const response = await registerUser(user);
      token.set(response.data.token);
      alert(`Registration passed, welcome ${response.data.user.name}`);
      return response.data;
    } catch (error) {
      if (error.response.status === 400) {
        alert(
          `Passwork must contain letters, numbers and be loanger than 6 characters`
        );
      }
      return rejectWithValue(error);
    }
  }
);

export const loginThunk = createAsyncThunk(
    'users/login',
    async (user, { rejectWithValue }) => {
      try {
        const response = await loginUser(user);
        token.set(response.data.token);
        alert(`Welcome ${response.data.user.name}`);
        return response.data;
      } catch (error) {
        if (error.response.status === 400) {
          alert(
            'Incorrect email or password, please try again'
          );
        }
        return rejectWithValue(error);
      }
    }
  );

  export const logoutThunk = createAsyncThunk(
    'users/logout',
    async (_, { rejectWithValue }) => {
      try {
        await logoutUser();
        alert(`Bye, you logout`);
        token.unset();
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  
  export const refreshThunk = createAsyncThunk(
    'users/refresh',
    async (_, { getState, rejectWithValue }) => {
      const state = getState();
      const persistToken = state.user.token;
  
      if (persistToken === null) {
        return rejectWithValue();
      }
  
      token.set(persistToken);
      try {
        const response = await refreshUser();
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );