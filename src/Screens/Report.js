import React, { useState } from 'react';
import { Box, HStack, Text, VStack, Icon, ScrollView } from 'native-base';
import { MaterialIcons, FontAwesome, Fontisto } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler';
import Exam from './ReportScreen/Exam';
const Report = () => {
    const [visibleView, setVisibleView] = useState('exam');
    return (
        <Box flex={1} bg={'light.100'} >
            <Box px={3} w={'100%'} my={3}  >
                <HStack justifyContent={'space-around'} >
                    <TouchableOpacity onPress={() => setVisibleView('exam')} >
                        <VStack>
                            <Box h={100} w={100} borderWidth={1} borderColor={'rose.400'} bg={'indigo.500'} borderRadius={5} style={{ elevation: 25 }} justifyContent={'center'} alignItems={'center'} >
                                <Icon
                                    as={<FontAwesome name="newspaper-o" />}
                                    size={'lg'}
                                    color="#fff"
                                />
                                <Text textAlign={'center'} fontWeight={'bold'} color={'#fff'} >Exam</Text>
                            </Box>
                        </VStack>
                    </TouchableOpacity>
                    <VStack>
                        <TouchableOpacity onPress={() => setVisibleView('vendor')}>
                            <VStack>
                                <Box h={100} w={100} borderWidth={1} borderColor={'rose.400'} bg={'cyan.700'} borderRadius={5} style={{ elevation: 25 }} justifyContent={'center'} alignItems={'center'} >
                                    <Icon
                                        as={<Fontisto name="shopping-bag" />}
                                        size={'lg'}
                                        color="#fff"
                                    />
                                    <Text textAlign={'center'} fontWeight={'bold'} color={'#fff'} >Vendor</Text>
                                </Box>
                            </VStack>
                        </TouchableOpacity>
                    </VStack>
                    <VStack>
                        <TouchableOpacity onPress={() => setVisibleView('day')} >
                            <VStack>
                                <Box h={100} w={100} borderWidth={1} borderColor={'rose.400'} bg={'rose.500'} borderRadius={5} style={{ elevation: 25 }} justifyContent={'center'} alignItems={'center'} >
                                    <Icon
                                        as={<Fontisto name="calendar" />}
                                        size={'lg'}
                                        color="#fff"
                                    />
                                    <Text textAlign={'center'} fontWeight={'bold'} color={'#fff'} >Day</Text>
                                </Box>
                            </VStack>
                        </TouchableOpacity>
                    </VStack>
                </HStack>
            </Box>
            {/*  Display area starts below   */}
            <ScrollView flexGrow={1} >
                {
                    visibleView === 'exam' && <Exam />
                }
            </ScrollView>
        </Box>
    );
}
export default Report;