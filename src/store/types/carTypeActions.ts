export interface Car {
  id: number;
  model: string;
  color: string;
  year: number;
  insuranceValidity: string;
  kms: number;
  location: string;
  noOfOwners: number;
  transmission: string;
  externalFitments: string;
  photo: string;
  brandName: string;
}

export interface Modal {
  name: string;
  logo: string;
}

export const ADD_CAR = 'ADD_CAR';

export interface AddCarAction {
  type: typeof ADD_CAR;
  payload: Car;
}

export type CarActionTypes = AddCarAction;