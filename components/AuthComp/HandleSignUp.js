import React from 'react';
import { Input, Icon, Text, Center, Pressable } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
const HandleSignUp = ({ signUpHandler, setsignUpHandler }) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
            <Input
                my={3}
                w={{
                    base: "100%",
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
                    setsignUpHandler({ ...signUpHandler, name: val })
                }}
                value={signUpHandler.name}
                onBlur={() => {
                    setsignUpHandler({ ...signUpHandler, name: signUpHandler.name.trim() })
                }}
            />
            <Input
                my={3}
                w={{
                    base: "100%",
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
                placeholder="Email"
                borderColor={'muted.600'}
                onChangeText={(val) => {
                    setsignUpHandler({ ...signUpHandler, email: val })
                }}
                onBlur={() => {
                    setsignUpHandler({ ...signUpHandler, email: signUpHandler.email.trim().toLowerCase() })
                }}
                value={signUpHandler.email}
            />
            <Input
                my={3}
                w={{
                    base: "100%",
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
                    setsignUpHandler({ ...signUpHandler, username: val })
                }}
                value={signUpHandler.username}
                onBlur={() => {
                    setsignUpHandler({ ...signUpHandler, username: signUpHandler.username.trim().toLowerCase() })
                }}
            />
            <Input
                my={3}
                type={show ? "text" : "password"}
                w={{
                    base: "100%",
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
                value={signUpHandler.password}
                placeholder="Password"
                borderColor={'muted.600'}
                onChangeText={(val) => {
                    setsignUpHandler({ ...signUpHandler, password: val })
                }}
                onBlur={() => {
                    setsignUpHandler({ ...signUpHandler, password: signUpHandler.password.trim() })
                }}
            />
        </>
    );
}
export default HandleSignUp;