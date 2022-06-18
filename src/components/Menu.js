import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import * as React from 'react';
import {StyleSheet, Image, View, Text}from 'react-native';

import Play from '../screens/Play';
import Cartoes from '../screens/Cartoes';
import Main from '../screens/Main';
import Login from '../screens/Login';
import CriarBaralho from '../screens/CriarBaralho';

const {User} = require('../../user.json');
const link = User.LinkPhoto;

const Drawer = createDrawerNavigator();

function DrawPerson(props){
    return(
        <View style={style.container}>
        <View>
            <Image source={require('../icons/fotoDePerfil.jpg')} style={style.fotoBarLateral} />
            
        </View>
            <View style={style.container2}>
                <Text style={style.txtName}>{User.name}</Text>
            </View>
            <Image source={require('../icons/Line.png')} style={{marginBottom: 15}} />
        </View>
    )
}

function DrawSideBar(props){
    return(
        <DrawerContentScrollView>
            <DrawPerson {...props} />
            <DrawerItemList {...props} />
            <DrawerItem 
                label="Sair" 
                onPress={ () => props.navigation.popToTop() } 
                labelStyle={{color: 'white'}} 
                icon={ () => <Image source={require('../icons/seta.png')} /> } 
            />
        </DrawerContentScrollView>
    )
}

export default function Menu (){

    return(

        <Drawer.Navigator 
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#25213E'
                },
                drawerLabelStyle: {
                    "color": 'white'
                },
                headerStyle: {
                    backgroundColor: '#4A4568'
                    },
                headerTintColor: 'white',
                }
            }
            drawerContent={props => <DrawSideBar {...props}/>}
            
            >
            <Drawer.Screen 
                name="Minhas Coleções" 
                component={Main} 
                options={{
                    drawerIcon: ({focused, size}) => <Image source={require('../icons/barra.png')}/>}}
            />
            
        </Drawer.Navigator>
    )
}

const style = StyleSheet.create({
    menuLateral: {
        backgroundColor: '#25213E',
    },
    fotoBarLateral: {
        width: 128,
        height: 128,
    },
    container: {
        alignItems: 'center',
        marginTop: 20,
    },
    container2: {
        margin: 10,
    },
    txtName: {
        color: 'white',
        fontSize: 20,
    }
})