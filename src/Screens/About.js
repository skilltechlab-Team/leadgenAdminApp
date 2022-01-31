import React from 'react';
import { Box, Center, Text, Icon, HStack } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons"
import Constants from 'expo-constants';

const About = () => {

    return (
        <HStack space={2} flex={1} justifyContent={'center'} flexDir={'row'} alignItems={'center'}  >

            <Icon
                as={<MaterialIcons name="info-outline" />}
                size={5}
                color="indigo.500"
            />
            <Text>Version: <Text>{Constants.manifest.version}</Text></Text>

        </HStack>
    );
}
export default About;