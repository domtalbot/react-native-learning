import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList, Button} from 'react-native';
import ColorCounterComponent from "../components/ColorCounterComponent";

const SquareScreen = () => {
    let [red, setRed] = useState(randomRgb());
    let [green, setGreen] = useState(randomRgb());
    let [blue, setBlue] = useState(randomRgb());

    return (
        <View>
            <Text>SquareScreen</Text>

            <ColorCounterComponent
                title="red"
                value={red}
                onChange={(value) => { setRed(value) }}
            />

            <ColorCounterComponent
                title="green"
                value={green}
                onChange={(value) => { setGreen(value) }}
            />

            <ColorCounterComponent
                title="blue"
                value={blue}
                onChange={(value) => { setBlue(value) }}
            />

            <View style={[styles.baseBox, { backgroundColor: `rgb(${red}, ${green}, ${blue})`} ]} />
        </View>
    );
};

const randomRgb = () => {
    return Math.floor(Math.random() * 255);
}


const styles = StyleSheet.create({
    baseBox: {
        width: 100,
        height: 100
    }
});


export default SquareScreen;
