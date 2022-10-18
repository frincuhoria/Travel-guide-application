import { AnyAction } from "redux";

interface IAppState {
    users: any[],
}

const initialState:IAppState = {
  users: [],
};

export const reducer = (state = initialState, action: AnyAction) => {
    const { payload, type} = action;

  switch (type) {
    case "REGISTER":
      return {...state, users: [...state.users, payload],};
    default:
      return state;
  }
};

