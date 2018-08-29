import { observable, computed, action, createTransformer } from 'mobx';

export default class FlightStore {
    // would normally come from API
     flightData = [
        {
            flightCode: 'ABC',
            flightNumber: 'DLT12',
            arrivalAirport: 'JFK',
            departureAirport: 'LHR',
            arrivalAirportLong: 'John F. Kennedy International Airport',
            departureAirportLong: 'London Heathrow',
            scheduledDeparture: '08:00',
            scheduledArrival: '15:00',
            terminalArrival: '5',
            terminalDeparture: '5',
            date: 'July 26th, 2019',
            gate: '32'
        },
        {
            flightCode: 'XYZ',
            flightNumber: 'DLT42',
            arrivalAirport: 'LHR',
            departureAirport: 'SYD',
            arrivalAirportLong: 'John F. Kennedy International Airport',
            departureAirportLong: 'Sydney International Airport',
            scheduledDeparture: '08:00',
            scheduledArrival: '09:00+1',
            terminalArrival: '1',
            terminalDeparture: '1',
            date: 'Aug 26th, 2019',
            gate: '16'
        }
    ]
    @observable currentFlightData = {}
    @observable errorMessage = '';

    // Simple MOBX test to get data from mock. Would go to API normally
    @action checkFlightCoupon(coupon) {
        const trimmedCoupon = coupon.trim()
        this.errorMessage = '';
        const newData = this.flightData.find(flight => {
            return flight.flightCode === trimmedCoupon
        })
        if(newData) {
            this.currentFlightData = newData
            this.errorMessage = '';
        } else {
            this.currentFlightData = {}
            this.errorMessage = 'No flight found';
        }                
    }

    // Simple remove flight detail to change state
    // would navigate using some router in real app
    @action removeCurrentFlight() {
        this.currentFlightData = {}
    }


   

}