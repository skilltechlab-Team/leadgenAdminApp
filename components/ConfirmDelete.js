import React from 'react';
import {
    Button,
    Modal,
    Text,
    Input,
    Center,
    NativeBaseProvider,
    Heading,
} from "native-base"
import { useState } from "react"
import deleteexamRecord from '../controller/deleteExamRecord';
import getStatus, { statusNames } from './Satus';
import deleteVendorRecord from '../controller/deleteVendorRecord';
const ConfirmDelete = ({ showModal, setShowModal, id, toast, version, fetchExamList, setStatus, fetchVendorList }) => {
    async function onExamDelete() {
        const status = await deleteexamRecord(id, version, toast);
        setShowModal(false)
        if (status !== -1) {
            setStatus(getStatus(statusNames.success, "Exam Deleted Successfully!"))
            fetchExamList()
        }
    }

    async function onVendorDelete() {
        const status = await deleteVendorRecord(id, version, toast);
        setShowModal(false)
        if (status !== -1) {
            setStatus(getStatus(statusNames.success, "Vendor Deleted Successfully!"))
            fetchVendorList()
        }
    }

    return (
        <>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.Header bg={'red.400'}><Text color={'#fff'} fontWeight={'bold'} >Are You Sure?</Text></Modal.Header>
                    <Modal.Body pl={2}>
                        <Heading size={'sm'} textAlign={'left'} > This record will be deleted</Heading>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    setShowModal(false)
                                }}
                            >
                                Cancel
                            </Button>
                            {
                                fetchExamList !== undefined ?
                                    <Button colorScheme='danger'
                                        onPress={onExamDelete}
                                    >
                                        Delete
                                    </Button> :
                                    <Button colorScheme='danger'
                                        onPress={onVendorDelete}
                                    >
                                        Delete
                                    </Button>
                            }
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    );
}
export default ConfirmDelete;
