import React from 'react';

class Slideshow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoUrls: [
        "https://utilflashforwardbucket.s3.us-east-2.amazonaws.com/slide0.jpg",
        "https://utilflashforwardbucket.s3.us-east-2.amazonaws.com/slide1.jpg",
        "https://utilflashforwardbucket.s3.us-east-2.amazonaws.com/slide2.jpg",
        "https://utilflashforwardbucket.s3.us-east-2.amazonaws.com/slide3.jpg"
      ],
      currentPhoto: 0,
    };

    this.changePhoto = this.changePhoto.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.changePhoto, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changePhoto(nextPhotoIndex = ((this.state.currentPhoto + 1) % this.state.photoUrls.length)){
    document.getElementById(`dot-${this.state.currentPhoto}`).classList.remove("checked-dot");
    document.getElementById(`dot-${nextPhotoIndex}`).classList.add("checked-dot");
    this.setState({ currentPhoto: nextPhotoIndex });
  }

  selectPhoto(photo){
    clearInterval(this.interval);
    this.changePhoto(photo);
    this.interval = setInterval(this.changePhoto, 5000);
  }

  render() {
    const { photoUrls } = this.state;
    if (photoUrls.length === 0) return null; 

    return (
      <div className="main-slideshow">
        <div className="slideshow-dots">
          <span id="dot-0" onClick={() => this.selectPhoto(0)} className="checked-dot"></span>
          <span id="dot-1" onClick={() => this.selectPhoto(1)}></span>
          <span id="dot-2" onClick={() => this.selectPhoto(2)}></span>
          <span id="dot-3" onClick={() => this.selectPhoto(3)}></span>
        </div>
        <img src={photoUrls[this.state.currentPhoto]} alt="photo" />
      </div>
    );
  }


}

export default Slideshow;