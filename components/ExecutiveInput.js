import React from 'react';
import { Input, Icon, Text, CheckIcon, Button, Box, ScrollView, Image, VStack, Select, Pressable, HStack } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons"
import { Alert, Dimensions } from 'react-native';
import Girl from './Girl'
import Boy from './Boy';
import LoadingButton from './LoadingButton';
import SubmitButton from './SubmitButton';
import { disableExecutive } from '../controller/fetchExecutive';
const ExecutiveInput = ({ executiveData, setExecutiveData, isUploading, submitFN, btnText = "ADD EXECUTIVE", isDisabled = false, version = 0, navigation = {} }) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const onDisablePress = async () => {

        const data = {
            id: executiveData.id,
            _version: version,
            status: 'inactive'
        }
        const statusCode = await disableExecutive(data);
        if (statusCode) {
            navigation.goBack()
        } else {
            Alert.alert("User not disabled, Err: 502");
        }
    }
    return (
        <Box h={Dimensions.get('window').height - 90} justifyContent={'center'} alignItems={'center'} >
            <VStack my={5} ml={-2} >
                {
                    executiveData.gender === "male" ? <Boy /> : <Girl />
                }
            </VStack>

            <Input
                my={3}
                w={{
                    base: "70%",
                    md: "25%",
                }}
                InputLeftElement={
                    <Icon
                        as={<MaterialIcons name="person" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                    />
                }
                placeholder="Name"
                borderColor={'muted.600'}
                onChangeText={(val) => {
                    setExecutiveData({ ...executiveData, name: val })
                }}
                value={executiveData.name}
                onBlur={() => {
                    setExecutiveData({ ...executiveData, name: executiveData.name.trim() })
                }}
            />
            <VStack alignItems="center" space={4} w={"70%"} >
                <Select
                    minWidth="58%"
                    _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />,
                    }}
                    mt={1}
                    borderColor={'muted.600'}
                    onValueChange={(itemValue) => {
                        setExecutiveData({ ...executiveData, gender: itemValue })
                    }}
                    selectedValue={executiveData.gender}
                >
                    <Select.Item label="Male" value="male" />
                    <Select.Item label="Female" value="female" />
                </Select>
            </VStack>
            <Input
                my={3}
                w={{
                    base: "70%",
                    md: "25%",
                }}
                InputLeftElement={
                    <Icon
                        as={<MaterialIcons name="phone-android" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                    />
                }
                keyboardType='phone-pad'
                placeholder="Phone Number"
                borderColor={'muted.600'}
                onChangeText={(val) => {
                    setExecutiveData({ ...executiveData, phone: val })
                }}
                value={executiveData.phone}
                onBlur={() => {
                    setExecutiveData({ ...executiveData, phone: executiveData.phone.trim() })
                }}
            />
            <Input
                my={3}
                w={{
                    base: "70%",
                    md: "25%",
                }}
                InputLeftElement={
                    <Icon
                        as={<MaterialIcons name="email" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                    />
                }
                keyboardType='email-address'
                autoCapitalize='none'
                placeholder="Email Address"
                borderColor={'muted.600'}
                onChangeText={(val) => {
                    setExecutiveData({ ...executiveData, email: val })
                }}
                value={executiveData.email}
                onBlur={() => {
                    setExecutiveData({ ...executiveData, email: executiveData.email.trim() })
                }}
            />
            {
                !isDisabled ? <>
                    <Input
                        my={3}
                        w={{
                            base: "70%",
                            md: "25%",
                        }}
                        InputLeftElement={
                            <Icon
                                as={<MaterialIcons name="person-add" />}
                                size={5}
                                ml="2"
                                color="muted.400"
                            />
                        }
                        placeholder="Username"
                        borderColor={'muted.600'}
                        onChangeText={(val) => {
                            setExecutiveData({ ...executiveData, username: val })
                        }}
                        value={executiveData.username}
                        onBlur={() => {
                            setExecutiveData({ ...executiveData, username: executiveData.username.trim().toLowerCase() })
                        }}

                    />
                    <Input
                        my={3}
                        type={show ? "text" : "password"}
                        w={{
                            base: "70%",
                            md: "25%",
                        }}

                        InputLeftElement={
                            <Icon
                                as={<MaterialIcons name="lock" />}
                                size={5}
                                ml="2"
                                color="muted.400"
                            />
                        }

                        InputRightElement={
                            <Pressable onPress={handleClick}>
                                {
                                    show ? <Icon
                                        as={<MaterialIcons name="visibility" />}
                                        size={5}
                                        mr="2"
                                        color="muted.400"
                                    /> :
                                        <Icon
                                            as={<MaterialIcons name="visibility-off" />}
                                            size={5}
                                            mr="2"
                                            color="muted.400"
                                        />
                                }
                            </Pressable>
                        }
                        value={executiveData.password}
                        placeholder="Password"
                        borderColor={'muted.600'}
                        onChangeText={(val) => {
                            setExecutiveData({ ...executiveData, password: val })
                        }}
                        onBlur={() => {
                            setExecutiveData({ ...executiveData, password: executiveData.password.trim() })
                        }}

                    />
                </> : <></>

            }

            {!isUploading ?
                <SubmitButton btnText={btnText} onSubmit={submitFN} />
                :
                <LoadingButton />
            }
            {
                isDisabled && <HStack w={'100%'} alignItems={'center'} justifyContent={'center'} my={5} ><Button onPress={onDisablePress} colorScheme="secondary" variant={'outline'} w={'50%'} >Disable Executive</Button></HStack>
            }
        </Box>
    );
}
export default ExecutiveInput;
