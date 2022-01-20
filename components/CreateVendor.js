import React from 'react';
import { Box } from 'native-base';
import VendorInput from './VendorInput';
/**
 * 
 * @param {*} param0 
 * @returns Vendor component with shadow effect
 */
const CreateVendor = ({ setStatus, fetchVendorList }) => {
    return (
        <Box m={5}>
            <Box py={10} style={{ elevation: 5 }} borderRadius={10} justifyContent={'center'} alignItems={'center'} bg={"light.100"} >
                <VendorInput setStatus={setStatus} fetchVendorList={fetchVendorList} />
            </Box>
        </Box>
    );
}
export default CreateVendor;