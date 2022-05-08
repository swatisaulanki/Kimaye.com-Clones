import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Div = styled.div`
  height: 500px;
  width: 95%;
  margin: auto;
  opacity: 0.9;
  background: #d9cfcf;
`;

const Calender = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Div>
      <Carousel responsive={responsive}>
        {/* 1 */}
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <div style={{color: "black", display: "inline-block", margin: "110px 120px 0 0", textAlign: "left"}}>
            <h4 style={{fontSize: "27px", textDecoration:"none"}}>Grown responsibly</h4>
            <p style={{marginTop: "20px", fontSize: "19px"}}>
              We follow G.A.P. (Good <br /> Agriculture Practices) to ensure <br /> food safety
            </p>
          </div>
          <div>
            <img
              style={{
                height: "400px",
                width: "550px",
                marginRight:"40px",
                borderRadius: "35px",
              }}
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-1_guetzli-min.jpg?v=1614755149"
              alt=""
            />
          </div>
        </div>

        {/* 2 */}
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <div style={{color: "black", display: "inline-block", margin: "100px 120px 0 0", textAlign: "left"}}>
            <h4 style={{fontSize: "27px"}}>Handpicked <br /> at farms</h4>
            <p style={{marginTop: "20px", fontSize: "19px"}}>
              Our trained harvesting <br /> supervisors ensure only <br /> the best fruits are picked.
            </p>
          </div>
          <div>
            <img
              style={{
                height: "400px",
                width: "550px",
                marginRight:"60px",
                borderRadius: "35px",
              }}
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-2_guetzli-min.jpg?v=1622009925"
              alt=""
            />
          </div>
        </div>

        {/* 3 */}
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <div style={{color: "black", display: "inline-block", margin: "100px 120px 0 0", textAlign: "left"}}>
            <h4 style={{fontSize: "27px"}}>Earning <br /> the Kimaye Badge</h4>
            <p style={{marginTop: "20px", fontSize: "19px"}}>
              Stringent quality checks at <br /> our automated pack house <br /> ensure only the best fruits <br /> go through.
            </p>
          </div>
          <div>
            <img
              style={{
                height: "400px",
                width: "550px",
                marginRight:"60px",
                borderRadius: "35px",
              }}
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-3_guetzli-min.jpg?v=1614755148"
              alt=""
            />
          </div>
        </div>

        {/* 4 */}
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <div style={{color: "black", display: "inline-block", margin: "100px 120px 0 0", textAlign: "left"}}>
            <h4 style={{fontSize: "27px"}}>Zero touch <br /> processes</h4>
            <p style={{marginTop: "20px", fontSize: "19px"}}>
              The fruits are then <br /> packaged and delivered <br /> fresh in a contamination-free <br /> enviornment
            </p>
          </div>
          <div>
            <img
              style={{
                height: "400px",
                width: "550px",
                marginRight:"60px",
                borderRadius: "35px",
              }}
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-4_guetzli-min.jpg?v=1622009925"
              alt=""
            />
          </div>
        </div>

        {/* 5 */}
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <div style={{color: "black", display: "inline-block", margin: "100px 120px 0 0", textAlign: "left"}}>
            <h4 style={{fontSize: "27px"}}>Finally</h4>
            <p style={{marginTop: "20px", fontSize: "19px"}}>
              Tell us all about how you <br /> enjoy our fruits using <br /> #allSafe#allGood
            </p>
          </div>
          <div>
            <img
              style={{
                height: "400px",
                width: "550px",
                marginRight:"60px",
                borderRadius: "35px",
              }}
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-5_guetzli-min.jpg?v=1622009925"
              alt=""
            />
          </div>
        </div>
        
      </Carousel>
      ;
    </Div>
  );
};

export default Calender;
