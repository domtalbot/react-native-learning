import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList, Button} from 'react-native';

const ColorScreen = () => {
    let [colors, setColors] = useState([]);

    return (
        <View>
            <Text>ColorScreen</Text>

            <Button title="Add Color" onPress={() => {
                setColors([...colors, randomRgb()])
            }} />

            <FlatList data={colors} renderItem={ColorBox} keyExtractor={(item) => item} />
        </View>
    );
};

const styles = StyleSheet.create({
    baseBox: {
        width: 100,
        height: 100
    }
});

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const ColorBox = ({item}) => {
    return (
        <View style={[styles.baseBox, { backgroundColor: item} ]} />
    );
}

export default ColorScreen;
