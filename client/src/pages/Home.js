import React from 'react';
import {
  Container,
  
} from 'react-bootstrap';


const Home = () => {
  
  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Find a Golfing Buddy!</h1>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          Join and then find a buddy to begin
        </h2>
            
        
      </Container>
    </>
  );
};

export default Home;
