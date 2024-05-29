import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Ex11() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{flex:1,flexDirection:'column'}}>
      <View style={{flex:1,backgroundColor:'#4A90E2'}}></View>
      <View style={{flex:2,backgroundColor:'#4A90E2'}}></View>
      <View style={{flex:3,backgroundColor:'#50E3C2'}}></View>
    </View>
    <Button title="Next" onPress={() => navigation.navigate("Ex12")} />
    </View>
  );
}

