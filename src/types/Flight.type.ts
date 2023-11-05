export interface Flight {
  originAirport: OriginAirport
  destinationAirport: DestinationAirport
  arrivalDateTimeDisplay: string
  departureDateTimeDisplay: string
  flightDuration: string
  fareCategories: FareCategories
}

export interface OriginAirport {
  name: string
  code: string
  city: City
  country: Country
}

export interface City {
  code: string
  name: string
}

export interface Country {
  code: string
  name: string
}

export interface DestinationAirport {
  name: string
  code: string
  city: City
  country: Country
}


export interface FareCategories {
  BUSINESS: Business
  ECONOMY: Economy
}

export interface Business {
  subcategories: Subcategory[]
}

export interface Subcategory {
  brandCode: string
  price: Price
  order: number
  status: string
  rights: string[]
}

export interface Price {
  amount: number
  currency: string
}

export interface Economy {
  subcategories: Subcategory[]
}


