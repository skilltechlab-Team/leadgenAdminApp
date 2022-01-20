import React from 'react';
import { Box, Text } from 'native-base';
import ExamInput from './ExamInput';
const ExamSplash = ({ fetchExamList, setStatus }) => {
    return (
        <Box m={5}>
            <Box py={10} style={{ elevation: 5 }} borderRadius={10} justifyContent={'center'} alignItems={'center'} bg={"light.100"} >
                <ExamInput fetchExamList={fetchExamList} setStatus={setStatus} />
            </Box>
        </Box>
    );
}
export default ExamSplash;