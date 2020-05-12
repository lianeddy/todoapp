import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import MainNavigation from './Navigation/MainNavigation';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './Redux/reducer';

const store = configureStore({
  reducer,
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
