import React from 'react';
import { Image, View,Text} from 'react-native';
import MyIcon from './MyIcon';

export default function Section6() {
    return (
        <View style={{ flexDirection: "column", margin: 15 }}>
             <View>
                <Text style={{ fontSize: 20, textAlign: "left" }}>Location</Text>
                <Text style={{ fontSize: 10, textAlign: "left" }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod 
                tempor incididunt ut labore et…</Text>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 7/2 }} source={require("../../assets/week3/map.jpg")} />
            </View>
        </View>

    );
}
