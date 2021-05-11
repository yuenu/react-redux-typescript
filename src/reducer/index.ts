import { combineReducers } from "redux";

// Type
type Song = {
  title: string;
  duration: string;
};

const songsReducer: () => Song[] = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All star", duration: "3:14" },
    { title: "I Want it That Way", duration: "1: 45" },
  ];
};

const selectedSongReducer = (
  selectedSong: string | null = null,
  action: any
) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
