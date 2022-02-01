import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listExecutiveMasters } from '../src/graphql/queries';
import * as mutations from '../src/graphql/mutations';

const fetchExecutive = async () => {
    try {
        const executiveOBJ = await API.graphql(graphqlOperation(listExecutiveMasters));
        return (executiveOBJ.data.listExecutiveMasters.items);
    } catch (error) {
        console.log(error);
    }
}

export const disableExecutive = async (data) => {
    try {
        console.log(data);
        const status = await API.graphql({ query: mutations.updateExecutiveMaster, variables: { input: data } });
        if (status.data.updateExecutiveMaster.status === "inactive")
            return true;
    } catch (err) {
        console.log(err);
        return -1;
    }
}

export default fetchExecutive;