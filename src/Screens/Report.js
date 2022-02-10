import React, { useState } from 'react';
import { Box, HStack, Text, VStack, Icon, ScrollView } from 'native-base';
import { Ionicons, MaterialIcons, Fontisto, Feather } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler';
import Exam from './ReportScreen/Exam';
import Vendor from './ReportScreen/Vendor';
import Day from './ReportScreen/Day';
import Executive from './ReportScreen/Executive';
const Report = () => {
    const [visibleView, setVisibleView] = useState('exam');
    return (
        <Box flex={1} bg={'light.100'} >
            <Box w={'100%'} my={3}  >
                <HStack justifyContent={'space-between'} ml={-2}>
                    <TouchableOpacity onPress={() => setVisibleView('exam')} >
                        <VStack>
                            <Box h={100} w={100} justifyContent={'center'} alignItems={'center'} >
                                <Icon
                                    as={<Feather name="book-open" />}
                                    size={'lg'}
                                    color="cyan.700"
                                />
                                <Text textAlign={'center'} fontWeight={'bold'} color={'cyan.700'} >Exam</Text>
                            </Box>
                        </VStack>
                    </TouchableOpacity>
                    <VStack>
                        <TouchableOpacity onPress={() => setVisibleView('vendor')}>
                            <VStack>
                                <Box h={100} w={100} justifyContent={'center'} alignItems={'center'} >
                                    <Icon
                                        as={<Feather name="shopping-bag" />}
                                        size={'lg'}
                                        color="cyan.700"
                                    />
                                    <Text textAlign={'center'} fontWeight={'bold'} color={'cyan.700'} >Vendor</Text>
                                </Box>
                            </VStack>
                        </TouchableOpacity>
                    </VStack>
                    <VStack>
                        <TouchableOpacity onPress={() => setVisibleView('day')} >
                            <VStack>
                                <Box h={100} w={100} justifyContent={'center'} alignItems={'center'} >
                                    <Icon
                                        as={<Fontisto name="calendar" />}
                                        size={'lg'}
                                        color="cyan.700"
                                    />
                                    <Text textAlign={'center'} fontWeight={'bold'} color={'cyan.700'} >Day</Text>
                                </Box>
                            </VStack>
                        </TouchableOpacity>
                    </VStack>
                    <VStack>
                        <TouchableOpacity onPress={() => setVisibleView('executive')} >
                            <VStack>
                                <Box h={100} w={100} justifyContent={'center'} alignItems={'center'} >
                                    <Icon
                                        as={<MaterialIcons name="person-outline" />}
                                        size={'lg'}
                                        color="cyan.700"
                                    />
                                    <Text textAlign={'center'} fontWeight={'bold'} color={'cyan.700'} >Executive</Text>
                                </Box>
                            </VStack>
                        </TouchableOpacity>
                    </VStack>
                </HStack>
            </Box>
            {/*  Display area starts below   */}
            <Box flex={1} >

                {
                    visibleView === 'exam' && <Exam />

                }
                {
                    visibleView === 'vendor' && <Vendor />
                }
                {
                    visibleView === 'day' && <Day />
                }
                {
                    visibleView === 'executive' && <Executive />
                }
            </Box>
        </Box>
    );
}
export default Report;