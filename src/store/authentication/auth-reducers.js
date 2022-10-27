import { createSlice } from "@reduxjs/toolkit";

const initialIdToken = localStorage.getItem('idToken')
const initialEmail = localStorage.getItem('email')
const initialAuthState = { token: initialIdToken, email: initialEmail, isLoggedIn: !!initialEmail};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
        //console.log(action.payload.idToken)
        state.token = action.payload.idToken
        state.email = action.payload.email
        localStorage.setItem('idToken', action.payload.idToken)
        localStorage.setItem('email', action.payload.email)
        state.isLoggedIn = !!action.payload.idToken
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
