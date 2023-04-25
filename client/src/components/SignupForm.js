import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
    handicap: '',
    motorPreference: '',
    smoke: '',
    buddyMotorPreference: '',
    buddySmokingPreference: '',
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log("data: " + data);
      
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      handicap: '',
      motorPreference: '',
      smoke: '',


    });
  };

  

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor="handicap">Handicap</Form.Label>
          <Form.Control
            type="number"
            placeholder="Your handicap"
            name="handicap"
            onChange={handleInputChange}
            value={userFormData.handicap}
            required
          />
          <Form.Control.Feedback type="invalid">
            Handicap is required!
          </Form.Control.Feedback>
        </Form.Group>



        <Form.Group className='mb-3'>
          
            <Form.Select 
              name="motorPreference"
              onChange={handleInputChange}
              value={userFormData.motorPreference}
              required
              aria-label="Default select example">
              <option>Do you ride or walk?</option>
              <option value="ride">I ride</option>
              <option value="walk">I walk</option>
            </Form.Select>
          <Form.Control.Feedback type="invalid">
            Ride/Walk is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
            <Form.Select 
              name="smoke"
              onChange={handleInputChange}
              value={userFormData.smoke}
              required
              aria-label="Default select example">
                <option>Do you smoke?</option>
              <option value="no">No, I dont smoke</option>
              <option value="yes">Yes, I do smoke</option>
            </Form.Select>
          <Form.Control.Feedback type="invalid">
            Smoking preference is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          
            <Form.Select 
              name="buddyMotorPreference"
              onChange={handleInputChange}
              value={userFormData.buddyMotorPreference}
              required
              aria-label="Default select example">
              <option>Does your buddy ride or walk?</option>
              <option value="ride">My buddy rides</option>
              <option value="walk">My buddy walks</option>
            </Form.Select>
          <Form.Control.Feedback type="invalid">
            Ride/Walk is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          
            <Form.Select 
              name="buddySmokingPreference"
              onChange={handleInputChange}
              value={userFormData.buddySmokingPreference}
              required
              aria-label="Default select example">
                 <option>Does your buddy smoke?</option>
              <option value="no">No, my buddy doesn't smoke</option>
              <option value="yes">Yes, my buddy smokes</option>
            </Form.Select>
          <Form.Control.Feedback type="invalid">
            Buddy Smoking preference is required!
          </Form.Control.Feedback>
        </Form.Group>
        
        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password && 
              userFormData.handicap &&
              userFormData.motorPreference &&
              userFormData.smoke &&
              userFormData.buddyMotorPreference &&
              userFormData.buddySmokingPreference
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
