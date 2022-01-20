import React from 'react';
import { Input, Icon, Text, Center, Pressable } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
const HandleLogin = ({ loginHandler, setLoginHandler }) => {

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
                placeholder="Username"
                borderColor={'muted.600'}
                onChangeText={(val) => {
                    setLoginHandler({ ...loginHandler, username: val })
                }}
                value={loginHandler.username}
            />
            <Input
                my={3}
                type={show ? "text" : "password"}
                w={{
                    base: "100%",
                    md: "25%",
                }}
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
                InputLeftElement={
                    <Icon
                        as={<MaterialIcons name="lock" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                    />
                }
                value={loginHandler.password}
                placeholder="Password"
                borderColor={'muted.600'}
                onChangeText={(val) => {
                    setLoginHandler({ ...loginHandler, password: val })
                }}
            />
        </>
    );
}
export default HandleLogin;