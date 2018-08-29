//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Your flights</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff9100',
    },
});

//make this component available to the app
export default Header;
