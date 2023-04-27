// import React, { useState } from 'react';
// import {
//      Card,
//      Row,
//      Col,
//      Button
//   } from 'react-bootstrap';
// import { useQuery } from '@apollo/client';
// import { QUERY_USERS } from '../utils/queries';
// import Auth from '../utils/auth';

// function BrowseBuddy (props){
//     const {myUsers, setMyUsers} = useState();
//     const { loading, error, data } = useQuery(QUERY_USERS);
    
//     if (loading) return null;
//     if (error) return "Error!";

//     setMyUsers(data.getUsers);

   
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error!</div>;
    
   
//     if(data.getUsers === null)
//     {
//         return(
//             <Row>
//               <Col md="4"></Col>
//                 <Card border="dark" className='mb-3'>
//                     <Card.Body>
//                         <Card.Title>The data is not being returned from mongoose</Card.Title>
//                     </Card.Body>
//                 </Card>
//             </Row>
//         )
//     }

    
        
            return (
                <Row>
                    <Col md="4"></Col>
                    <Card border="dark" className='mb-3'>
                        <Card.Body>
                            <Card.Title>{props.buddy.username}</Card.Title>
                            <Card.Text>{props.buddy.email}</Card.Text>
                            <p>Handicap? {props.buddy.handicap}</p>
                            <p>Ride/Walk? {props.Authbuddy.motorPreference}</p>
                            <p>Smoke? {props.buddy.smoke}</p>
                            
                        </Card.Body>
                    </Card>
                </Row>
            )
        
    
// }

// export default BrowseBuddy;