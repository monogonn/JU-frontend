import React from "react";
import { Carousel } from "react-responsive-carousel";

function ExploreDetail(props) {
  console.log(props);
  const propDetails = props.location.state.state;
  console.log(propDetails);

  return (
    <div className="exploreDetailContainer">
      <div className="exploreDetails">
        <Carousel
          thumbWidth="0"
          showThumbs="false"
          infiniteLoop="true"
          autoPlay="true"
          stopOnHover="false"
          emulateTouch="true"
          interval="2000"
          dynamicHeight="false"
        >
          {propDetails.img_link.map((images, idx) => (
            <div>
              <img src={images} key={images} />
            </div>
          ))}
        </Carousel>
        {/* <h1>{propDetails.title}</h1> */}
      </div>
    </div>
  );
}

export default ExploreDetail;
