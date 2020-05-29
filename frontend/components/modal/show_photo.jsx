import React from 'react'

class ShowPhoto extends React.Component {
  constructor(props){
    super(props)
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    setTimeout(()=>{
      const modalChild = document.getElementsByClassName("modal-child")[0];
      modalChild.classList.remove('modal-child');
      modalChild.classList.add('modal-child-photo-container');
    }, 0)
  }

  render () {
    return (
      <div>
        {this.toggleClass()}
        <img src={this.props.photoUrl} />
      </div>
    )
  }

}

export default ShowPhoto;