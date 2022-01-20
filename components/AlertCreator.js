import React from 'react';
import {
    Alert,
    IconButton,
    HStack,
    VStack,
    CloseIcon,
    Text,
    Pressable
} from 'native-base';
import { TouchableOpacity } from 'react-native';
const AlertCreator = ({ status, setStatus }) => {
    if (Object.keys(status).length === 0) {
        return <></>
    } else {
        return (
            <Alert w="100%" status={status.status}>
                <VStack space={2} flexShrink={1} w="100%">
                    <HStack flexShrink={1} space={2} justifyContent="space-between">
                        <HStack space={2} flexShrink={1}>
                            <Alert.Icon mt="1" />
                            <Text fontSize="md" color="coolGray.800">
                                {status.title}
                            </Text>
                        </HStack>

                        <IconButton onPress={() => setStatus({})}
                            variant="unstyled"
                            icon={<CloseIcon size="3" color="coolGray.600" />}
                        />

                    </HStack>
                </VStack>
            </Alert>
        )
    }
}
export default AlertCreator;