import { API, graphqlOperation } from 'aws-amplify';
import { listLeadMasters, listExamStatuses } from '../src/graphql/queries';
export const fetchLeadDetails = async () => {
    try {
        const leadDetails = await API.graphql(graphqlOperation(listLeadMasters));
        return (leadDetails.data.listLeadMasters.items);
    } catch (error) {
        console.log(error);
    }
}

export const fetchExamDetails = async () => {
    try {
        const examstatus = await API.graphql(graphqlOperation(listExamStatuses));
        return (examstatus.data.listExamStatuses.items);
    } catch (error) {
        console.log(error);
    }
}