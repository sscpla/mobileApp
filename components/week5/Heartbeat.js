import React, { useState } from "react";
import { TouchableOpacity, View,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
    const [heartbeat , setheartbeat] = useState('0');
    console.log("STATE : ",heartbeat);
    const onPressButton = () => {   
        let output = Number(heartbeat)+1;
        setheartbeat(output); 
    }
    return (
        <View style={{flex:1,marginTop:20}} > 
            <View style={{flexDirection:'row',padding:10,justifyContent:"space-around"}}>
             <TouchableOpacity onPress={onPressButton}> 
                <FontAwesome name="heart" size={50} color="darkblue" />
             </TouchableOpacity>
             <Text style={{fontSize:50}}>{heartbeat}</Text>
            </View>
        </View>
    );
}
