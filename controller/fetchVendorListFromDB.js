import { createVendorList } from "../store/reducers/vendorList";
import fetchVendor from "./fetchVendor";

const fetchVendorListFromDB = async (dispatch) => {
    const vendorList = await fetchVendor()
    dispatch(createVendorList(vendorList))
}

export default fetchVendorListFromDB;