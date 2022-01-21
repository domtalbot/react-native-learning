import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetailComponent = ({item}) => {
    return (
        <View>
            <Text style={styles.textLarge}>{ item.title }</Text>
            <Image
                source={{
                    uri: item.imageUrl
                }}
                style={styles.tinyLogo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50
    }
});

export default ImageDetailComponent;
