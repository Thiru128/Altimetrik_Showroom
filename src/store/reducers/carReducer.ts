import { ADD_CAR, Car, CarActionTypes, } from "../types/carTypeActions";

const initialState: Car[] = [];

const carReducer = (state = initialState, action: CarActionTypes): Car[] => {
  switch (action.type) {
    case ADD_CAR:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default carReducer;