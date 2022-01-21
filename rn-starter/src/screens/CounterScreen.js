import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList, Button} from 'react-native';

const CounterScreen = () => {
    let [count, setCount] = useState(0);

    return (
        <View>
            <Text>CounterScreen</Text>

            <Button title="Increase +" onPress={() => { setCount(count + 1)}} />
            <Button title="Decrease -" onPress={() => { setCount(count - 1)}}/>

            <Text>The Count is: {count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default CounterScreen;
