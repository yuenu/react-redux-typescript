import React from 'react'
import SongList from './components/SongList'

type Props = {
  
}

const Home: React.FC<Props> = () => {

  return (
    <div className="ui container">
      <SongList />
    </div>
  )
}

export default Home