import React from "react";
import { StyleSheet } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { Box, Avatar, Text } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useColorModeValue } from "native-base";
const AdminDrawerItems = (props) => {

    return (
        <DrawerItem
            icon={({ color, size, focused }) => (
                <Icon name={props.icon} color={"#3e3d70"} size={size} />
            )}
            label={({ focused, color }) => (
                <Text>
                    {props.label}
                </Text>
            )}
            onPress={props.onSelect}
            activeBackgroundColor={"#cdcce1"}
        />
    );
};
export function ProfileAvatar(props) {

    return (
        <Box style={styles.userInfoSection}>
            <Box style={{ flexDirection: "row", alignItems: "center" }}>
                <Box>
                    <Avatar
                        size="lg"
                        source={require('../../../assets/admin.png')}
                    >
                        AK
                    </Avatar>
                </Box>
                <Box >
                    <Text style={({ ...styles.title }, { color: props.colorCode, fontSize: 22, marginLeft: 10, paddingTop: 5 })}>
                        {props.name}
                    </Text>
                    <Text
                        style={
                            ({ ...styles.caption },
                                { fontSize: 15, marginLeft: 10, color: "#D7D8D7" })
                        }
                    >
                        {props.username}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}
const styles = StyleSheet.create({
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,

    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
});

export default AdminDrawerItems;
