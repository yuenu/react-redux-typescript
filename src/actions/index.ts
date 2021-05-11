// Action creator
export const selector = (song: string) => {

  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}
