import { SET_GAMES } from "../action-types/gameData-action-types";

const initialState = [];
export const gameData = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES:
      return (state = [...state, action.payload]);
    default:
      return state;
  }
};
