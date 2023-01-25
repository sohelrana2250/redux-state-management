import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { ContextProvider } from '../../Context/USEContext';
const Child = () => {

    const { count } = useContext(ContextProvider)
    return (
        <div className='col d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Counter</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        <h3>Count :{count} </h3>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Child;