import React, { useState, useEffect } from 'react';
import { Box, Text, ScrollView, Button, VStack, HStack } from 'native-base';
import HandleLogin from '../../components/AuthComp/HandleLogin';
import HandleSignUp from '../../components/AuthComp/HandleSignUp';
import { Dimensions } from 'react-native';
import UserLoading from '../../components/AuthComp/UserLoading';
import { useDispatch } from 'react-redux';
import { createUserAuth } from '../../store/reducers/UserState';
import { Auth } from 'aws-amplify';
import FullScreenLoadingIndicator from '../../components/FullScreenLoadingIndicator';
const Login = ({ navigation }) => {
    const [signUpToggle, setSignUpToggle] = useState(false);
    const [loginHandler, setLoginHandler] = React.useState({ username: '', password: '' });
    const [showModal, setShowModal] = React.useState(false);
    const [signUpHandler, setsignUpHandler] = React.useState({ username: '', password: '', name: '', email: '' });
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchData() {
            setShowModal(true);
            try {
                const user = await Auth.currentAuthenticatedUser()
                const JWTtoken = user.signInUserSession.accessToken
                if (user) {
                    setShowModal(!true);
                    setIsLoading(false)
                    dispatch(createUserAuth([JWTtoken]))
                    navigation.replace('DrawerRoutes', { screen: 'DashBoard' })
                }
            } catch (error) {
                setIsLoading(false)
                setShowModal(!true);
            }
        }
        fetchData();
    }, []);

    return (
        isLoading ? <UserLoading /> :
            <ScrollView flexGrow={1} keyboardDismissMode='on-drag' keyboardShouldPersistTaps='handled' backgroundColor={'light.200'} >
                <Box h={Dimensions.get('window').height} justifyContent={'center'} alignItems={'center'} >

                    <VStack>
                        {
                            'cognito' in error ? <Text color='warning.900' fontWeight={'bold'}>{error.cognito}</Text> : <></>

                        }
                        {
                            'confirmUser' in error ? <Text color='warning.900' fontWeight={'bold'}>{error.confirmUser}</Text> : <></>
                        }
                    </VStack>

                    <Box backgroundColor={'light.50'} borderWidth={1 / 2} borderRadius={10} borderColor={'muted.300'} p={3} my={5} style={{ elevation: 10 }} px={5} w={'80%'} justifyContent={'center'} alignItems={'center'} >

                        {
                            signUpToggle ?
                                <HandleSignUp signUpHandler={signUpHandler} setsignUpHandler={setsignUpHandler} /> :
                                <HandleLogin loginHandler={loginHandler} setLoginHandler={setLoginHandler} />
                        }
                    </Box>
                    <HStack space={2} px={5}>
                        <VStack w={'50%'} >
                            <Button colorScheme='primary' onPress={async () => {
                                setSignUpToggle(false)
                                setError({})
                                setShowModal(true);
                                try {
                                    const user = await Auth.signIn(loginHandler.username, loginHandler.password);
                                    const userAttr = await Auth.currentAuthenticatedUser();

                                    const token = user.signInUserSession.accessToken;
                                    console.log(token);
                                    if (token !== undefined) {
                                        setShowModal(!true);
                                        navigation.replace('DrawerRoutes', { screen: 'DashBoard' })
                                        dispatch(createUserAuth([token]))
                                    }

                                } catch (error) {
                                    // console.log('error signing in', error.message);
                                    setShowModal(!true);
                                    if (error.message)
                                        setError({ ...error, cognito: error.message })
                                    if (error.message === "User is not confirmed.") {
                                        try {
                                            await Auth.resendSignUp(loginHandler.username);
                                            //console.log('code resent successfully');
                                            setError({ ...error, confirmUser: 'Link resent successfully' })
                                            setTimeout(() => {
                                                setError({})
                                            }, 5000);
                                        } catch (err) {
                                            //console.log('error resending code: ', err);
                                            setError({ ...error, confirmUser: err.message })
                                        }
                                    }
                                }
                            }} >LOGIN</Button>
                        </VStack>
                        <VStack w={'50%'} >
                            <Button colorScheme='rose' onPress={async () => {
                                setSignUpToggle(true)
                                setError({})
                                setsignUpHandler({ username: '', password: '', name: '', email: '' })
                                if (signUpHandler.name.length > 3 && signUpHandler.username.length > 3 && signUpHandler.password.length > 3 && signUpHandler.email.length > 3) {
                                    const { username, name, email, password } = signUpHandler;
                                    //  console.log(username + "\n" + name + "\n" + "" + email + "\n" + password);
                                    try {

                                        const signUpResponse = await Auth.signUp({
                                            username,
                                            password,
                                            attributes: {
                                                email: email,
                                                //isAdmin: "true"
                                                'custom:isAdmin': 'true',
                                                'custom:userID': 'admin',
                                                'custom:name': name,
                                                'custom:gender': '',
                                                'custom:phone': ''
                                            },

                                        });
                                        if (!signUpResponse.userConfirmed) {
                                            setError({ ...error, confirmUser: "Please Confirm Your Email." })
                                        }
                                    } catch (err) {
                                        if (err.message)
                                            setError({ ...error, cognito: err.message })
                                    }
                                }
                            }} >SIGNUP</Button>
                        </VStack>
                    </HStack>

                </Box>
                <FullScreenLoadingIndicator state={[showModal]} subtext={"Signing in... Please wait..."} />
            </ScrollView >

    );
}
export default Login;


