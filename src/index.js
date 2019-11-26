import React from 'react';
import { StatusBar } from 'react-native';
import App from './App';

export default function src() {
  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor="#333" />
      <App />
    </>
  );
}
