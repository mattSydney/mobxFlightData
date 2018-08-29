//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import { inject, observer } from 'mobx-react'
// create a component
@inject('flightStore')
@observer
class FlightForm extends Component {

    state = {
        couponCode: ''
    }

    render() {
        const { errorMessage } = this.props.flightStore;
        const offset = 0;

        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>FLIGHT DETAILS</Text>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={offset}
                    behavior="padding"
                    style={styles.flightSearchContainer}
                >
                    <View style={styles.formView}>
                        <Text style={styles.headerText}>
                            ENTER YOUR FLIGHT CODE
                        </Text>
                        <TextInput
                            value={this.state.couponCode}
                            onChangeText={(couponCode) => this.setState({ couponCode })}
                            style={styles.eventLoginInput}
                            autoCapitalize="characters"
                            underlineColorAndroid='transparent'
                        />
                        <TouchableHighlight
                            onPress={() => this.props.flightStore.checkFlightCoupon(this.state.couponCode)}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Enter</Text>
                        </TouchableHighlight>
                    </View>
                    <Text style={styles.errorText}>
                        {errorMessage}
                    </Text>
                </KeyboardAvoidingView>
                <View style={styles.navButtonsHolder}>

                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    flightSearchContainer: {
        flex: 1,
        borderWidth: 0,
        justifyContent: "center",
        width: "83%",
        alignItems: "center"
    },
    titleText: {
        marginTop: 30,
        fontSize: 20,
        color: '#fff'
    },

    headerText: {
        color: "#fff",
        fontWeight: 'bold'
    },
    errorText: {
        marginTop: 10,
        fontWeight: 'bold',
        color: "#f4426e",
    },
    eventLoginInput: {
        color: "#000000",
        backgroundColor: "white",
        width: 300,
        height: 44,
        paddingLeft: 10,
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
    },
    button: {
        height: 50,
        width: 300,
        backgroundColor: "#2f7898",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 22,
        color: "#FFF",
        alignSelf: "center"
    }
});

//make this component available to the app
export default FlightForm;
