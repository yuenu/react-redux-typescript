import { combineReducers } from "redux";
import { songsReducer } from './SongsReducer'
import { selectedSongReducer } from './SelectedSongReducer'


export const reducer = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

export type State = ReturnType<typeof reducer>;
