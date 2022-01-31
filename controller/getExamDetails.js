import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as queries from '../src/graphql/queries';
const getExamDetailsByID = async (id) => {
    try {
        const ex = await API.graphql(graphqlOperation(queries.getExamMaster, { id: id }));
        // return (vendorOBJ.data.listVendorMasters.items);
        return (ex.data.getExamMaster);
    } catch (error) {
        console.log(error);
    }
}

export default getExamDetailsByID;