import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const name = 'Dom';

  return (
      <View>
        <Text style={styles.textLarge}>Getting started with ReactNative</Text>
        <Text style={styles.text}>My name is {name}!</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  textLarge: {
    fontSize: 45,
  },
  text: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
