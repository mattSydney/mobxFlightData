//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { inject, observer } from 'mobx-react'
import Header from '../components/Header';
import FlightForm from '../components/FlightForm';
import FlightDetails from '../components/FlightDetails';
// create a component



// create a component
@inject('flightStore')
@observer
class MainScreen extends Component {

    renderUI() {    
        const {  navigation } = this.props;    
        //console.log(this.props)
        const { currentFlightData } = this.props.flightStore;
        if (currentFlightData.flightCode) {
            navigation.navigate("Flight");
            //return <FlightDetails />
        }
        return <FlightForm />
    }

    render() {
        return (
            <ImageBackground
                source={require('../img/bg.jpg')}
                style={styles.container}>
                {this.renderUI()}
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
export default MainScreen;
