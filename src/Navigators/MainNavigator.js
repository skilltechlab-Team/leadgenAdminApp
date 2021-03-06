import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../AuthScrren/Login';
import DrawerRoutes from './DrawerNavigators/MainDrawer';
import EditExecutive from '../Screens/EditExecutive';
import Executive from '../Screens/ReportScreen/Executive';
const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
                <Stack.Screen name="EditExecutive" component={EditExecutive} />
                <Stack.Screen name="Executive" component={Executive} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MainNavigator;