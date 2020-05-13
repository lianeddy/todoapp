import * as React from 'react';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {HomeScreen, AddScreen, ProfileScreen} from '../Screens';

export type HomeTabProps = {
  Home: {color: string};
  Profile: {color: string};
  Post: {color: string};
};

const Tab = createBottomTabNavigator();

const HomeTab: React.FC = () => {
  return (
    <Tab.Navigator
      // shifting={true}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="home" size={20} color={color} />;
          },
        }}
        // options={{tabBarColor: '#282A36', tabBarBadge: true}}
        initialParams={{color: '#282A36'}}
      />
      <Tab.Screen
        name="Post"
        component={AddScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="add-box" size={20} color={color} />;
          },
        }}
        // options={{tabBarColor: 'skyblue'}}
        initialParams={{color: 'skyblue'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name="account-box" size={20} color={color} />;
          },
        }}
        // options={{tabBarColor: 'coral'}}
        initialParams={{color: 'coral'}}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
