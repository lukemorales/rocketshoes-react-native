import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import store from './store';
import NavigationService from './services/navigation';

import Routes from '~/routes';
import Header from '~/components/Header';
import LinearGradient from 'react-native-linear-gradient';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#141418" />
    <Header />
    <LinearGradient colors={['#7159c1', '#363666']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1 }}>
      <Routes ref={navigatorRef => NavigationService.setNavigator(navigatorRef)} />
    </LinearGradient>
  </Provider>
);

export default App;
