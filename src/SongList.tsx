import React from "react";
import { connect } from "react-redux";
import { Song, State, selectorSong } from "state";

type Props = {
  songs: Song[];
  selectorSong: (song: Song) => { payload: Song };
};

const SongList: React.FC<Props> = ({ songs, selectorSong }) => {
  return (
    <div className="ui divided list">
      {songs.map((song: Song) => {
        return (
          <div className="item" key={song.title}>
            <div className="right floated content">
              <button
                onClick={() => selectorSong(song)}
                className="ui button primary"
              >
                Select
              </button>
            </div>
            <div className="content">{song.title}</div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectorSong })(SongList);
