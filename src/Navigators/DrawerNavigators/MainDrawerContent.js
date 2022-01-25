import React from "react";
import { StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Box, VStack, Divider, Center } from "native-base";
import DrawerItems, { ProfileAvatar } from "../../components/DrawerItems/AdminDrwaerItems.js";
import { Auth } from 'aws-amplify';
import { createUserAuth } from '../../../store/reducers/UserState';
import { useDispatch } from "react-redux";
import SignOutLoadingIndicator from "../../../components/FullScreenLoadingIndicator.js";

const AdminDrawerContent = (props) => {

  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  async function signOut() {
    setShowModal(true);
    props.navigation.closeDrawer()
    try {
      await Auth.signOut();
      dispatch(createUserAuth([]));
      setShowModal(false);
      props.navigation.replace("Login");
    } catch (error) {
      console.log('error signing out: ', error);
      setShowModal(false);
    }
  }
  return (
    <Box style={{ flex: 1 }} safeArea>
      <DrawerContentScrollView {...props}>
        <Box style={styles.drawerContent} >
          <ProfileAvatar
            uri={'../../../assets/admin.png'}
            name={'Admin'}
            username={"@admin"}
            colorCode={"#000"}
          />
          <Center m={1} p={1}>
            <Divider my={2} w={'100%'} />
          </Center>
          <VStack>
            <Box style={styles.drawerSection}>
              <DrawerItemList {...props} />
            </Box>
          </VStack>
        </Box>

      </DrawerContentScrollView>
      <VStack divider={<Divider />} space={4}>
        {
          showModal && <SignOutLoadingIndicator state={[showModal]} subtext={'Signing Out... Please Wait'} />
        }
        <Box>
          <DrawerItems
            label={"Sign Out"}
            icon={"exit-to-app"}
            onSelect={signOut}
          />
        </Box>
      </VStack>

    </Box>

  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  drawerSection: {
    marginTop: -10
  }
});

export default AdminDrawerContent;
