import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Home from './pages/Home';
import EstudoDeCasoList from './pages/EstudoDeCasoList';
import Vagas from './pages/Vagas';

const GlobalNavigationOptions = {
  headerStyle: {
    height: StatusBar.currentHeight,
  },
  headerTintColor: '#fff',
  headerBackTitle: null,
};

// app routes
const AppStack = createStackNavigator(
  {
    MainScreen: createMaterialTopTabNavigator(
      {
        'ESTUDO DE CASO': {
          screen: Home,
        },
        VAGAS: {
          screen: Vagas,
        },
      },
      {
        tabBarOptions: {
          style: {
            backgroundColor: '#333',
          },
          indicatorStyle: {
            backgroundColor: 'red',
          },
        },
      }
    ),
    EstudoDeCasoListScreen: EstudoDeCasoList,
  },
  {
    defaultNavigationOptions: GlobalNavigationOptions,
    headerLayoutPreset: 'center',
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Dashboard: AppStack,
    },
    {
      initialRouteName: 'Dashboard',
    }
  )
);
