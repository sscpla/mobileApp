import React from 'react';
import { Image, View,Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import MyIcon from './MyIcon';
import { FontAwesome } from "@expo/vector-icons";


export default function Section2() {
    return (
        <View style={{
            margin: 15, marginTop: -30, padding: 15
            , borderRadius: 10, backgroundColor: "#F5F5F5",
        }}>
            <Text style={{ fontSize: 25, textAlign: "center" }}>Hilton San Francisco</Text>
            <View style={{ flexDirection: "row" ,justifyContent:'center'}}>
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star" size={20} color="orange" />
                <FontAwesome name="star-half-o" size={20} color="orange" />
            </View>
            <Text style={{ fontSize: 10, textAlign: "center" }}>Facilities provided may range from a modest quality
                mattress in a small room to large suites</Text>
        </View> 
         
    );
}