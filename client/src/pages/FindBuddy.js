import {
     Card
  } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_USER_BY_EMAIL } from '../utils/queries';
//import { getDefaultValues } from '@apollo/client/utilities';

function FindBuddy (props){
    var email = props.email;
    
    console.log("find buddy email", email);
   
    const { loading, error, data } =
        useQuery(QUERY_USER_BY_EMAIL, {variables: { email }
    });
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;
    
    console.log("data", data);

    if(data.getUserByEmail === null)
    {
        return(
        <Card border="dark" className='mb-3'>
            <Card.Body>
                <Card.Title>The data is not being returned from mongoose</Card.Title>
            </Card.Body>
        </Card>
        )
    }
    
    
    return (
        <Card border="dark" className='mb-3'>
            <Card.Body>
                <Card.Title>{data.getUserByEmail.username}</Card.Title>
                <Card.Text>{data.getUserByEmail.email}</Card.Text>
            </Card.Body>
        </Card>
      )
}

export default FindBuddy;