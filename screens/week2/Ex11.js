import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex11() {
  return (
    <View style={{flex:1,flexDirection:'column'}}>
      <View style={{flex:1,backgroundColor:'#4A90E2'}}></View>
      <View style={{flex:2,backgroundColor:'#4A90E2'}}></View>
      <View style={{flex:3,backgroundColor:'#50E3C2'}}></View>
    </View>
  );
}

