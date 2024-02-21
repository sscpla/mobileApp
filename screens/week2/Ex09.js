import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex09() {
  return (
    <View style={{flex:1,flexDirection:'columns',justifyContent:'space-around'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{backgroundColor:'#50E3C2',width:100,height:100}}></View>
        <View style={{backgroundColor:'#50E3C2',width:100,height:100}}></View>
        <View style={{backgroundColor:'#50E3C2',width:100,height:100}}></View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{backgroundColor:'#4A90E2',width:100,height:100}}></View>
        <View style={{backgroundColor:'#4A90E2',width:100,height:100}}></View>
        <View style={{backgroundColor:'#4A90E2',width:100,height:100}}></View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{backgroundColor:'#9013FE',width:100,height:100}}></View>
        <View style={{backgroundColor:'#9013FE',width:100,height:100}}></View>
        <View style={{backgroundColor:'#9013FE',width:100,height:100}}></View>
      </View>

    </View>
  );
}

