import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authentication',
    initialState: {token: ''},
    reducers: {

    }
})

export const authActions = authSlice.actions
export default authSlice.reducer