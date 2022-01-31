import React, { useCallback, useState } from 'react';
import { Select, Box, CheckIcon, Center, Heading, Icon, HStack, Text } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import fetchVendorListFromDB from '../../../controller/fetchVendorListFromDB';
import { useEffect } from 'react';
import fetchPaymentStatusFromDB from '../../../controller/fetchPaymentFromDB';
import { MaterialIcons } from "@expo/vector-icons"
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { TouchableOpacity } from 'react-native-gesture-handler';
import XLSX from 'xlsx';

const Vendor = () => {
    const leadDetails = useSelector(state => state.leads.leadList);
    const vendorLists = useSelector(state => state.vendors.vendorList);
    const paymentStatus = useSelector(state => state.paymentStatus.paymentStatus);
    const [vendorData, setVendorData] = useState({});
    const [finalExportableData, setFinalExportableData] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        let flag = true;
        if (flag) {
            fetchVendorListFromDB(dispatch);
            fetchPaymentStatusFromDB(dispatch);
            flag = !flag;
        }
        return () => {
            flag = !flag;
        };
    }, []);


    useEffect(() => {
        var flag = true;
        if (flag)
            onSelect()
        return () => {
            flag = !flag;
        };
    }, [vendorData]);

    const addfinalExportableData = (paymentDetailsForFilteredLead, venorName, vendorID) => {
        setFinalExportableData(() => {
            return (
                {
                    "Vendor Details": [{
                        "Vendor Name": venorName,
                        "Vendor ID": vendorID,
                    }],
                    "Payment Details": [...paymentDetailsForFilteredLead]

                }
            )
        })
    }

    const onSelect = useCallback(() => {
        let paymentDetailsForFilteredLead = [];

        let venorName = '';
        let vendorID = '';
        const selectedVendor = vendorLists.filter(vendor => vendor.id === vendorData);
        if (selectedVendor.length > 0) {
            venorName = selectedVendor[0].vendor_Name;
            vendorID = selectedVendor[0].id;
            const leadDataForSelectedVendor = leadDetails.filter(lead => lead.vendor_Id === vendorData);
            leadDataForSelectedVendor.forEach(lead => {
                paymentStatus.forEach(payment => {
                    if (lead.payment_id === payment.id) {
                        var paymentOBJ = {
                            "Total Fees": payment.total_fees,
                            "Trainer Charges": payment.trainer_charges,
                            "Paid Amount": payment.paid_amount,
                            "Status": payment.status,
                            "Confirmation Number": payment.confirmation_number,
                            "Due Amount": payment.due_amount,
                            "Lead Name": lead.name,
                            "Lead Email": lead.email,
                            "Lead Phone Number": lead.phone
                        }

                        paymentDetailsForFilteredLead.push(paymentOBJ);

                    }
                });
            });

            addfinalExportableData(paymentDetailsForFilteredLead, venorName, vendorID);
        }
    }, [vendorData])

    const onDownload = async (data) => {
        try {
            var ws = XLSX.utils.json_to_sheet(data);
            var wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "skilltech_vendor_details");
            const wbout = XLSX.write(wb, {
                type: 'base64',
                bookType: "xlsx"
            });
            const uri = FileSystem.cacheDirectory + 'skilltech_vendor_details.xlsx';

            await FileSystem.writeAsStringAsync(uri, wbout, {
                encoding: FileSystem.EncodingType.Base64
            });
            await Sharing.shareAsync(uri, {
                mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                dialogTitle: 'Vendor details',
                UTI: 'com.microsoft.excel.xlsx'
            });
        } catch (error) {
            console.log(error);
        }
    }

    const DownloadSection = () => {
        if (!isEmpty(finalExportableData) &&
            (finalExportableData['Payment Details']?.length > 0 || finalExportableData['Lead Details']?.length > 0)) {
            //finalExportableData['Payment Details'],
            //finalExportableData['Lead Details'],
            //finalExportableData['Vendor Details']
            const data = [
                ...finalExportableData['Vendor Details'],
                ...finalExportableData['Payment Details']
            ]
            console.log(data);
            return (
                <Center mt={5}>
                    <Heading size={'md'} color={'red.700'}>Download Vendor Details</Heading>
                    <Text>-- Your excel file is ready --</Text>
                    <TouchableOpacity onPress={() => onDownload(data)} >
                        <HStack alignItems={'center'} space={1} >
                            <Icon
                                as={<MaterialIcons name="save" />}
                                size={'sm'}
                                color="blue.800"
                            />
                            <Text color={'blue.800'} fontSize={'md'} my={3} >Download Now</Text>
                        </HStack>
                    </TouchableOpacity>
                </Center>
            )
        }
        else {
            return <></>;
        }

    }


    return (
        <Center mt={5} mb={2}>
            <Box w="100%" maxW="350">
                <HStack space={2} flexDir={'row'} alignItems={'center'} my={2} >
                    <Icon
                        as={<MaterialIcons name="person" />}
                        size={'sm'}
                        color="muted.600"
                    />
                    <Heading size={'sm'}>Choose Vendor  </Heading>
                </HStack>
                <Select selectedValue={vendorData} minWidth="200" accessibilityLabel="Choose Vendor" placeholder="Choose Vendor"
                    _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => {
                        setVendorData(itemValue)
                    }}
                    borderColor={"muted.600"}
                >
                    {
                        vendorLists.map((vendor, index) => {
                            const name = vendor.vendor_Name;
                            if (vendor.hasOwnProperty('id')) {
                                return (
                                    <Select.Item label={name} value={vendor.id} key={vendor.id} />
                                )
                            } else return <Select.Item label={name} value={''} />;
                        })
                    }
                </Select>
            </Box>
            <DownloadSection />
        </Center>
    );
}
export default Vendor;

function isEmpty(obj) {
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }

    return JSON.stringify(obj) === JSON.stringify({});
}