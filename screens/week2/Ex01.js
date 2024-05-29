import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Ex01() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ backgroundColor: "#50E3C2", height: 116 }}></View>
    </View>
    <Button title="Next" onPress={() => navigation.navigate("Ex02")} />
  </View>

  );
}

