import { API } from "aws-amplify";
import * as mutations from '../src/graphql/mutations'
export default async function createOneVendor(vendor) {
    const vendorDetails = {
        vendor_Name: vendor.name,
        vendor_Code: vendor.code
    }
    try {
        const vendorOBJ = await API.graphql({ query: mutations.createVendorMaster, variables: { input: vendorDetails } });
        return vendorOBJ;
    } catch (error) {
        console.log(error);
        return -1;
    }
}