import { API, graphqlOperation } from 'aws-amplify';
import { listExamStatuses } from '../src/graphql/queries';
export default fetchExamStatus = async () => {
    try {
        const examStatus = await API.graphql(graphqlOperation(listExamStatuses));
        return (examStatus.data.listExamStatuses.items);
    } catch (error) {
        console.log(error);
    }
}