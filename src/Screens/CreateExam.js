import React, { useState, useEffect } from 'react';
import { Box, Divider, Heading, HStack, Icon, Pressable, ScrollView, Spacer, VStack } from 'native-base';
import ExamSplash from '../../components/ExamSplash';
import { Keyboard } from 'react-native';
import ExamInput from '../../components/ExamInput';
import fetchAllExam from '../../controller/fetchAllExam';
import { useDispatch, useSelector } from 'react-redux';
import { createExamList } from '../../store/reducers/examList';
import AlertCreator from '../../components/AlertCreator';
import ExamCardView from '../../components/ExamCardView';
import { MaterialIcons } from "@expo/vector-icons"
const CreateExam = () => {
    const examDetails = useSelector(state => state.exams.examList);
    const examListsData = examDetails.filter((exam) => exam._deleted !== true)

    const [status, setStatus] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        fetchExamList()
    }, []);
    const fetchExamList = async () => {
        const examList = await fetchAllExam()
        dispatch(createExamList(examList))
    }

    return (
        examListsData.length > 0 ?
            <Box>
                <AlertCreator status={status} setStatus={setStatus} />
                <Box m={3} >
                    <Pressable onPress={Keyboard.dismiss} >
                        <Box borderWidth={1 / 2} borderColor={"muted.400"} >
                            <Box pb={5} alignItems={'center'}>
                                <ExamInput fetchExamList={fetchExamList} setStatus={setStatus} />
                            </Box>
                        </Box>
                    </Pressable>
                </Box>
                <Box>
                    <Box py={2} >
                        <HStack space={1}>
                            <VStack>
                                <Icon
                                    as={<MaterialIcons name="library-add" />}
                                    size={'sm'}
                                    ml="2"
                                    color="muted.900"
                                />
                            </VStack>
                            <VStack>
                                <Heading color="muted.900" size={'sm'} >
                                    Exam Lists
                                </Heading>
                            </VStack>
                        </HStack>

                    </Box>
                </Box>
                <Box>
                    <Box pl={2} pb={10} h={"70%"} >
                        <ExamCardView examDetails={examListsData} fetchExamList={fetchExamList} setStatus={setStatus} />
                    </Box>

                </Box>
            </Box> :
            <>
                <AlertCreator status={status} setStatus={setStatus} />
                <Box flex={1} bg={"light.200"} justifyContent={'center'} >
                    <Pressable onPress={Keyboard.dismiss} >
                        <Box>
                            <ExamSplash fetchExamList={fetchExamList} setStatus={setStatus} />
                        </Box>
                    </Pressable>
                </Box>
            </>
    );
}
export default CreateExam;