import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import ImageDetailComponent from "../components/ImageDetailComponent";

const ImageScreen = () => {
    const data = [
        {
            title: 'Forest 1',
            imageUrl: 'https://reactnative.dev/img/tiny_logo.png'
        },
        {
            title: 'Forest 2',
            imageUrl: 'https://reactnative.dev/img/tiny_logo.png'
        },
        {
            title: 'Forest 3',
            imageUrl: 'https://reactnative.dev/img/tiny_logo.png'
        }
    ]
    return (
        <View>
            <Text style={styles.textLarge}>ImageScreen</Text>

            <FlatList
                data={data}
                renderItem={ImageDetailComponent}
                keyExtractor={(data) => data.title}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textLarge: {
        fontSize: 45,
    }
});

export default ImageScreen;
