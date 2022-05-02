import React, {Component} from 'react';
import Main from './src/screens/Main';
import Login from './src/screens/Login';
import Menu from './src/components/Menu'
import Cadastro from './src/screens/Cadastro';
import Play from './src/screens/Play';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Cartoes from './src/screens/Cartoes';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();


const app = () => {
      return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#4A4568'}, headerTintColor: 'white'}}>
            <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
            <Stack.Screen name={"Cartões"} component={Cartoes} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}} />
            <Stack.Screen name="Play" component={Play} />
          </Stack.Navigator>
        </NavigationContainer>
      )

  }

  export default app;