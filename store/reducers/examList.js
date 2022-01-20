import { createSlice } from '@reduxjs/toolkit'

import produce from "immer"
const initialState = {
    examList: []
}

export const examListHandler = createSlice({
    name: 'examListHandler',
    initialState,
    reducers: {
        createExamList: (state, action) => {

            const nextState = produce(state.examList, draftState => {
                draftState = [...action.payload]
                return draftState;
            })
            state.examList = nextState
        },
    },
})

// Action creators are generated for each case reducer function
export const { createExamList } = examListHandler.actions

export default examListHandler.reducer