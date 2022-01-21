import React from 'react';
import {Text, Button, StyleSheet, View, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
      <View>
        <Text style={styles.text}>HomeScreen</Text>
        <Button
            title="Go to Components Demo"
            onPress={() => navigation.navigate('Components')}
        />
        <TouchableOpacity
            onPress={() => navigation.navigate('List')}
        >
          <Text>Go To List Demo</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
