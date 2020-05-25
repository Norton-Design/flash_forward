import React from 'react';
import RouteFinderContainer from '../routes/route_finder/route_finder_container'
// IMPORT FEATURED PHOTOS CONTAINER

class MainBanner extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      total: 0
    }
  }



  render(){
    let newTotal = 0;
    const myNodeList = document.getElementsByClassName('parent-area-route-count');

    setTimeout( ()=>{
        for (var i = 0; i < myNodeList.length - 1; ++i) {
            newTotal += parseInt(myNodeList.item(i).innerHTML);
            }

        if (this.state.total !== newTotal) {
          this.setState({
            total: newTotal});
        }
    }, 0)

    return (
    <div className="main-banner">
      <div className="main-banner-sub">
        <div className="featured-photos-container">
        </div>
        <div className="main-banner-right">
          <h1>Beyond the Guidebook</h1>
          <h3>{this.state.total} Routes shared by Climbers Like You</h3>
          <hr />
          <RouteFinderContainer/>
        </div>
      </div>
    </div>
    )
  }
}

export default MainBanner;