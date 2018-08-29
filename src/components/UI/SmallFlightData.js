//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HR from './HR';
// create a component
const SmallFlightData = (
    {
        departureAirport,
        arrivalAirportLong,
        departureAirportLong,
        scheduledDeparture,
        scheduledArrival,
        terminalArrival,
        terminalDeparture,
        date,
        gate
    }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.destinationText}>Departs {departureAirportLong} on {date}</Text>
            <HR />
            <View style={styles.dataHolder}>
                <View style={styles.dataHolderInner}>
                    <Text style={styles.headerText}>Scheduled</Text>
                    <Text style={styles.dataText}>{scheduledDeparture}</Text>
                </View>
                <View style={styles.dataHolderInner}>
                    <Text style={styles.headerText}>Estimated</Text>
                    <Text style={styles.dataText}>{scheduledArrival}</Text>
                </View>
                <View style={styles.dataHolderInner}>
                    <Text style={styles.headerText}>Terminal</Text>
                    <Text style={styles.dataText}>{terminalDeparture}</Text>
                </View>
                <View style={styles.dataHolderInner}>
                    <Text style={styles.headerText}>Gate</Text>
                    <Text style={styles.dataText}>{gate}</Text>
                </View>

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        marginTop: 20,
    },
    destinationText: {
        color: '#ccc'
    },
    dataHolder: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

        alignSelf: 'stretch',
    },
    headerText: {
        color: '#ccc'
    },
    dataText: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

//make this component available to the app
export default SmallFlightData;
