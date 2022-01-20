import React from 'react';
import { Box, Icon, Input, Text } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons"
import SubmitButton from './SubmitButton';
import { useState } from 'react';
import LoadingButton from './LoadingButton';
import createOneVendor from '../controller/createOneVendor';
import fetchVendor from '../controller/fetchVendor';
import { useDispatch } from 'react-redux';
import { createVendorList } from '../store/reducers/vendorList';
import { Alert } from 'react-native';
import { useToast } from 'native-base';
import getStatus, { statusNames } from './Satus';
const VendorInput = ({ setStatus, fetchVendorList }) => {
    const [isUploading, setIsUploading] = useState(false);
    const [vendor, setVendor] = useState({ name: "", code: "" });
    const toast = useToast()
    async function submitVendor() {
        setIsUploading(true)
        const UploadingStatus = await createOneVendor(vendor);
        console.log(UploadingStatus);
        if (UploadingStatus !== -1) {
            toast.show({
                description: "Vendor Created Successfully!",
            })
            setIsUploading(false)
            setVendor({ name: "", code: "" })
            fetchVendorList()
            setStatus(getStatus(statusNames.success, "Vendor Created Successfully"))
        } else {
            setStatus(getStatus(statusNames.error, "Failed due to fatal error, on DB"))

        }
    }
    return (
        <>
            <Input
                my={3}
                w={{
                    base: "80%",
                    md: "25%",
                }}
                InputLeftElement={
                    <Icon
                        as={<MaterialIcons name="shopping-bag" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                    />
                }
                placeholder="Vendor Name"
                borderColor={'muted.600'}
                onChangeText={(val) => {
                    setVendor({ ...vendor, name: val })
                }}
                value={vendor.name}
                onBlur={() => {
                    setVendor({ ...vendor, name: vendor.name.trim() })
                }}
            />
            <Input
                my={3}
                w={{
                    base: "80%",
                    md: "25%",
                }}
                InputLeftElement={
                    <Icon
                        as={<MaterialIcons name="code" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                    />
                }
                placeholder="Vendor Code"
                borderColor={'muted.600'}
                onChangeText={(val) => {
                    setVendor({ ...vendor, code: val })
                }}
                value={vendor.code}
                onBlur={() => {
                    setVendor({ ...vendor, code: vendor.code.trim() })
                }}
            />
            <Box w={"60%"} mt={-5} >
                {
                    !isUploading ? <SubmitButton btnText={"SUBMIT"} onSubmit={submitVendor} /> : <LoadingButton />
                }
            </Box>
        </>
    );
}
export default VendorInput;