import { createSlice } from '@reduxjs/toolkit'

import produce from "immer"
const initialState = {
    auth: []
}

export const userAuth = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        createUserAuth: (state, action) => {

            const nextState = produce(state.adminData, draftState => {
                draftState = [...action.payload]
                return draftState;
            })
            state.auth = nextState
        },
    },
})

// Action creators are generated for each case reducer function
export const { createUserAuth } = userAuth.actions

export default userAuth.reducer