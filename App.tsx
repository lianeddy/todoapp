import React from 'react';
import 'react-native-gesture-handler';
import MainNavigation from './src/Navigation/MainNavigation';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './src/Redux/reducer';

const store = configureStore({
  reducer,
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
