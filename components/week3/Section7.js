import React from 'react';
import { Image, View,Text} from 'react-native';
import MyIcon from './MyIcon';

export default function Section7() {
    return (
        <View style={{}}>
            <View>
                <Text style={{ fontSize: 20, textAlign: "left" }}>Room Type</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 150 , height: 100 }} source={require("../../assets/week3/room-8.jpg")} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 20, textAlign: "left" }}>Standard Twin Room</Text>
                <Text style={{ fontSize: 17, textAlign: 'left' ,color:'#CC6666'}}> $399.99</Text>
                <Text style={{ fontSize: 17, textAlign: "left" ,color:'#99CCFF'}}>Hurry Up! This is your last room!</Text>
            </View>
            </View>
        </View>

    );
}
