import { API, graphqlOperation } from 'aws-amplify';
import { listExamMasters, listExecutiveMasters } from '../src/graphql/queries';
export default fetchAllExam = async () => {
    try {
        const examDetails = await API.graphql(graphqlOperation(listExamMasters));
        return (examDetails.data.listExamMasters.items);
    } catch (error) {
        console.log(error);
    }
}