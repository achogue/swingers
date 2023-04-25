import React from 'react';
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
import { removeBuddyId } from '../utils/localStorage';

import Auth from '../utils/auth';

const SavedBuddies = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [removeBuddy, { error }] = useMutation(REMOVE_BUDDY);

  const userData = data?.me || {};

  // create function that accepts the buddy's mongo _id value as param 
  // and deletes the buddy from the database
  const handleDeleteBuddy = async (buddyId) => {
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeBuddy({
        variables: { buddyId },
      });

      // upon success, remove buddy's id from localStorage
      removeBuddyId(buddyId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing {userData.username}'s buddies!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.buddies?.length
            ? `Viewing ${userData.buddies.length} saved ${userData.buddies.length === 1 ? 'buddy' : 'buddies'
            }:`
            : 'You have no saved buddies!'}
        </h2>
        <div>
          <Row>
            {userData.buddies?.map((buddy) => {
              return (
                <Col md="4">
                  <Card key={buddy.buddyId} border="dark">
                    <Card.Body>
                      <Card.Title>{buddy.email}</Card.Title>
                      
                      <Button
                        className="btn-block btn-danger"
                        onClick={() => handleDeleteBuddy(buddy.buddyId)}
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
