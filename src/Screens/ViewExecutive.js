import React, { useState, useEffect } from 'react';
import { Box } from 'native-base';
import fetchExecutive from '../../controller/fetchExecutive';
import UserLoading from '../../components/AuthComp/UserLoading';
import { useDispatch, useSelector } from 'react-redux';
import { createExecutiveList } from '../../store/reducers/ListOfExecutives';
import ExecutiveList from '../../components/ExecutiveList';
import { RefreshControl, FlatList } from 'react-native';

const ViewExecutive = ({ navigation }) => {
    let executiveList = [];
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getExecutiveList()
    }, []);

    async function getExecutiveList() {
        setRefresh(true);
        executiveList = await fetchExecutive();
        dispatch(createExecutiveList(executiveList));
        setIsLoading(false)
        setRefresh(false)
    }
    let listOfExecutives = useSelector((state) => state.executives.executivelist)
    listOfExecutives = listOfExecutives.filter((ex) => ex.status === "active");
    return (
        !isLoading ?
            <Box flex={1} >
                <FlatList
                    data={listOfExecutives}
                    renderItem={({ item }) => {
                        return (
                            <ExecutiveList executive={item} navigation={navigation} />
                        )
                    }}
                    keyExtractor={(item) => item.id}
                    refreshControl={
                        <RefreshControl
                            refreshing={refresh}
                            onRefresh={() => getExecutiveList()}
                            tintColor="red"
                        />
                    }
                />
            </Box>
            :
            <UserLoading />
    );
}
export default ViewExecutive;