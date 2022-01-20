import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listVendorMasters } from '../src/graphql/queries';
const fetchVendor = async () => {
    try {
        const vendorOBJ = await API.graphql(graphqlOperation(listVendorMasters));
        return (vendorOBJ.data.listVendorMasters.items);
    } catch (error) {
        console.log(error);
    }
}

export default fetchVendor;