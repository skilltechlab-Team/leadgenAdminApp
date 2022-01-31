import React, { useState } from 'react';
import { Heading, HStack, Icon, useToast, VStack } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native';
import ConfirmDelete from './ConfirmDelete';
const RenderVendorList = ({ item, fetchVendorList, setStatus }) => {
    const [showModal, setShowModal] = useState(false)
    const toast = useToast()

    return (
        <>
            <HStack justifyContent={'space-around'} borderBottomWidth={1 / 2} borderBottomColor={'muted.400'} py={2} >
                <VStack w={'40%'} alignItems={'center'} justifyContent={'center'} >
                    <Heading fontWeight={'medium'} textAlign={'center'} size={'sm'}>{item.vendor_Name}</Heading>
                </VStack>
                <VStack w={'40%'} alignItems={'center'} justifyContent={'center'} >
                    <Heading fontWeight={'medium'} textAlign={'center'} size={'sm'}>{item.vendor_Code}</Heading>
                </VStack>
                <ConfirmDelete showModal={showModal} setShowModal={setShowModal} id={item.id} version={item._version} toast={toast} fetchVendorList={fetchVendorList} setStatus={setStatus} />
                <VStack w={'20%'} >
                    <TouchableOpacity onPress={() => setShowModal(true)} >
                        <Icon
                            as={<MaterialIcons name="delete" />}
                            size={'sm'}
                            ml="2"
                            color="red.500"
                        />
                    </TouchableOpacity>
                </VStack>
            </HStack>
        </>
    );
}
export default RenderVendorList;