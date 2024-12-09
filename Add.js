import React, {useState} from 'react';
import {datasource} from "./Data";
import {TextInput, View, Text, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [food, setFood] = useState('');
    const [calories, setCalories] = useState('');
    const [type, setType] = useState('Monday');

    return(
        <View style={{padding:10}}>

            <View style={{padding:10}}>
                <Text style={{fontWeight:'bold'}}>Food:</Text>
                <TextInput style ={{borderWidth: 1}} onChangeText={(text) => setFood(text)}/>
            </View>

            <View style={{padding:10}}>
                <Text style={{fontWeight:'bold'}}>Calories:</Text>
                <TextInput style ={{borderWidth: 1}}
                           onChangeText={(text) => setCalories(text)} />
            </View>

            <View style={{padding:10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        {label: "Monday", value: "Monday"},
                        {label: "Tuesday", value: "Tuesday"},
                        {label: "Wednesday", value: "Wednesday"},
                        {label: "Thursday", value: "Thursday"},
                        {label: "Friday", value: "Friday"},
                        {label: "Saturday", value: "Saturday"},
                        {label: "Sunday", value: "Sunday"}
                    ]}
                />
            </View>

            <Button title="ADD CARD"
                    onPress={() => {
                        let item = {food: food, calories: calories};
                        let indexNum = 1;
                        if (type == "Monday") {
                            indexNum = 0;
                        } else if (type == "Wednesday") {
                            indexNum = 2;
                        } else if (type == "Thursday") {
                            indexNum = 3;
                        } else if (type == "Friday") {
                            indexNum = 4;
                        } else if (type == "Saturday") {
                            indexNum = 5;
                        } else if (type == "Sunday") {
                            indexNum = 6;
                        }

                        datasource[indexNum].data.push(item);
                        navigation.navigate('Home');
                    }
                    }
            />

        </View>

    );
};

export default Add;
