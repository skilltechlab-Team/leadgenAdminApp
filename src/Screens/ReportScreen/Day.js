import React, { useCallback, useEffect, useState } from 'react';
import { Box, Pressable, Input, HStack, FormControl, Icon, Button, Heading } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import useInput from '../../../hooks/UseDateTime';
import date_and_time from 'date-and-time';
import { useSelector } from 'react-redux';
import fetchExamStatus from '../../../controller/fetchExamStatus';
import getExamDetailsByID from '../../../controller/getExamDetails';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import XLSX from 'xlsx';
import LoadingButton from '../../../components/LoadingButton';
import { Alert } from 'react-native';
const Day = () => {
    const input = useInput(new Date())
    const input2 = useInput(new Date())
    const pattern = date_and_time.compile('ddd, MMM DD YYYY');
    const [examStatus, setExamStatus] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const leads = useSelector(state => state.leads.leadList);
    const [isUploading, setIsUploading] = useState(false);
    useEffect(() => {
        var isMounted = true;
        isMounted && getExamStatuses();
        return () => {
            isMounted = false;
        };
    }, []);

    const getExamStatuses = async () => {
        var x = await fetchExamStatus();
        setExamStatus(x);
    }

    const handleSubmit = () => {
        setIsUploading(true);
        const startDate = input.date;
        const endDate = input2.date
        const arr = examStatus.filter(status => {
            if (status.proposedDate !== null && status.proposedDate !== '') {
                if (new Date(status.proposedDate) >= startDate && new Date(status.proposedDate) <= endDate) {
                    return status;
                }
            }
        });
        if (arr.length === 0) {
            setIsUploading(false);
            Alert.alert("No Data Found");
            return -1;
        }
        addFilteredData(arr);
    }
    useEffect(() => {
        createExcelSheet();
        return () => {
        };
    }, [filteredData]);

    const addFilteredData = useCallback((arr) => {
        setFilteredData(arr);
    }, [filteredData])


    const createExcelSheet = () => {
        if (filteredData.length < 1) return;
        const leadDetails = [];
        let examDetails = [];
        leads.filter(lead => {
            filteredData.forEach(_examStatus => {
                if (_examStatus.leadMasterID === lead.id) {
                    leadDetails.push(lead);
                }
            });
        })
        examDetails = [];
        var examDetailsNotifier = new Promise((resolve, reject) => {
            leadDetails.forEach((value, index, array) => {
                getExamDetailsByID(value.exam_Id).then(x => {
                    examDetails.push(x);
                    if (examDetails.length === leadDetails.length) resolve();
                })
            });
        });

        examDetailsNotifier.then(() => {

            let Exam_Name = '', Exam_Status = '', Exam_Date = '', Candidate_Name = '', Exam_Time = '';
            const dayFilterArray = [];
            for (var i = 0; i < examDetails.length; i++) {
                Exam_Name = examDetails[i].exam_name;
                Exam_Status = filteredData[i].status;
                Exam_Date = date_and_time.format(new Date(filteredData[i].proposedDate), pattern)
                Exam_Time = filteredData[i].proposedTime
                Candidate_Name = leadDetails[i].name
                dayFilterArray.push(new FilterByDayData(Exam_Name, Exam_Status, Exam_Date, Candidate_Name, Exam_Time))
            }
            onDownload(dayFilterArray);
        });
    }


    const onDownload = async (data) => {
        try {
            var ws = XLSX.utils.json_to_sheet(data);
            var wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "skilltech_exam_details");
            const wbout = XLSX.write(wb, {
                type: 'base64',
                bookType: "xlsx"
            });
            const uri = FileSystem.cacheDirectory + `skilltech_exam_details_${Math.random(100).toString()}.xlsx`;

            await FileSystem.writeAsStringAsync(uri, wbout, {
                encoding: FileSystem.EncodingType.Base64
            });
            await Sharing.shareAsync(uri, {
                mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                dialogTitle: 'Exam Details',
                UTI: 'com.microsoft.excel.xlsx'
            });
            setIsUploading(false);
        } catch (error) {
            setIsUploading(false);
            Alert.alert("Fatal Error 404");
            console.log(error);
        }
    }



    return (
        <Box flex={1} >
            <HStack space={2} alignItems={'center'} justifyContent={'center'} w={'100%'} mt={5} >
                <Pressable onPress={input.showDatepicker} w={'45%'}>
                    <FormControl>
                        <FormControl.Label alignItems={'center'} color="muted.600">
                            <Icon
                                as={<MaterialCommunityIcons name="calendar-range-outline" />}
                                size={5}
                                mr={1}
                                color="muted.600"
                            />
                            From
                        </FormControl.Label>
                        <Input
                            InputLeftElement={
                                <Icon
                                    as={<MaterialCommunityIcons name="calendar-today" />}
                                    size={5}
                                    ml={1}
                                    color="muted.600"
                                />
                            }
                            value={date_and_time.format(new Date(input.date), pattern)}
                            placeholder='Select a date '
                            isDisabled={true}
                            borderColor={"muted.600"}
                        />
                    </FormControl>
                </Pressable>
                <Pressable w={'45%'} onPress={input2.showDatepicker}  >
                    <FormControl>
                        <FormControl.Label alignItems={'center'} color="muted.600">
                            <Icon
                                as={<MaterialCommunityIcons name="calendar-range-outline" />}
                                size={5}
                                color="muted.600"
                                mr={1}
                            />
                            To
                        </FormControl.Label>
                        <Input
                            InputLeftElement={
                                <Icon
                                    as={<MaterialCommunityIcons name="calendar-today" />}
                                    size={5}
                                    ml={1}
                                    color="muted.600"
                                />
                            }
                            placeholder='Select a date '
                            isDisabled={true}
                            borderColor={"muted.600"}
                            value={date_and_time.format(new Date(input2.date), pattern)}
                        />
                    </FormControl>
                </Pressable>
            </HStack>

            {input.show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={input.date}
                    mode={input.mode}
                    is24Hour={true}
                    display="default"
                    onChange={input.onChange}
                    minimumDate={new Date(2022, 0, 1)}
                    maximumDate={new Date()}
                />

            )}
            {input2.show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={input2.date}
                    mode={input2.mode}
                    is24Hour={true}
                    display="default"
                    onChange={input2.onChange}
                    minimumDate={new Date(input.date)}
                    maximumDate={new Date()}
                />
            )}
            <Box w={'90%'} alignSelf={'center'} my={5} >
                {
                    !isUploading ? <Button size={'lg'} shadow={5} colorScheme='danger' onPress={handleSubmit} >Search Record</Button>
                        :
                        <Button isLoading
                            size={"lg"}
                            _loading={{
                                bg: "muted.700",
                                _text: {
                                    color: "muted.50",
                                },
                            }}
                            _spinner={{
                                color: "white",
                            }}
                            isLoadingText="Please Wait"
                        >
                            Please Wait
                        </Button>
                }
            </Box>
        </Box>
    );
}
export default Day;

class FilterByDayData {
    constructor(Exam_Name, Exam_Status, Exam_Date, Candidate_Name, Exam_Time) {
        this.Candidate_Name = Candidate_Name
        this.Exam_Date = Exam_Date
        this.Exam_Name = Exam_Name
        this.Exam_Status = Exam_Status
        this.Exam_Time = Exam_Time
    }
}