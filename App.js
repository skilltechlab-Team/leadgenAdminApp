import React from 'react';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { NativeBaseProvider } from 'native-base';
import MainNavigator from './src/Navigators/MainNavigator'
import store from "./store/store";
import { Provider } from "react-redux";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2', 'NativeBase: The contrast ratio of 1.9450225338727363:1 for secondary.500 on rgba(249, 168, 212, 0.5)', 'Setting a timer', 'Using an insecure random number generator, this should only happen when running in a debugger without support for crypto.getRandomValues']);
Amplify.configure(config)
function App() {
  return (
    <Provider store={store} >
      <NativeBaseProvider>
        <MainNavigator />
      </NativeBaseProvider>
    </Provider>
  );
}

export default App;

