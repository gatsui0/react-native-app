import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import axios from 'axios';
import CollectionList from "../components/CollectionList";
import { TouchableHighlight } from 'react-native-gesture-handler';


export default function Main (props){

    
        return(
                <ScrollView style={style.view}>
                    <CollectionList navigation={props.navigation} />     
                </ScrollView>
        );
    
}


const style = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#332E56'
        
    },
    container: {
        position: 'fixed',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginLeft: 180,
      },
      touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 15,
        bottom: 30,
      },
      floatingButtonStyle: {
        resizeMode: 'contain',
        width: 70,
        height: 70,
      },
});