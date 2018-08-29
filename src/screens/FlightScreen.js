//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { inject, observer } from 'mobx-react'
import Header from '../components/Header';
import FlightForm from '../components/FlightForm';
import FlightDetails from '../components/FlightDetails';

@inject('flightStore')
@observer
class FlightScreen extends Component {


    navigateBack = () => {

    }

    render() {
        return (
            <ImageBackground
                source={require('../img/bg.jpg')}
                style={styles.container}>
                <FlightDetails navigation={this.props.navigation} />
            </ImageBackground>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',   
    },

});

//make this component available to the app
export default FlightScreen;
