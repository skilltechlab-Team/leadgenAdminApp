import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listExecutiveMasters } from '../src/graphql/queries';
const fetchExecutive = async () => {
    try {
        const executiveOBJ = await API.graphql(graphqlOperation(listExecutiveMasters));
        return (executiveOBJ.data.listExecutiveMasters.items);
    } catch (error) {
        console.log(error);
    }
}

export default fetchExecutive;