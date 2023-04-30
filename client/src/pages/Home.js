import React from 'react';
import {
  Container,
  
} from 'react-bootstrap';
import golfPic from '../images/golf-emoji.png';
import { Center } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'

const Home = () => {
  
  return (
    <>

      <Center h="500">
        <h2 className='pt-3'>
          Welcome to Swingers!
        </h2>
        
     
      </Center>

      <Center h="300px">
      <img src={golfPic}></img>
      </Center>

 
    </>
  );
};

export default Home;
