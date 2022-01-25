import React from 'react';
import {
    Button,
    Modal,
    Text,
    Spinner,
    Box,
    Heading
} from 'native-base';
const FullScreenLoadingIndicator = ({ state, subtext }) => {
    const [showModal] = state;


    return (
        <Box flex={1} >
            <Modal bg={'rgba(52, 52, 52, 0.8)'} isOpen={showModal} >
                <Spinner size={'lg'} color={'#fff'} />
                <Heading size={'md'} fontWeight={'bold'} color={"#fff"} >{subtext}</Heading>
            </Modal>
        </Box >
    );
}
export default FullScreenLoadingIndicator;