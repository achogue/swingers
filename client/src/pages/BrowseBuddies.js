import React, { useEffect, useState } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME, QUERY_USERS } from '../utils/queries';
import { SAVE_BUDDY } from '../utils/mutations';
import Auth from '../utils/auth';
import { saveBuddyEmails, getSavedBuddyEmails } from '../utils/localStorage';

const BrowseBuddies = () => {
  //const { data: dataR, error: errorR, loading: landingR } = useQuery(GET_RESTAURANTS);
  //const { data, error, loading } = useQuery(GET_DAILY_MENU);
  const { loading: loadingme, error: errorme, data: datame } = useQuery(QUERY_ME);
  const userData = datame?.me || {};
  const { loading, error, data} = useQuery(QUERY_USERS);
  const [saveBuddy ] = useMutation(SAVE_BUDDY);
    
    // console.log("user data: ",userData);
  
 
    // create state to hold saved buddy email values
   const [savedBuddyEmails, setSavedBuddyEmails] = useState(getSavedBuddyEmails());
   const [key, setKey] = useState();

  
   useEffect(() => {
    return () => saveBuddyEmails(savedBuddyEmails);
    
  });

  // console.log("saved buddy emails: ",savedBuddyEmails);
 
  //get token
  const token = Auth.loggedIn() ? Auth.getToken() : null;


  if (!token) {
    return false;
  }


   const handleSaveBuddy = async (email) => {
  
    try {
      //save to mongo
      const { data } = await saveBuddy({
        variables: { buddyEmail: email  },
      });


      //save to local storage      
      saveBuddyEmails([...savedBuddyEmails, email]);
      

      //save page state
      //setSavedBuddyEmails([...savedBuddyEmails, email]);
      setSavedBuddyEmails(getSavedBuddyEmails());
      setKey(Math.random());

    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return null;
  if (error) return "Error!";

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Browse for a Buddy {userData.username}!</h1>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          Viewing results
        </h2>
        
          {data.getUsers.map((buddy) => {
            if (userData.email === buddy.email){
              return null;
            }
            
          return (
            <Row key={buddy._id}>
                <Col md="4"></Col>
                <Card border="dark" className='mb-3'>
                    <Card.Body>
                        <Card.Title>{buddy.username}</Card.Title>
                        <Card.Text>{buddy.email}</Card.Text>
                        <p>Handicap? {buddy.handicap}</p>
                        <p>Ride/Walk? {buddy.motorPreference}</p>
                        <p>Smoke? {buddy.smoke}</p>
                        {Auth.loggedIn() && userData.email !== buddy.email && (
                                <Button
                                     disabled={savedBuddyEmails?.some(
                                     (savedEmail) => savedEmail === buddy.email
                                     )}
                                    className="btn-block btn-info"
                                    onClick={() => handleSaveBuddy(buddy.email)}
                                >
                                   {savedBuddyEmails?.some((savedEmail) => savedEmail === buddy.email)
                                      ? 'Buddy Already Saved!'
                                      : 'Save This Buddy!'}
                                </Button>
                                )} 
                                      
                    </Card.Body>
                </Card>
            </Row>
            )      
          })}
        
      </Container>
    </>
  );
};

export default BrowseBuddies;

