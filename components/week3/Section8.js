import React from 'react';
import { Image, View, Text } from 'react-native';
import MyIcon from './MyIcon';
import { Button } from 'react-native-paper';

export default function Section8() {
    return (
        <View style={{ flexDirection: "row", margin: 15, padding: 5, borderTopWidth: 0.5, borderTopColor: '#999999' }}>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 20, textAlign: "left" }}>Price</Text>
                    <Text style={{ fontSize: 17, textAlign: 'left', color: '#CC6666' }}> $399.99</Text>
                    <Text style={{ fontSize: 17, textAlign: "left" }}>AVG/Night</Text>
                </View>
                <View style={{ height: 50, width: 100, borderRadius: 10/3, backgroundColor: '#CC6666', justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                    <Text style={{ fontSize: 20, color: "white" }}>Book Now</Text>
                </View>
            </View>
        </View>
    );
}
