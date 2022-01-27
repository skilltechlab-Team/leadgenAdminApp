import React, { useEffect, useCallback, useState } from 'react';
import { Box, Heading, ScrollView, Text } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeadDetails, fetchExamDetails } from '../../../controller/createExamRecord'
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import fetchAllExam from '../../../controller/fetchAllExam';
import { createExamList } from '../../../store/reducers/examList';
import date from 'date-and-time';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
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
    }, [examListsData, examData])

    useEffect(() => {
        addExamData();
    }, [examDetails, leadDetails]);
    let key = 'exam_name';
    const examLabels = [];
    const dataTableData = findOcc(examData, key);
    const examCount = []
    dataTableData.sort((a, b) => parseInt(b.Count) - parseInt(a.Count));
    let i = 0;
    dataTableData.forEach(data => {
        if (data === undefined) return;
        let o = data;
        let oldKey = 'exam_name';
        let newKey = 'Exam Name'
        delete Object.assign(o, { [newKey]: o[oldKey] })[oldKey];

        if (i < 4) {
            examLabels.push(data[newKey]);
            examCount.push(data.Count);
            i++;
        }
    });


    const data = {
        labels: examLabels,
        datasets: [
            {
                data: examCount,
                color: (opacity = 0) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
    };
    const chartConfig = {
        backgroundGradientFrom: "#f5f5f4",
        backgroundGradientTo: "#f5f5f4",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(2, 3, 147, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(2, 3, 147, ${opacity})`,
        style: {
            borderRadius: 16
        },

    }

    return (
        <ScrollView flexGrow={1} style={{ width: '100%', alignSelf: 'center' }} >
            <DataTable
                data={dataTableData} // list of objects
                colNames={['Exam Name', 'Count']} //List of Strings
                colSettings={[{ name: 'Exam Name', type: COL_TYPES.STRING }, { name: 'Count', type: COL_TYPES.INT }]}//List of Objects
                noOfPages={2} //number
                tableBackgroundColor="#f5f5f4"
            />
            <Box w={"100%"} my={5} >
                <Box px={5} >
                    <BarChart
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            alignSelf: 'center',
                            marginHorizontal: 5
                        }}
                        data={data}
                        width={screenWidth}
                        height={400}
                        chartConfig={chartConfig}
                        verticalLabelRotation={30}
                        fromZero={true}
                        showBarTops={true}
                    />
                </Box>
            </Box>
            <Box p={10} ></Box>
        </ScrollView>
    );
}
export default Exam;


function findOcc(arr, key) {
    let arr2 = [];

    if (arr.length > 0) {
        arr.forEach((x) => {
            if (x === undefined) return;
            // Checking if there is any object in arr2
            // which contains the key value
            if (arr2.some((val) => { return val[key] == x[key] })) {

                // If yes! then increase the Count by 1
                arr2.forEach((k) => {
                    if (k[key] === x[key]) {
                        k["Count"]++
                    }
                })

            } else {
                // If not! Then create a new object initialize 
                // it with the present iteration key's value and 
                // set the Count to 1
                let a = {}
                a[key] = x[key]
                a["Count"] = 1
                arr2.push(a);
            }
        })

    }
    return arr2
}