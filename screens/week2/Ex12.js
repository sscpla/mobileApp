import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Ex12() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{flex:1,flexDirection:'row',alignItems:'stretch'}}>
      <View style={{flex:1,backgroundColor:'#50E3C2'}}></View>
      <View style={{flex:1,backgroundColor:'#4A90E2'}}></View>
      <View style={{flex:1,backgroundColor:'#9013FE'}}></View>
    </View>
    <Button title="Next" onPress={() => navigation.navigate("Ex01")} />
    </View>
  );
}

