import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {HomeScreen} from '../Screens';
import {StyleSheet} from 'react-native';
import SettingScreen from '../Screens/SettingScreen';
import {Icon} from 'react-native-elements';
import HomeTab from './HomeTab';

export type MainDrawerParams = {
  Home: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParams>();

const MainDrawer: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      // drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
      drawerType="slide"
      overlayColor="1"
      drawerStyle={styles.drawerStyle}
      drawerContentOptions={{
        activeTintColor: 'black',
        activeBackgroundColor: '#fff',
        contentContainerStyle: {justifyContent: 'flex-end'},
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeTab}
        options={{drawerLabel: () => null}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="cog" type="font-awesome" size={25} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#fff',
    borderColor: '#cfcfcf',
    borderWidth: 1,
    justifyContent: 'flex-end',
  },
});

export default MainDrawer;
