import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";
import { Image } from "react-native";

export default function Event(props) {
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json ');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }
    useEffect(() => {
        loadOnlineTours();
    }, []);
    return (

        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Up coming Event</Text>
            <Text style={{ color: "grey" }} >What the Worst That Could Happend</Text>
            <FlatList
                //  horizontal={false}
                //  numColumns={2}
                //  columnWrapperStyle={{ justifyContent: 'space-between'}}

                horizontal={true}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }}>
                                <Image style={{ width: 350, height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{
                                    uri: item.uri
                                }} />
                                <View style={{ flexDirection: "row", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderWidth: 0.7 }}>
                                    <View style={{ padding: 5 }}>
                                        <Text style={{ fontSize: 18, color: "red", textAlign: "left" }}>{item.month} </Text>
                                        <Text style={{ padding:5,fontSize: 15, color: "gray", textAlign: 'left' }}>{item.date}</Text>
                                    </View>
                                    <View style={{ padding: 5 }}>
                                        <Text style={{ fontSize: 18, color: "black" }}>{item.title} </Text>
                                        <Text style={{ color: "gray" }}>{item.datetime}</Text>
                                        <Text style={{ color: "gray" }}>{item.place}</Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }
                }
                                keyExtractor={item => item.id}
            />

                            </View>
                        );
                    }


