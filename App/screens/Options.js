import React from 'react';
import  {SafeAreaView, StyleSheet, ScrollView, Linking, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

const openUrl = (url) => {
  Linking.openURL(url).catch(() => {
    Alert.alert('Hey! something went wrong :(');
  
  });
}


const style = StyleSheet.create({

    droidStyle: {
        paddingTop: 40,
        flex: 1
    }
    

});

export default () => {
  return (
    
    <SafeAreaView style={style.droidStyle}>
      <ScrollView>
        <RowItem
          title="Themes"
          onPress={() => alert('todo!')}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          title="React Native Basics"
          onPress={() => openUrl('https://www.google.com')}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          title="React Native by Example"
          onPress={() => openUrl('https://www.google.com')}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        /> 
 
      </ScrollView>
    </SafeAreaView>
   
  );
};