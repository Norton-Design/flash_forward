import React from 'react'

class ShowPhoto extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <div>
        <img src={this.props.photoUrl} />
      </div>
    )
  }

}

export default ShowPhoto;