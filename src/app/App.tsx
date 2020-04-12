import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomePage from './pages/HomePage';

const App: React.FunctionComponent = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomePage />
      </SafeAreaView>
    </>
  );
};

export default App;
