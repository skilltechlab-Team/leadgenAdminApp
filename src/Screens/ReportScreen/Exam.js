import React, { useEffect, useCallback, useState } from 'react';
import { Box, ScrollView, Text } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeadDetails, fetchExamDetails } from '../../../controller/createExamRecord'
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import fetchAllExam from '../../../controller/fetchAllExam';
import { createExamList } from '../../../store/reducers/examList';
import date from 'date-and-time';
const Exam = () => {
    useEffect(() => {
        addLeadDetails();
        addExamStatus();
        fetchExamList();
    }, []);

    const examDetails = useSelector(state => state.exams.examList);
    const examListsData = examDetails.filter((exam) => exam._deleted !== true)
    const dispatch = useDispatch();
    const [leadDetails, setLeadDetails] = useState([]);
    const [examStatus, setExamStatus] = useState([]);
    const [examData, setExamData] = useState([]);

    const addLeadDetails = useCallback(async () => {
        const getLeadDetails = await fetchLeadDetails();
        setLeadDetails([...getLeadDetails]);
    }, [leadDetails])
    const fetchExamList = useCallback(async () => {
        const examList = await fetchAllExam()
        dispatch(createExamList(examList))
    })
    const addExamStatus = useCallback(async () => {
        const getExamdDetails = await fetchExamDetails();
        setExamStatus([...getExamdDetails]);
    }, [examStatus])


    let arr = [];
    const addExamData = useCallback(() => {
        arr = [];
        leadDetails.forEach((lead) => {
            arr.push(examListsData.filter((examData) => lead.exam_Id === examData.id)[0]);
        });
        setExamData([...arr])
    }, [arr])

    useEffect(() => {
        addExamData();
    }, [examDetails, leadDetails]);

    const dataTableData = [];
    examData.forEach(exam => {
        if (exam !== undefined) {
            let name = exam.exam_name;
            let arr = leadDetails.filter(lead => lead.exam_Id === exam.id);
            dataTableData.push({
                'Exam Name': name,
                'Count': arr.length
            })
        }
        return;
    });

    return (
        <Box style={{ width: '100%', alignSelf: 'center' }}>
            <DataTable
                data={dataTableData} // list of objects
                colNames={['Exam Name', 'Count']} //List of Strings
                colSettings={[{ name: 'Exam Name', type: COL_TYPES.STRING }, { name: 'Count', type: COL_TYPES.INT }]}//List of Objects
                noOfPages={2} //number
                tableBackgroundColor="#f5f5f4"
            />
        </Box>
    );
}
export default Exam;