import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Bmi() {   
    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0'); 
    const [status , setstatus] = useState('Normal');
    console.log("STATE : ", weight, height, bmi,status);
    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));
        let description = "";
        if (bmi < 18.5)
            description = "Underweight - eat a bagel!";
        else if (bmi >= 18.5 && bmi <= 24.99)
            description = "Normal - keep it up!";
        else if (bmi >= 25 && bmi <= 29.99)
            description = "Overweight - exercise more!";
        else if (bmi >= 30 && bmi <= 39.99)
            description = "Obese - get off the couch!";
        else
            description = "Morbidly Obese - take action!";
        setstatus(description);
    
    };

    return (
        <View>
        {/* แถวที่ 1 */}
        <View style={{backgroundColor : "white", padding:20,borderRadius:10, height : 100, justifyContent:"space-around", marginTop :20
}}>
            <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
            
            <TextInput style={{ fontSize: 20 }}placeholder="Input your weight"  value={ weight }  onChangeText={ (newWeight) => setWeight(newWeight) } />
        </View>
        {/* แถวที่ 2 */}
        <View style={{backgroundColor : "white", padding:20,borderRadius:10, height : 100, justifyContent:"space-around", marginTop :20}}>
            <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
            <TextInput style={{ fontSize: 20 }} placeholder="Input your height" value={ height } onChangeText={ (newHeight) => setHeight(newHeight) }/>
        </View>
        {/* แถวที่ 3 */}
        <View style={{flexDirection:'row',marginVertical:20}}>
            <View style={{backgroundColor:'white',flex:1,borderRadius:10,height:100,justifyContent:'center',alignItems:'center',marginRight:10}}>
                <Text style={{ fontSize: 20 }}  >BMI:{ bmi }</Text>
            </View>
            <View style={{backgroundColor:'white',flex:1,borderRadius:10,height:100,justifyContent:'center',alignItems:'center',marginLeft:10}}>
                <Text style={{ fontSize: 20 }}>{status }</Text>
            </View>
        </View>
        {/* แถวที่ 4 */}
        {/* <Button title="Calculate" onPress={ onPressButton } />             */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "pink", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>
     
        
    </View>
    );
}
