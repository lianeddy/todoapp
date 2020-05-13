import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, RegisterScreen} from '../Screens';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  MainApp: {color: string};
};
const Stack = createStackNavigator<RootStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      {/* <Stack.Screen name="MainApp" component={MainDrawer} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
