import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    
  };
  
  // Utility to remove JWT
//   const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';}


    export const register = createAsyncThunk(
        'auth/register',
        async (credentials, thunkAPI) => {
            console.log(credentials)
          try {
            const res = await axios.post('/users/signup', credentials);
            
            // After successful registration, add the token to the HTTP header
            setAuthHeader(res.data.token);
            // console.log(res.data.token)
            return res.data;
            // console.log(res)
          } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
          }
        }
      );