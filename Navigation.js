import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './Home.js';
import Edit from './Edit.js';
import Add from './Add.js';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Edit" component={Edit} />
                <Stack.Screen name="Add" component={Add} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
