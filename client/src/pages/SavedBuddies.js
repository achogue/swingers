import React, {useState} from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_BUDDY } from '../utils/mutations';
import { removeBuddyEmail } from '../utils/localStorage';
import { saveBuddyEmails, getSavedBuddyEmails } from '../utils/localStorage';
import Auth from '../utils/auth';

const SavedBuddies = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [removeBuddy, { error }] = useMutation(REMOVE_BUDDY);
  const userData = data?.me || {};
  const [savedBuddyEmails, setSavedBuddyEmails] = useState(getSavedBuddyEmails());

  // get token
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }

  
  // create function that accepts the buddy's email as param 
  // and deletes the buddy from the buddy list 
  const handleDeleteBuddy = async (buddyEmail) => {
    
    try {
      const { data } = await removeBuddy({
        variables: { buddyEmail },
      });

      // upon success, remove buddy's email from localStorage.
      removeBuddyEmail(buddyEmail);
      
      setSavedBuddyEmails(getSavedBuddyEmails());
      
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid="true" className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing {userData.username}'s buddies!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.buddies?.length
            ? `Viewing ${savedBuddyEmails?.length} saved ${savedBuddyEmails?.length === 1 ? 'buddy' : 'buddies'
            }:`
            : 'You have no saved buddies!'}
        </h2>
        <div>
          <Row>
            {savedBuddyEmails.map((buddyEmail) => {
              return (
                <Col key={buddyEmail} md="4">
                  <Card  border="dark">
                    <Card.Body>
                      <Card.Title>{buddyEmail}</Card.Title>
                      <Button
                        className="btn-block btn-danger"
                        onClick={() => handleDeleteBuddy(buddyEmail)}
                      >
                        Delete this Buddy!
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
            
          </Row>
        </div>
      </Container>
    </>
  );
};

export default SavedBuddies;
