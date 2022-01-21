import React from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native";

const ListScreenComponent = () => {
    const friends = [
        {
            name: 'Friend 1',
            age: '25',
        },
        {
            name: 'Friend 2',
            age: '25',
        },
        {
            name: 'Friend 3',
            age: '25',
        },
        {
            name: 'Friend 4',
            age: '25',
        },
        {
            name: 'Friend 5',
            age: '25',
        },
        {
            name: 'Friend 6',
            age: '25',
        },
        {
            name: 'Friend 7',
            age: '25',
        },
        {
            name: 'Friend 8',
            age: '25',
        },
        {
            name: 'Friend 9',
            age: '25',
        },
        {
            name: 'Friend 10',
            age: '25',
        },
    ]
    return (
        <View>
            <FlatList
                data={friends}
                renderItem={FriendTemplate}
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}

const FriendTemplate = ({item}) => {
    return (
        <Text style={styles.friendTextStyle}>{item.name} - Age {item.age}</Text>
    )
}

const styles = StyleSheet.create({
    friendTextStyle: {
        fontSize: 30,
        marginVertical: 50
    },
});

export default ListScreenComponent;
