import React, { useState } from 'react';
import { Box, Icon, ScrollView, HStack, VStack, Heading } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'
import { Pressable } from 'react-native';
import ExecutiveInput from '../../components/ExecutiveInput';
import AlertCreator from '../../components/AlertCreator';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import fetchExecutive from '../../controller/fetchExecutive';
import { useDispatch } from 'react-redux';
import * as mutations from '../graphql/mutations';
import { createExecutiveList } from '../../store/reducers/ListOfExecutives';
const EditExecutive = ({ route, navigation }) => {
    const { executive } = route.params;
    console.log(executive);
    let obj = {
        "id": executive.id,
        "email": executive.email,
        "gender": executive.gender,
        "name": executive.name,
        "password": executive.password,
        "phone": executive.phone,
        "username": executive.username,
    }
    const [executiveData, setExecutiveData] = useState(obj);
    const [isUploading, setIsUploading] = useState(false);
    const [status, setStatus] = useState({});
    const dispatch = useDispatch()
    async function updateUser() {
        setIsUploading(true)
        const { id, gender, name, email, phone } = executiveData;
        const execOBJ = { id, gender, name, email, phone, _version: executive._version }
        console.log(execOBJ);
        try {
            const updateStatus = await API.graphql({ query: mutations.updateExecutiveMaster, variables: { input: execOBJ } });

            if (updateStatus) {
                const executiveList = await fetchExecutive();
                dispatch(createExecutiveList(executiveList));
                setIsUploading(false)
                navigation.goBack()
            }
        } catch (error) {
            console.log(error);
            setIsUploading(false)
        }
    }

    return (
        <ScrollView flexGrow={1} >
            <Box pt={30} bg={'lightBlue.600'}>
                <HStack py={5} justifyContent={'space-between'} px={5} >
                    <VStack justifyContent={'center'} alignItems={'center'}>
                        <Heading size={'sm'} color={"#fff"} >{executiveData.name}</Heading>
                    </VStack>
                    <Pressable onPress={() => { navigation.goBack() }} >
                        <VStack borderWidth={1} borderColor={"#fff"} borderRadius={50} p={1 / 2} alignItems={'center'} justifyContent={'center'} >
                            <Icon
                                as={<MaterialIcons name="arrow-back" />}
                                size={5}
                                color="#fff"
                            />
                        </VStack>
                    </Pressable>
                </HStack>
            </Box>
            <AlertCreator status={status} setStatus={setStatus} />
            <Box>
                <ExecutiveInput
                    executiveData={executiveData}
                    setExecutiveData={setExecutiveData}
                    isUploading={isUploading}
                    setIsUploading={setIsUploading}
                    btnText="UPDATE EXECUTIVE"
                    isDisabled={true}
                    submitFN={updateUser}
                />
            </Box>
        </ScrollView>
    );
}
export default EditExecutive;