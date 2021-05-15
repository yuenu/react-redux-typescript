import React from "react";
import { connect } from "react-redux";
import { Song, State } from "state";

type Props = {
  Selectedsong: Song
}

const SongDetail: React.FC<Props> = ({ Selectedsong }) => {
  if (!Selectedsong) return (
    <div>Song Detail: Not yet selected</div>

  )

  return (
    <div>
      <div>Song Detail:</div>
      <p>{Selectedsong.title}</p>
      <p>{Selectedsong.duration}</p>
    </div>

  )
};

const mapStateToProps = (state: State) => {
  return { Selectedsong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
