
import React from 'react'
import pic1 from "../components/images/pic1.png"
import pic2 from "../components/images/pic2.png";
import pic3 from "../components/images/pic3.png";
import pic4 from "../components/images/pic4.png";
import pic5 from "../components/images/pic5.png";
import pic6 from "../components/images/pic6.png";
import pic7 from "../components/images/pic7.png";
import slide1 from "../components/images/slide1.png";
import slide2 from "../components/images/slide2.png";
import slide3 from "../components/images/slide3.png";
import Carousel from 'react-bootstrap/Carousel'

export const OurStory = () => {
  return (
    <>
    <div style={{width:"100%",margin:"auto"}}>
      <img src={pic1} />
      <img src={pic2} style={{marginTop:"-5px"}}/>
      <img src={pic3} style={{marginTop:"-5px"}}/>
      <img src={pic4} style={{marginTop:"-5px"}}/>
      <img src={pic5} style={{marginTop:"-5px"}}/>
      <img src={pic6} style={{marginTop:"-5px"}}/>
      <img src={pic7} style={{marginTop:"-5px"}}/>
      <div  style={{marginTop:"-5px", width:"89%", margin:"auto"}} >
        <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
              />
             
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
              />

          
            </Carousel.Item>
          </Carousel>
    </div>
    </div>
    
    </>

  )
}
