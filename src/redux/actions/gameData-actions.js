import { SET_GAMES } from "../action-types/gameData-action-types";

export const setGameData = data => {
  return {
    type: SET_GAMES,
    payload: data
  };
};
