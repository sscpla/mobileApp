import React from 'react';
import { Image, View,Text} from 'react-native';
import MyIcon from './MyIcon';

export default function Section5() {
    return (
        <View style={{ flexDirection: "row", margin: 15 }}>

            <MyIcon title="Wifi" name="wifi" size={30} color="#6699CC" />
            <MyIcon title="Coffee" name="coffee" size={30} color="#6699CC" />
            <MyIcon title="Bath" name="bath" size={30} color="#6699CC" />
            <MyIcon title="Car" name="car" size={30} color="#6699CC" />
            <MyIcon title="Paw" name="paw" size={30} color="#6699CC" />

        </View>

    );
}
