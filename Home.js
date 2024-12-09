import React, {useState} from 'react';
import {View, Text, StatusBar, Button, StyleSheet, SectionList, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {datasource} from './Data';
import {useNavigation} from '@react-navigation/native';
import RNPickerSelect from "react-native-picker-select";


const styles = StyleSheet.create({
    screen: {
        margin: 5,
        padding: 20,
        marginBottom: 100,
        backgroundColor: 'antiquewhite',
        fontFamily: 'sans-serif',
    },
    textStyle: {
        fontSize: 20,
        margin: 5,
        textAlign: 'center'
    },
    arrange: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.5,
        borderRadius: 10,
    },
    buttons: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: 'lightgrey',
        borderWidth: 0.5,
    }
});



const Home =({navigation}) => {
    const [results, setResults] = useState([]);
    const [selected, setSelected] = useState("Men");

    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('Edit', {index: index, key: item.food, calories: item.calories, type: section.title});
            }}>
                <View style={styles.arrange}>
                    <Text style={[styles.textStyle, {fontSize: 15}]}>{item.food}</Text>
                    <Text style={[styles.textStyle, {fontSize: 15}]}>|  Calories: {item.calories}</Text>
                </View>
            </TouchableOpacity>

        )
    }

    const calculateCalories = () => {
        const recommendedCalories = selected === 'Men' ? 2000 : 1600;
        const results = datasource.map (day => {
            const totalCalories = day.data.reduce((sum, item) => sum + item.calories, 0);
            return `${day.title}: Total Calories = ${totalCalories} (${totalCalories > recommendedCalories ? 'Above' : 'Below'} Recommended)`;
            });

        Alert.alert(
            'Daily Calories Summary',
            results.join('\n'),
            [{text: 'OK'}]
        );
    };

    return (
        <View style={styles.screen}>
            <StatusBar />
            <View style={styles.buttons}>
                <Button title="ADD" onPress={() => {navigation.navigate('Add')}}/>
                <Button title = "Calculate total daily calories" onPress={calculateCalories} />
            </View>

            <RNPickerSelect onValueChange={(value) => setSelected(value)} value={selected} items={[
                {label: "Men", value: "Men"},
                {label: "Women", value: "Women"}
            ]} />

            <SectionList sections={datasource} renderItem={renderItem} renderSectionHeader={({section: {title, bgColor}}) => (
                <Text style={[styles.textStyle, {backgroundColor: bgColor, borderWidth: 0.5, fontWeight: 'bold', borderRadius: 5, marginTop: 20}]}>{title}</Text>
            )}/>

        </View>
    )
}

export default Home;
