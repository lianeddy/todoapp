import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './Authstack';
import HomeTab from './HomeTab';
import {useTypedSelector} from '../Redux/reducer';

const MainNavigation: React.FC = () => {
  const auth = useTypedSelector(state => state.auth.username);
  return (
    <NavigationContainer>
      {auth ? <HomeTab /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigation;
