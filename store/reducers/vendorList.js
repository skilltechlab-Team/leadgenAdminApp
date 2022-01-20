import { createSlice } from '@reduxjs/toolkit'

import produce from "immer"
const initialState = {
    vendorList: []
}

export const vendorListHandler = createSlice({
    name: 'vendorListHandler',
    initialState,
    reducers: {
        createVendorList: (state, action) => {

            const nextState = produce(state.vendorList, draftState => {
                draftState = [...action.payload]
                return draftState;
            })
            state.vendorList = nextState
        },
    },
})

// Action creators are generated for each case reducer function
export const { createVendorList } = vendorListHandler.actions

export default vendorListHandler.reducer