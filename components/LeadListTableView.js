import React, { useCallback, useState, useEffect } from 'react';
import { Box, Heading, HStack, Text, VStack } from 'native-base';
import date from 'date-and-time';
import store from '../store/store'
const LeadListTableView = ({ payload }) => {
    const [item, userExamDetails, userPaymentDetails] = payload;
    const pattern = date.compile('ddd, MMM DD YYYY');
    const createdAT = date.format(new Date(item.createdAt), pattern);
    const [examDetails, setExamDetails] = useState({
        id: 0,
        _version: 0,
        status: '',
        proposedDate: '',
        proposedTime: ''
    });
    const [paymentDetails, setPaymentDetails] = useState({
        id: 0,
        _version: 0,
        status: '',
        confirmation_number: ''
    });
    const addexamDetails = useCallback(() => {
        setExamDetails(state => ({
            ...state,
            id: userExamDetails[0].id,
            _version: userExamDetails[0]._version,
            status: userExamDetails[0].status,
            proposedDate: userExamDetails[0].proposedDate,
            proposedTime: userExamDetails[0].proposedTime
        }));
    }, [examDetails]);
    const addpaymentDetails = useCallback(() => {
        setPaymentDetails(state => ({
            ...state,
            id: userPaymentDetails[0].id,
            _version: userPaymentDetails[0]._version,
            status: userPaymentDetails[0].status,
            confirmation_number: userPaymentDetails[0].confirmation_number
        }))
    }, [paymentDetails]);
    useEffect(() => {
        addexamDetails();
        addpaymentDetails();

    }, []);
    return (
        <Box>
            {
                <HStack w={'100%'} justifyContent={'space-between'} p={2} borderBottomWidth={1} borderBottomColor={'#000'} >
                    <VStack w={'25%'}  ><Heading textAlign={'center'} size={'sm'} fontWeight={'normal'} fontSize={'sm'} flexWrap={'wrap'} >{createdAT}</Heading></VStack>
                    <VStack w={'25%'} ><Heading textAlign={'center'} size={'sm'} fontWeight={'normal'} fontSize={'sm'} flexWrap={'wrap'}>{item.name}</Heading></VStack>
                    <VStack w={'25%'} ><Heading textAlign={'center'} size={'sm'} fontWeight={'normal'} fontSize={'sm'} flexWrap={'wrap'}>{examDetails.status}</Heading></VStack>
                    <VStack w={'25%'} ><Heading textAlign={'center'} size={'sm'} fontWeight={'normal'} fontSize={'sm'} flexWrap={'wrap'}>{paymentDetails.status}</Heading></VStack>
                </HStack>
            }
        </Box>
    );
}
export default LeadListTableView;