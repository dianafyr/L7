import React, {useState} from 'react';
import {datasource} from "./Data";
import {TextInput, View, Text, Button, Alert} from "react-native";

const Edit = ({navigation, route}) => {
    const [food, setFood] = useState(route.params.key);
    const [calories, setCalories] = useState(route.params.calories);

    return (
        <View style={{padding:10}}>

            <View style={{padding:10}}>
                <Text style={{fontWeight:'bold'}}>Letter:</Text>
                <TextInput value = {food} style ={{borderWidth: 1}} onChangeText={(text) => setFood(text)}/>
            </View>

            <View style={{padding:10}}>
                <Text style={{fontWeight:'bold'}}>Calories:</Text>
                <TextInput value = {String(calories)} style ={{borderWidth: 1}} onChangeText={(text) => setCalories(text)}/>
            </View>


            <View style={{padding:10, flexDirection: "row", justifyContent: "space-around"}}>

                <View style={{ flex: 1, margin: 10 }}>
                    <Button title="SAVE"
                            onPress={() => {
                                let indexNum = 1;
                                if (route.params.type == "Monday") {
                                    indexNum = 0;
                                } else if (route.params.type == "Wednesday") {
                                    indexNum = 2;
                                } else if (route.params.type == "Thursday") {
                                    indexNum = 3;
                                } else if (route.params.type == "Friday") {
                                    indexNum = 4;
                                } else if (route.params.type == "Saturday") {
                                    indexNum = 5;
                                } else if (route.params.type == "Sunday") {
                                    indexNum = 6;
                                }
                                datasource[indexNum].data[route.params.index].key = food;
                                datasource[indexNum].data[route.params.index].calories = calories;
                                navigation.navigate('Home');
                            }
                            }
                    />
                </View>


                <View style={{ flex: 1, margin: 10 }}>
                    <Button title="DELETE"
                            onPress={() => {
                                let indexNum = 1;
                                if (route.params.type == "Monday") {
                                    indexNum = 0;
                                } else if (route.params.type == "Wednesday") {
                                    indexNum = 2;
                                } else if (route.params.type == "Thursday") {
                                    indexNum = 3;
                                } else if (route.params.type == "Friday") {
                                    indexNum = 4;
                                } else if (route.params.type == "Saturday") {
                                    indexNum = 5;
                                } else if (route.params.type == "Sunday") {
                                    indexNum = 6;
                                }
                                Alert.alert("Are you sure?", " ",
                                    [{text: "Yes", onPress: () => {
                                            datasource[indexNum].data.splice(route.params.index, 1);
                                            navigation.navigate('Home');
                                        }},
                                        {text: "No"}]);
                            }
                            }
                    />

                </View>

            </View>

        </View>
    )
}

export default Edit;

