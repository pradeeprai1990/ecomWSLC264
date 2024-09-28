import { createSlice } from '@reduxjs/toolkit'
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const initialState = {
    token: getCookie('token') ?? '',
  }

export const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        tokenCreate:(oldState,data)=>{
            let {payload}=data
            oldState.token=payload.token;
            setCookie("token",payload.token)
        },
        logOut:(oldState)=>{
            oldState.token=''
            deleteCookie('token')
        }
    }
  })

  export const { tokenCreate, logOut } = loginSlice.actions

export default loginSlice.reducer