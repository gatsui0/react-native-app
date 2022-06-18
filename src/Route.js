import React, {Component} from 'react';
import Login from './screens/Login';
import Menu from './components/Menu'
import Cadastro from './screens/Cadastro';
import Play from './screens/Play';
import CriarBaralho from './screens/CriarBaralho';
import CriarFlashCard from './screens/CriarFlashCard';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Cartoes from './screens/Cartoes';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();


const Route = () => {
      return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#4A4568'}, headerTintColor: 'white'}}>
        
            <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
            <Stack.Screen name="Cartões" component={Cartoes} />
            <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}} />
            <Stack.Screen name="Play" component={Play} />
            <Stack.Screen name="Criar um Baralho" component={CriarBaralho} options={{headerShown: false}}  />
            <Stack.Screen name="Criar um flashCard" component={CriarFlashCard} options={{headerShown: false}}  />
 
            
          </Stack.Navigator>
        </NavigationContainer>
      )

  }

  export default Route;