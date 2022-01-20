import React from 'react';
import { Box, FlatList, Heading, HStack, Spacer, VStack } from 'native-base';
import RenderExamList from './RenderExamList';

const ExamCardView = ({ examDetails, fetchExamList, setStatus }) => {
    //const colorArray = ["cyan.100", "cyan.200", "cyan.300", "cyan.400", "cyan.500"]

    return (
        <Box>
            <HStack justifyContent={'space-around'} py={2} >
                <VStack w={'40%'} alignItems={'center'} justifyContent={'center'}>
                    <Heading size={'sm'}>Exam Name</Heading>
                </VStack>
                <VStack w={'40%'} alignItems={'center'} justifyContent={'center'}>
                    <Heading textAlign={'center'} size={'sm'}>Exam Code</Heading>
                </VStack >
                <VStack w={'20%'}><Spacer /></VStack>
            </HStack>
            <FlatList
                data={examDetails}
                renderItem={({ item, index }) => (<RenderExamList item={item} fetchExamList={fetchExamList} setStatus={setStatus} />)}
                keyExtractor={(item) => item.id}
            />
        </Box>
    );
}
export default ExamCardView;