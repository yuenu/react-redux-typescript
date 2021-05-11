import React from 'react'
import { connect } from 'react-redux'

// Type
type Props = {

}

const SongList: React.FC<Props> = (props: any) => {
  console.log(props)
  return (
    <div>List</div>
  )
}

const mapStateToProps = (state: any) => {
  return { song: state.songs}
}



export default connect(mapStateToProps)(SongList)