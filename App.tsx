import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/root';
import ProductsOverviewNavigator from './navigation/ProductsOverviewNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <ProductsOverviewNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
