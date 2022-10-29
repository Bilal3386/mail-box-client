import { createSlice } from "@reduxjs/toolkit";

const composeSlice = createSlice({
    name: 'compose',
    initialState: {cleanEmail: ''},
    reducers: {
        cleanEmail(state, action)
        {
            state.cleanEmail = action.payload.userMail
        }
    }
})
export const composeActions = composeSlice.actions 
export default composeSlice.reducer