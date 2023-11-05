import Flights from '../assets/flights.json'

export const  getAvailableFlights = async({origin,destination}: {origin:string,destination:string}) => {
    return Flights.flights.filter(flight => flight.originAirport.city.name === origin && flight.destinationAirport.city.name === destination)
}