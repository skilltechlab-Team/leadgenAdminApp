import React, { useEffect, useState } from 'react';
import { Input, Icon, Text, CheckIcon, Button, Box, ScrollView, Image, VStack, Select, Pressable } from "native-base"
import getStatus, { statusNames } from '../../components/Satus';
import AlertCreator from '../../components/AlertCreator';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createExecutiveMaster, updateExecutiveMaster } from '../graphql/mutations';
import ExecutiveInput from '../../components/ExecutiveInput';
import { createExecutiveList } from '../../store/reducers/ListOfExecutives';
import fetchExecutive from '../../controller/fetchExecutive';
import { useDispatch, useSelector } from 'react-redux';
const DashBoard = () => {

    const [executiveData, setExecutiveData] = useState({ gender: "male", name: "", email: "", phone: "", username: "", password: "" });
    const dispatch = useDispatch();
    const [isUploading, setIsUploading] = useState(false);

    const [status, setStatus] = useState({});
    useEffect(() => {
        getExecutiveList()
    }, []);

    async function getExecutiveList() {
        const executiveList = await fetchExecutive();
        dispatch(createExecutiveList(executiveList));
    }
    const userList = useSelector(state => state.executives.executivelist);

    function isUserExist(username, email) {
        if (userList.length > 0) {
            const isUser = userList.filter(user => user.username === username || user.email === email);
            return (isUser.length > 0 ? true : false)
        } else return false;
    }
    async function signUp() {
        setIsUploading(true)
        try {
            const userData = {
                name: executiveData.name,
                phone: executiveData.phone,
                email: executiveData.email,
                status: "inactive",
                username: executiveData.username,
                gender: executiveData.gender
            }
            if (!isUserExist(userData.username, userData.email)) {
                const userOBJ = await API.graphql(graphqlOperation(createExecutiveMaster, { input: userData }));
                const createdUserID = userOBJ.data.createExecutiveMaster.id;
                if (createdUserID) {
                    const { gender, name, email, phone, username, password } = executiveData;
                    const cognitoUserDetails = await Auth.signUp({
                        username,
                        password,
                        attributes: {
                            email,
                            'custom:isAdmin': 'false',
                            'custom:name': name,
                            'custom:gender': gender,
                            'custom:phone': phone,
                            'custom:userID': createdUserID
                        }
                    });
                    if (cognitoUserDetails) {
                        const userDataforUpdate = {
                            id: createdUserID,
                            status: "active",
                            _version: userOBJ.data.createExecutiveMaster._version
                        }
                        const updateDetails = await API.graphql(graphqlOperation(updateExecutiveMaster, { input: userDataforUpdate }));
                        if (updateDetails) {
                            setIsUploading(false)
                            setStatus(getStatus(statusNames.success, "Verification Email Sent to User successfully!"));
                            setExecutiveData({ gender: "male", name: "", email: "", phone: "", username: "", password: "" })
                            setTimeout(() => {
                                setStatus({})
                            }, 10000);
                        } else throw 'Fatal Error 404! Contact developer'
                    }
                } else throw 'No UserID Created! Aborting Process'
            } else throw 'Username or Email already exist!'

        } catch (error) {
            setIsUploading(false)
            if (error.message) {
                setStatus(getStatus(statusNames.error, error.message))
                setTimeout(() => {
                    setStatus({})
                }, 3000);
            } else {
                setStatus(getStatus(statusNames.error, error))
                setTimeout(() => {
                    setStatus({})
                }, 3000);
            }
        }
    }

    return (
        <ScrollView flexGrow={1} bg={"#fff"} >
            <AlertCreator status={status} setStatus={setStatus} />
            <ExecutiveInput
                executiveData={executiveData}
                setExecutiveData={setExecutiveData}
                isUploading={isUploading}
                setIsUploading={setIsUploading}
                submitFN={signUp}
            />
        </ScrollView>
    );
}
export default DashBoard;
