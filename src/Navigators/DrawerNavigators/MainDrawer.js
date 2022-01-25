import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Text } from "native-base";
import AdminDrawerContent from "./MainDrawerContent";
import DashBoard from "../../Screens/DashBoard";
import ViewExecutive from "../../Screens/ViewExecutive";
import CreateExam from "../../Screens/CreateExam";
import Report from "../../Screens/Report";
import Vendor from "../../Screens/Vendor";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {

    return (
        <Drawer.Navigator drawerContent={(props) => <AdminDrawerContent {...props} />}
            screenOptions={{
                headerTitleStyle: {
                    color: "#fff"
                },
                headerStyle: {
                    backgroundColor: "#3e3d70"
                },
                headerTintColor: '#fff',
                drawerActiveBackgroundColor: "#cdcce1",
                headerBackgroundContainerStyle: {
                    borderBottomColor: "#94a3b8",
                    borderBottomWidth: 0.5
                },

            }}
        >
            <Drawer.Screen name="DashBoard" component={DashBoard} options={{
                title: "Add Executive",
                drawerIcon: ({ focused, size }) => (
                    <Icon name="group-add" size={size} color={focused ? "#3e3d70" : "#3e3d70"} />
                ),
                drawerLabel: ({ focused }) => (
                    <Text color={focused ? "#3e3d70" : "#3e3d70"}  >
                        Add Executive
                    </Text>
                ),
            }} />
            <Drawer.Screen name="ViewExecutive" component={ViewExecutive} options={{
                title: "Executive",
                drawerIcon: ({ focused, size }) => (
                    <Icon name="person-search" size={size} color={focused ? "#3e3d70" : "#3e3d70"} />
                ),
                drawerLabel: ({ focused }) => (
                    <Text color={focused ? "#3e3d70" : "#3e3d70"}  >
                        View Executive
                    </Text>
                ),
            }} />

            <Drawer.Screen name="CreateExam" component={CreateExam} options={{
                title: "Exam",
                drawerIcon: ({ focused, size }) => (
                    <Icon name="note-add" size={size} color={focused ? "#3e3d70" : "#3e3d70"} />
                ),
                drawerLabel: ({ focused }) => (
                    <Text color={focused ? "#3e3d70" : "#3e3d70"}  >
                        Exam
                    </Text>
                ),
            }} />
            <Drawer.Screen name="Vendor" component={Vendor} options={{
                title: "Vendor",
                drawerIcon: ({ focused, size }) => (
                    <Icon name="shopping-bag" size={size} color={focused ? "#3e3d70" : "#3e3d70"} />
                ),
                drawerLabel: ({ focused }) => (
                    <Text color={focused ? "#3e3d70" : "#3e3d70"}  >
                        Vendor
                    </Text>
                ),
            }} />

            <Drawer.Screen name="Report" component={Report} options={{
                title: "Report",
                drawerIcon: ({ focused, size }) => (
                    <Icon name="view-list" size={size} color={focused ? "#3e3d70" : "#3e3d70"} />
                ),
                drawerLabel: ({ focused }) => (
                    <Text color={focused ? "#3e3d70" : "#3e3d70"}  >
                        Report
                    </Text>
                ),
            }} />


        </Drawer.Navigator >
    );
}