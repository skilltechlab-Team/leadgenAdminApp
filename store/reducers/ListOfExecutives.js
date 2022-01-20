import { createSlice } from '@reduxjs/toolkit'

import produce from "immer"
const initialState = {
    executivelist: []
}

export const executiveListHandler = createSlice({
    name: 'executiveListHandler',
    initialState,
    reducers: {
        createExecutiveList: (state, action) => {

            const nextState = produce(state.executivelist, draftState => {
                draftState = [...action.payload]
                return draftState;
            })
            state.executivelist = nextState
        },
    },
})

// Action creators are generated for each case reducer function
export const { createExecutiveList } = executiveListHandler.actions

export default executiveListHandler.reducer