import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function Section3(props) {
  return (
      <View style={{margin:15,padding:5,borderBottomWidth:0.5,borderBottomColor:'#999999'}}>
          <View style={{ flexDirection: "row" }}>
              <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: '#CC6666', justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                  <Text style={{ fontSize: 20, color: "white" }}>9.5</Text>
              </View>

             <View>
                <Text style={{ fontSize: 30, textAlign: "center" ,color:'#CC6666'}}>Excellent </Text>
                <Text style={{ fontSize: 15, textAlign: "center" }}>See 801 reviews</Text>
            </View>
          </View>
      </View>
  );
}
