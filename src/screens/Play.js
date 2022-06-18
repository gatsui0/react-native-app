import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import CollectionList from '../components/CollectionList';
import Game from '../components/Game';

export default function Play({navigation, route}) {
  if (!route.params) {
    return <View style={style.view}></View>;
  }

  return (
    <ScrollView style={style.view}>
      <Game navigation={navigation} route={route} />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#332E56',
  },
});
