import { API } from "aws-amplify";
import * as mutations from '../src/graphql/mutations'
export default async function deleteVendorRecord(id, version, toast) {
    try {
        const deleteDetails = {
            id: id,
            _version: version
        };
        const vendorOBJ = await API.graphql({ query: mutations.deleteVendorMaster, variables: { input: deleteDetails } });
        return vendorOBJ;
    } catch (error) {
        console.log(error);
        const err = JSON.stringify(error)
        toast.show({
            description: err,
        })
        return -1;
    }
}