import React from "react";
import { Container } from "react-bootstrap";
import golfPic from "../images/golf-emoji.png";
import { Center } from "@chakra-ui/react";
import background from "../images/swingers-bg.jpg";

const Home = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",
      height:3200, width:2580 }}>
<Center>
<h2 className="pt-3" padding="15">Welcome to Swingers!</h2>
</Center>
<Center>
<img src={golfPic}></img>
</Center>

      <Center h="1920">
        {/* <h2 className="pt-3">Welcome to Swingers!</h2> */}
      </Center>

      {/* <Center h="600px"> */}
        {/* <img src={golfPic}></img> */}
      {/* </Center> */}

      </div>
    </>
  );
};

export default Home;
