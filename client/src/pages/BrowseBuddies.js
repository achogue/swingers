import React, { useState } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
//import { SAVE_BUDDY } from '../utils/mutations';
import Auth from '../utils/auth';

const BrowseBuddies = () => {
  //const {myUsers, setMyUsers} = useState();
  const { loading, error, data } = useQuery(QUERY_USERS);
  // const [saveBuddy ] = useMutation(SAVE_BUDDY);

  // get token
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return "OOPS! You're not logged in.";
  }
    
  // // create state to hold saved buddy email values
  //  const [savedBuddyEmails, setSavedBuddyEmails] = useState();

  
  // // const [showAlert, setShowAlert] = useState(false);
  // // const {myUser, setMyUser} = useState();

  // const handleSaveBuddy = async (email) => {
    
  //   // get token
  //   //const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   // if (!token) {
  //   //   return false;
  //   // }

  //   try {
  //     const { data } = await saveBuddy({
  //       variables: { buddyEmail: { ...email } },
  //     });

  //     console.log(savedBuddyEmails);

  //     setSavedBuddyEmails([...savedBuddyEmails, email]);

  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  if (loading) return null;
  if (error) return "Error!";

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Browse for a Buddy!</h1>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          Viewing results
        </h2>

        
          {data.getUsers.map((buddy) => {
          // <BrowseBuddy buddy={buddy} /> 
        
          return (
            
            ProduceBuddy(buddy)
                      
            )      
          })}
        
      </Container>
    </>
  );
};

export default BrowseBuddies;

function ProduceBuddy(buddy){

  //const [saveBuddy, {error} ] = useMutation(SAVE_BUDDY);
  // create state to hold saved buddy email values
  //const [savedBuddyEmails, setSavedBuddyEmails] = useState();

  
// const [showAlert, setShowAlert] = useState(false);
// const {myUser, setMyUser} = useState();

  const handleSaveBuddy = async (email) => {
  
    // get token
    //const token = Auth.loggedIn() ? Auth.getToken() : null;

    // if (!token) {
    //   return false;
    // }

    try {
      // const { data } = await saveBuddy({
      //   variables: { buddyEmail: { ...email } },
      // });

      //console.log(savedBuddyEmails);

      //setSavedBuddyEmails([...savedBuddyEmails, email]);

    } catch (err) {
      console.error(err);
    }
  };

  return(
            <Row>
                <Col md="4"></Col>
                <Card border="dark" className='mb-3'>
                    <Card.Body>
                        <Card.Title>{buddy.username}</Card.Title>
                        <Card.Text>{buddy.email}</Card.Text>
                        <p>Handicap? {buddy.handicap}</p>
                        <p>Ride/Walk? {buddy.motorPreference}</p>
                        <p>Smoke? {buddy.smoke}</p>
                        {/* {Auth.loggedIn() && (
                                <Button
                                     disabled={savedBuddyEmails?.some(
                                     (savedEmail) => savedEmail === buddy.email
                                     )}
                                    className="btn-block btn-info"
                                    onClick={() => handleSaveBuddy(buddy.email)}
                                >
                                   
                                </Button>
                                )}  */}
                                      
                    </Card.Body>
                </Card>
            </Row>
  )
}