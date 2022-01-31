import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import UserState from "./reducers/UserState";
import ListOfExecutives from "./reducers/ListOfExecutives";
import vendorList from "./reducers/vendorList";
import examList from "./reducers/examList";
import leadList from "./reducers/leadList";
import paymentStatus from "./reducers/paymentStatus";
const composeEnhancers = composeWithDevTools({
  trace: true
});
const rootReducer = combineReducers({
  auth: UserState,
  executives: ListOfExecutives,
  vendors: vendorList,
  exams: examList,
  leads: leadList,
  paymentStatus: paymentStatus
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})
export default store;
