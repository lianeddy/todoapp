import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Icon} from 'react-native-elements';
import {HomeScreen, AddScreen, ProfileScreen} from '../Screens';

export type HomeTabProps = {
  Home: {color: string};
  Profile: {color: string};
  Post: {color: string};
  params: {color: string};
};

const Tab = createMaterialBottomTabNavigator<HomeTabProps>();

const HomeTab: React.FC = () => {
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Post':
              iconName = 'account-box';
              break;
            case 'Profile':
              iconName = 'add-box';
              break;
            default:
              null;
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarColor: '#282A36', tabBarBadge: true}}
        initialParams={{color: '#282A36'}}
      />
      <Tab.Screen
        name="Post"
        options={{tabBarColor: 'skyblue'}}
        component={AddScreen}
        initialParams={{color: 'skyblue'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarColor: 'coral'}}
        initialParams={{color: 'coral'}}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
