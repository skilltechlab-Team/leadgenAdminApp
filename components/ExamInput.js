import React from 'react';
import { Box, Icon, Input } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons"
import SubmitButton from './SubmitButton';
import { useState } from 'react';
import LoadingButton from './LoadingButton';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { useToast } from 'native-base';
import createOneExam from '../controller/createOneExam';
import submitExam from '../controller/submitExam';
import getStatus, { statusNames } from './Satus';
const ExamInput = ({ fetchExamList, setStatus }) => {
    const [isUploading, setIsUploading] = useState(false);
    const [exam, setExam] = useState({ exam_name: "", exam_code: "" });

    const dispatch = useDispatch();

    const toast = useToast()

    async function onSubmit() {
        setIsUploading(true);
        const UploadingStatus = await createOneExam(exam, toast);
        if (UploadingStatus !== -1) {
            toast.show({
                description: "Exam Created Successfully!",
            })
            setIsUploading(false)
            setStatus(getStatus(statusNames.success, "Exam Created Successfully!"))

            setExam({ exam_name: "", exam_code: "" })
            fetchExamList()
        } else {
            setIsUploading(false)
            setStatus(getStatus(statusNames.warning, "Some Unknown Error Occured!"))
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
                        as={<MaterialIcons name="menu-open" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                    />
                }
                placeholder="Exam Name"
                borderColor={'muted.600'}
                onChangeText={(val) => {
                    setExam({ ...exam, exam_name: val })
                }}
                value={exam.exam_name}
                onBlur={() => {
                    setExam({ ...exam, exam_name: exam.exam_name.trim() })
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
                placeholder="Exam Code"
                borderColor={'muted.600'}
                onChangeText={(val) => {
                    setExam({ ...exam, exam_code: val })
                }}
                value={exam.exam_code}
                onBlur={() => {
                    setExam({ ...exam, exam_code: exam.exam_code.trim() })
                }}
            />

            <Box w={"60%"} mt={-5} >
                {
                    !isUploading ? <SubmitButton btnText={"CREATE EXAM"} onSubmit={onSubmit} /> : <LoadingButton />
                }
            </Box>
        </>
    );
}
export default ExamInput;
