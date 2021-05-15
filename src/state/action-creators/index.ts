import { ActionType } from "../actions";
import type { Song } from '../reducers/SongsReducer' 

export const selectorSong = (song: Song) => {
  return {
    type: ActionType.SELECTED,
    payload: song,
  };
};
