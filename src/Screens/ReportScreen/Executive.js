import React, { useState, useCallback, useEffect } from 'react';
import { Box, Center, CheckIcon, HStack, Select, Text, FlatList, VStack, Heading } from 'native-base';
import fetchExecutive from '../../../controller/fetchExecutive';
import { useSelector } from 'react-redux';
import store from '../../../store/store'
import { Dimensions } from 'react-native';
import LeadListTableView from '../../../components/LeadListTableView';
import getPaymentStatus from '../../../controller/getPaymentStatus';
import fetchExamStatus from '../../../controller/fetchExamStatus';
const Executive = () => {
    const windowHeight = Dimensions.get('window').height - ((40 / 100) * Dimensions.get('window').height);
    const [paymentStatus, setPaymentStatus] = useState([]);
    let [selectedExecutive, setSelectedExecutive] = React.useState("");
    const [executives, setExecutives] = useState([]);
    const [examStatus, setExamStatus] = useState([]);
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            addExecutiveInState();
            addPaymentStatus();
            addExamStatus();
        }
        return () => {
            isMounted = false;
        };
    }, []);
    const addPaymentStatus = useCallback(async () => {
        const pms = await getPaymentStatus();
        setPaymentStatus(pms)
    }, [paymentStatus])
    const addExecutiveInState = useCallback(async () => {
        let executiveArray = await fetchExecutive();
        setExecutives(executiveArray);
    }, [executives])
    const addExamStatus = useCallback(async () => {
        const exmStatus = await fetchExamStatus();
        setExamStatus(exmStatus)
    }, [examStatus])

    const [filteredLead, setFilteredLead] = useState([]);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && selectedExecutive !== "") {
            setFilteredLead(store.getState().leads.leadList.filter(l => l.executiveID === selectedExecutive));
        }
        return () => {
            isMounted = false;
        };
    }, [selectedExecutive]);



    return (
        <Box>
            <Center>
                <Box w={'90%'}>
                    <Text>Choose Executive</Text>
                    <Select selectedValue={selectedExecutive} borderColor={'#262626'} minWidth="200" accessibilityLabel="Select Executive" placeholder="Select Executive" _selectedItem={{
                        bg: "teal.400",
                        endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => setSelectedExecutive(itemValue)}>
                        {
                            executives.map((employee, index) => {
                                return (
                                    <Select.Item label={employee.name} value={employee.id} key={employee.id + index.toString()} />
                                )
                            })
                        }
                    </Select>
                </Box>
            </Center>
            <Box my={3} />
            {
                filteredLead.length > 0 &&
                <Box h={windowHeight} >
                    <HStack w={'100%'} justifyContent={'space-between'} my={2}>
                        <VStack w={'25%'} ><Heading textAlign={'center'} size={'sm'}>Date</Heading></VStack>
                        <VStack w={'25%'} ><Heading textAlign={'center'} size={'sm'}>Lead Name</Heading></VStack>
                        <VStack w={'25%'} ><Heading textAlign={'center'} size={'sm'}>E.Status</Heading></VStack>
                        <VStack w={'25%'} ><Heading textAlign={'center'} size={'sm'}>P.Status</Heading></VStack>
                    </HStack>
                    <FlatList data={filteredLead}
                        renderItem={({ item }) => {
                            const userExamDetails = examStatus.filter(es => es.leadMasterID === item.id);
                            const userPaymentDetails = paymentStatus.filter(pms => pms.leadMasterID === item.id);
                            return (<LeadListTableView payload={[item, userExamDetails, userPaymentDetails]} />)
                        }}
                        keyExtractor={item => item.id}
                    />
                </Box>
            }
        </Box>
    );
}
export default Executive;

