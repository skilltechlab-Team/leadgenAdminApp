import { API } from "aws-amplify";
import * as mutations from '../src/graphql/mutations'
export default async function deleteexamRecord(id, version, toast) {
    try {
        const deleteDetails = {
            id: id,
            _version: version
        };
        const examOBJ = await API.graphql({ query: mutations.deleteExamMaster, variables: { input: deleteDetails } });
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