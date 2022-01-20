import React from 'react';
import { Box, Heading, HStack, Icon, Pressable, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'
import Boy from './Boy';
import Girl from './Girl';
import { TouchableOpacity } from 'react-native';


const ExecutiveList = ({ executive, navigation }) => {
    const [imgSize, setImgSize] = React.useState("sm");
    const gender = executive.gender;
    const name = executive.name;
    const phone = executive.phone;
    const email = executive.email;

    return (
        <Box m={5} p={2} borderRadius={10} borderWidth={1 / 2} borderColor={'muted.600'} >
            <TouchableOpacity onPress={() => { navigation.navigate("EditExecutive", { executive }) }} >
                <HStack space={3} >
                    <VStack alignItems={'center'} justifyContent={'center'} >
                        <Box>
                            {
                                gender === 'male' ?
                                    <Boy size={imgSize} />
                                    :
                                    <Girl size={imgSize} />
                            }
                        </Box>
                    </VStack>
                    <VStack justifyContent={'center'} alignItems={'flex-start'} borderLeftWidth={1 / 2} borderLeftColor={'muted.400'} pl={5} w={'80%'} >
                        <HStack>
                            <VStack>
                                <Icon
                                    as={<MaterialIcons name="person" />}
                                    size={5}
                                    ml="2"
                                    color="muted.400"
                                />
                            </VStack>
                            <VStack><Heading fontWeight={'light'} size={'sm'}>{name}</Heading></VStack>
                        </HStack>
                        <HStack space={5} w={'100%'} my={2} >
                            <VStack w={"40%"} flexDir={'row'} >
                                <VStack>
                                    <Icon
                                        as={<MaterialIcons name="phone-android" />}
                                        size={5}
                                        ml="2"
                                        color="muted.400"
                                    />
                                </VStack>
                                <VStack ><Heading fontSize={'sm'} fontWeight={'light'} size={'sm'}>{phone}</Heading></VStack>
                            </VStack>
                        </HStack>
                        <HStack>
                            <VStack w={"80%"} flexDir={'row'} >
                                <VStack>
                                    <Icon
                                        as={<MaterialIcons name="email" />}
                                        size={5}
                                        ml="2"
                                        color="muted.400"
                                    />
                                </VStack>
                                <VStack ><Heading fontSize={'sm'} fontWeight={'light'} size={'sm'}>{email}</Heading></VStack>
                            </VStack>
                        </HStack>
                    </VStack>
                </HStack>
            </TouchableOpacity>
        </Box>
    );
}
export default ExecutiveList;