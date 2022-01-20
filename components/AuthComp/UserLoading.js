import React from "react"
import {
    Spinner,
    HStack,
    Heading,
    Center,
    NativeBaseProvider,
    Box,
} from "native-base"
const UserLoading = () => {
    return (
        <Box flex={1} backgroundColor={'light.200'} justifyContent={'center'} alignItems={'center'}>
            <HStack space={2} alignItems="center">
                <Spinner accessibilityLabel="Loading posts" />
                <Heading color="primary.500" fontSize="lg">
                    Please Wait
                </Heading>
            </HStack>
        </Box>
    );
}
export default UserLoading;