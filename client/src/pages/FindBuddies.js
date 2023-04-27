import React, { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

import {  useQuery } from '@apollo/client';
//import { SAVE_BUDDY } from '../utils/mutations';
import { QUERY_USER_BY_ID } from '../utils/queries';
//import { saveBuddyIds, getSavedBuddyIds } from '../utils/localStorage';
import FindBuddy from './FindBuddy';


const FindBuddies = () => {
  // create state for holding returned google api data
  //const [searchedBuddies, setSearchedBuddies] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  //const [savedBuddyIds, setSavedBuddyIds] = useState(getSavedBuddyIds());

  //const {user, error } = useQuery(QUERY_USER_BY_ID);
  const [showAlert, setShowAlert] = useState(false);
  const {myUser, setMyUser} = useState();

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  // useEffect(() => {
  //   if (error) {
  //     setShowAlert(true);
  //   } else {
  //     setShowAlert(false);
  //   }
  // }, [error]);

  // create method to search for books and set state on form submit
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!searchInput) {
  //     return false;
  //   }

  //   console.log("search input",searchInput);

  //   // try {
  //     // const { data } = await user({
  //     //   variables: { ...searchInput },
  //     // });

  //     // console.log(data);
  //     // myUser =setMyUser(data);

      
  //     // setSearchInput('');
  //   // } catch (err) {
  //   //   console.error(err);
  //   // }
  // };

  
  
  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Search for a Buddy!</h1>
          <Form>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Enter a buddy email"
                />
              </Col>
              <Col xs={12} md={4}>
                
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          {searchInput
            ? `Viewing results:`
            : 'Search for a buddy to begin'}
        </h2>
          
            
        {searchInput !== '' && searchInput.length > 0 &&
        <Row>
              <Col md="4">
                <FindBuddy email={searchInput} />

              </Col>
        </Row>
      }
      </Container>
    </>
  );
};

export default FindBuddies;
