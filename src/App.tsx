import React from "react";
import SongList from 'SongList'
import SongDetail from 'SongDetail'

type props = {};

const App: React.FC<props> = () => {
  return (
    <div className="ui container grid">
      <div className="ui row"  style={{ marginTop: "20vh" }}>
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;