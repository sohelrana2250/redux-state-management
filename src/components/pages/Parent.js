import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { ContextProvider } from '../../Context/USEContext';





const Parent = () => {

    const { count, setCount } = useContext(ContextProvider);







    return (
        <div className='col d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Counter</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        <h3>Count : {count}</h3>
                    </Card.Text>
                    <Button variant="outline-danger" onClick={() => setCount(count + 1)}>Increment</Button>{' '}
                    <Button variant="outline-info" onClick={() => setCount(count - 1)}>Decrement</Button>{' '}
                </Card.Body>
            </Card>
        </div>
    );
};

export default Parent;