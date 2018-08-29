//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableHighlight } from 'react-native';
import { inject, observer } from 'mobx-react'
import HR from './UI/HR';
import SmallFlightData from './UI/SmallFlightData';
import { LinkButton } from './LinkButton';
// create a component
@inject('flightStore')
@observer
class FlightDetails extends Component {
    render() {
        const { 
            flightNumber, 
            arrivalAirport,
            departureAirport,
            arrivalAirportLong,
            departureAirportLong,            
            scheduledDeparture,
            scheduledArrival,
            terminalArrival, 
            terminalDeparture,
            date, 
            gate
        } = this.props.flightStore.currentFlightData;

        console.log(this.props.flightStore.flightData[0].flightCode)
        const offset = 200;
        return (
            <View style={styles.container}>
                <View style={styles.imageHolder}>
                    <Image style={styles.headerImage} source={require('../img/747.jpg')} />
                </View>
                <View style={styles.header}>
                        <Text style={styles.headerText}>FLIGHT DETAILS</Text>
                 </View>
                <View style={styles.card}>
                    <Text style={styles.flightText}>FLIGHT  {flightNumber}</Text>
                    <Text style={styles.destinationText}>{departureAirport} >>>>>>>>>>>>>>>>>> {arrivalAirport}</Text>
                   <SmallFlightData  
                    departureAirport={departureAirport}
                    arrivalAirportLong={arrivalAirportLong} 
                    departureAirportLong={departureAirportLong}          
                    scheduledDeparture={scheduledDeparture}
                    scheduledArrival={scheduledArrival}
                    terminalArrival={terminalArrival}
                    terminalDeparture={terminalDeparture}
                    date={date}
                    gate={gate}
                    />
                   
                   <View style={styles.buttonHolder}>
                   <LinkButton title='Back' onPressHandler={()=>this.props.navigation.navigate("Main")}/>    
                   </View>                   
                </View>                                                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
    },
    header: {
        height: 50,
        backgroundColor: '#e89a37',
        alignSelf:'stretch',
        alignItems: 'center',
        justifyContent: 'center'      
    },
    headerText: {
        fontWeight: 'bold',
        color: '#4d4a47',
        fontSize: 20
    },
    flightText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontSize: 18
    },
    destinationText: {
        marginTop: 10,
        color: '#2f7898',
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageHolder: {
        width: Dimensions.get('screen').width,
        height: 240,
        backgroundColor: '#fff'
    },
    headerImage: {
        flex: 1,
        width: null,
        height: null,
        
        alignSelf: 'stretch'
    },
   
    card: {
        flex: 1,
        backgroundColor: '#fff',
        alignSelf:'stretch',
        padding: 20,
        alignItems: 'flex-start'          
    },
    buttonHolder: {        
        flexDirection: 'row',
        marginTop: 20,       
        justifyContent: 'center',
        alignSelf:'stretch',
    }
});

//make this component available to the app
export default FlightDetails;
