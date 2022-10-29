import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authentication/auth-reducers";
import composeReducers from "./compose/compose-reducers";
const store = configureStore({
  reducer: {
    auth: authReducer,
    compose: composeReducers
  },
});
export default store;
