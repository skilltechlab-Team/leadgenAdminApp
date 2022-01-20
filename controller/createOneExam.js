import { API } from "aws-amplify";
import * as mutations from '../src/graphql/mutations'
export default async function createOneExam(examDetails, toast) {
    try {
        const examOBJ = await API.graphql({ query: mutations.createExamMaster, variables: { input: examDetails } });
        return examOBJ;
    } catch (error) {
        console.log(error);
        const err = JSON.stringify(error)
        toast.show({
            description: err,
        })
        return -1;
    }
}