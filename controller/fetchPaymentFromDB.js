import { createPaymentStatus } from "../store/reducers/paymentStatus";
import getPaymentStatus from "./getPaymentStatus";

const fetchPaymentStatusFromDB = async (dispatch) => {
    const paymentStatus = await getPaymentStatus()
    dispatch(createPaymentStatus(paymentStatus))
}

export default fetchPaymentStatusFromDB;