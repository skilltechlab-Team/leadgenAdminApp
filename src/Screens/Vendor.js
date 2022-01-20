import React, { useState, useEffect } from 'react';
import { Box, Heading, HStack, Icon, Pressable, VStack } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { createVendorList } from '../../store/reducers/vendorList';
import fetchVendor from '../../controller/fetchVendor';
import { Keyboard } from 'react-native';
import CreateVendor from '../../components/CreateVendor';
import AlertCreator from '../../components/AlertCreator';
import VendorInput from '../../components/VendorInput';
import { MaterialIcons } from "@expo/vector-icons"
import VendorCardView from '../../components/VendorCardView';
const Vendor = () => {
    const vendorsData = useSelector(state => state.vendors.vendorList);
    const vendors = vendorsData.filter((v) => v._deleted !== true)
    const [status, setStatus] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        fetchVendorList()
    }, [])
    const fetchVendorList = async () => {
        const vendorList = await fetchVendor()
        dispatch(createVendorList(vendorList))
    }
    return (
        vendors.length === 0 ?
            <Box flex={1} bg={"light.200"} justifyContent={'center'} >
                <AlertCreator status={status} setStatus={setStatus} />
                <Pressable onPress={Keyboard.dismiss} >
                    <Box>
                        <CreateVendor fetchVendorList={fetchVendorList} setStatus={setStatus} />
                    </Box>
                </Pressable>
            </Box>
            :
            <Box>
                <AlertCreator status={status} setStatus={setStatus} />
                <Box m={3} >
                    <Pressable onPress={Keyboard.dismiss} >
                        <Box borderWidth={1 / 2} borderColor={"muted.400"} >
                            <Box pb={5} alignItems={'center'}>
                                <VendorInput fetchVendorList={fetchVendorList} setStatus={setStatus} />
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
                                    Vendor Lists
                                </Heading>
                            </VStack>
                        </HStack>
                    </Box>
                </Box>
                <Box>
                    <Box pl={2}>
                        <VendorCardView vendors={vendors} fetchVendorList={fetchVendorList} setStatus={setStatus} />
                    </Box>
                </Box>
            </Box>
    );
}
export default Vendor;