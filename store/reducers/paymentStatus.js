import { createSlice } from '@reduxjs/toolkit'

import produce from "immer"
const initialState = {
    paymentStatus: []
}

export const paymentStatusHandler = createSlice({
    name: 'paymentStatusHandler',
    initialState,
    reducers: {
        createPaymentStatus: (state, action) => {

            const nextState = produce(state.paymentStatus, draftState => {
                draftState = [...action.payload]
                return draftState;
            })
            state.paymentStatus = nextState
        },
    },
})

// Action creators are generated for each case reducer function
export const { createPaymentStatus } = paymentStatusHandler.actions

export default paymentStatusHandler.reducer