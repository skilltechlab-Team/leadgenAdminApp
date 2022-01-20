import React from 'react';
import { Box, FlatList, Heading, HStack, Spacer, Text, VStack } from 'native-base';
import RenderVendorList from './RenderVendorList';
const VendorCardView = ({ setStatus, vendors, fetchVendorList }) => {
    return (
        <Box>
            <HStack justifyContent={'space-around'} py={2} >
                <VStack w={'40%'} alignItems={'center'} justifyContent={'center'}>
                    <Heading size={'sm'}>Vendor Name</Heading>
                </VStack>
                <VStack w={'40%'} alignItems={'center'} justifyContent={'center'}>
                    <Heading textAlign={'center'} size={'sm'}>Vendor Code</Heading>
                </VStack >
                <VStack w={'20%'}><Spacer /></VStack>
            </HStack>
            <FlatList
                data={vendors}
                renderItem={({ item, index }) => (<RenderVendorList item={item} fetchVendorList={fetchVendorList} setStatus={setStatus} />)}
                keyExtractor={(item) => item.id}
            />
        </Box>
    );
}
export default VendorCardView;