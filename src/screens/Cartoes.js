import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableHighlight} from 'react-native';
import CollectionCards from '../components/CollectionCard';

export default function Cartoes ({navigation, route}){


        return(
            <View style={style.view}>
                <TextInput placeholder='filtro' style={style.txtinput} placeholderTextColor='#6200EE'  />
                <TouchableHighlight style={style.button} onPress={pros => navigation.navigate("Play", route.params)}>
                    <Text style={{color: 'white'}}>Jogar!</Text>
                </TouchableHighlight>
                <CollectionCards navigation={navigation} route={route}/>
            </View>
        )
}


const style = StyleSheet.create({
    "button":{
        backgroundColor: '#57966A',
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#B58D97',
        marginHorizontal: 140,
        marginBottom: 10,
        width: 150,
        height: 46,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    "view": {
        flex: 1,
        backgroundColor: '#332E56',
    },
    "txtinput": {
        backgroundColor: 'white',
        margin: 19,
        marginBottom: 24,

    }
});