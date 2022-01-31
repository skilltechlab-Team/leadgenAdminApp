import React, { useState } from 'react';
import { Box, Text, Button, Pressable, Input, HStack, FormControl, Icon } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialCommunityIcons } from "@expo/vector-icons"

const Day = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <Box flex={1} >
            <HStack space={2} alignItems={'center'} justifyContent={'center'} w={'100%'} mt={5} >
                <Pressable onPress={showDatepicker} w={'45%'}>
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
                            placeholder='Select a date '
                            isDisabled={true}
                            borderColor={"muted.600"}
                        />
                    </FormControl>
                </Pressable>
                <Pressable w={'45%'} onPress={showDatepicker}  >
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
                        />
                    </FormControl>
                </Pressable>
            </HStack>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </Box>
    );
}
export default Day;