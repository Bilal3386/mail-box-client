import { createSlice } from "@reduxjs/toolkit";

const composeSlice = createSlice({
    name: 'compose',
    initialState: {cleanEmail: '', inboxEmail: [], sentMail: []},
    reducers: {
        // composeNewMail(state, action)
        // {
        //     // state.cleanEmail = action.payload.cleanEmail
        //     // console.log(action.payload.newItem)
        //     // console.log("hello")
        //     state.inboxEmail = [...state.inboxEmail, action.payload]
        // },
        fetchSentMail(state, action) {
            state.sentMail = action.payload
        },
        fetchEmail (state, action) {
            state.inboxEmail = action.payload
        },
        onRead(state, action)
        {
            const id = action.payload.id
            console.log(id)
            const existing = [...state.inboxEmail]
            existing.forEach((ele, ind) => {
                if(ele.id === id)
                {
                    existing[ind].read = 'blue'
                    
                }
            })
            state.inboxEmail = existing
            console.log(existing)
        },
        onInboxMessageDelete(state, action) {
            const id = action.payload
            const newMail = [...state.inboxEmail]
            state.inboxEmail = newMail.filter((ele) => ele.id !== id)
        }
    }
})
export const composeActions = composeSlice.actions 
export default composeSlice.reducer