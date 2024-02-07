import { ADD_CAR, Car, CarActionTypes } from "../types/carTypeActions";

export const addCar = (car: Car): CarActionTypes => ({
  type: ADD_CAR,
  payload: car,
});