import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listPaymentMasters } from '../src/graphql/queries';

const getPaymentStatus = async () => {
    try {
        const paymentStatusOBJ = await API.graphql(graphqlOperation(listPaymentMasters));
        return (paymentStatusOBJ.data.listPaymentMasters.items);
    } catch (error) {
        console.log(error);
    }
}

export default getPaymentStatus; 