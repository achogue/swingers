import {
     Card
  } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_USER_BY_ID } from '../utils/queries';
import { getDefaultValues } from '@apollo/client/utilities';

function FindBuddy (props){
    var id = props.userId;
    
    console.log("find buddy user id ", id);
   
    const { loading, error, data, status } = useQuery(QUERY_USER_BY_ID, {
        variables: { id }
    });
    
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;
    
    console.log("data", data);

    if(data.user === null)
    {
        return(
        <Card border="dark" className='mb-3'>
            <Card.Body>
                <Card.Title>The data is not being returned from mongoose</Card.Title>
            </Card.Body>
        </Card>
        )
    }
    
    if(status === "success"){
    return (
        <Card border="dark" className='mb-3'>
            <Card.Body>
                <Card.Title>{data.user.username}</Card.Title>
                <Card.Text>{data.user.email}</Card.Text>
            </Card.Body>
        </Card>
      )
    }
}

export default FindBuddy;