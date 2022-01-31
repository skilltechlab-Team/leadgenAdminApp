import React, { useState } from 'react';
import { isObject, has } from 'lodash';

const useInput = (selectedDate) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };

    const onChange = (_event, selectedDate) => {
        if (isObject(_event)) {
            if (_event.type === 'dismissed') return;
        }
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    }
    return {
        date,
        showDatepicker,
        show,
        mode,
        onChange
    }
}

export default useInput;
