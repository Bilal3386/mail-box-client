import { createSlice } from "@reduxjs/toolkit";

const composeSlice = createSlice({
    name: 'compose',
    initialState: {cleanEmail: '', inboxEmail: []},
    reducers: {
        cleanEmail(state, action)
        {
            state.cleanEmail = action.payload.userMail
        },
        fetchEmail (state, action) {
            state.inboxEmail = action.payload
        }
    }
})
export const composeActions = composeSlice.actions 
export default composeSlice.reducer