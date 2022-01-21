import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

const validateChange = (value) => {
    return !(value < 0 || value > 255);
}

const changeColor = (props, value) => {
    if (validateChange(value)) {
        props.onChange(value);
    }
}

const ColorCounterComponent = (props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{props.title} Current Value: {props.value}</Text>
            <Button
                title={`More ${props.title} +`}
                onPress={() => changeColor(props,props.value + 1)}
            />
            <Button
                title={`Less ${props.title} -`}
                onPress={() => changeColor(props, props.value - 1)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginBottom: 10
    },
    view: {
        marginBottom: 50
    }
});

export default ColorCounterComponent;
