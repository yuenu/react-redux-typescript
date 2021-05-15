import { ActionType, Action } from "../actions";
import type { Song } from './SongsReducer'


export const selectedSongReducer = (
  selectedSong: Song | null = null,
  action: Action
) => {
  switch (action.type) {
    case ActionType.SELECTED:
      return action.payload;
    default:
      return selectedSong;
  }
};
