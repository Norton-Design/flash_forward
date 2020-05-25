import React from 'react';
import RouteFinderContainer from '../routes/route_finder/route_finder_container'
// IMPORT FEATURED PHOTOS CONTAINER

class MainBanner extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    // let total = 0;
    // const myNodeList = document.getElementsByClassName('parent-area-route-count');

    // for (var i = 0; i < myNodeList.length; ++i) {
    //   console.log(myNodeList[i].innerHTML)
    //   total += myNodeList[i].innerHTML;
    //  }

    // console.log(total);


    return (
    <div className="main-banner">
      <div className="main-banner-sub">
        <div className="featured-photos-container">
        </div>
        <div className="main-banner-right">
          <h1>Beyond the Guidebook</h1>
          <h3>300 Routes shared by Climbers Like You</h3>
          <hr />
          <RouteFinderContainer/>
        </div>
      </div>
    </div>
    )
  }
}

export default MainBanner;