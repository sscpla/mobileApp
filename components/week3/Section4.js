import React from 'react';
import { Image, View,Text} from 'react-native';

export default function Section1() {
    return (
        <View style={{ flexDirection: "row",margin:15,padding:5,borderBottomWidth:0.5,borderBottomColor:'#999999',justifyContent:"center"}}>
            <View>
                <Text style={{ fontSize: 20, textAlign: "left" }}>Hotel Description</Text>
                <Text style={{ fontSize: 10, textAlign: "left" }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor
                    incididunt ut labore et dolore</Text>
            </View>
        </View>

    );
}
