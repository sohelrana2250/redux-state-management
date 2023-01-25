import React, { useReducer } from 'react';
import { Card, Button } from 'react-bootstrap';




const CounterApp = () => {

    const initialState = 0;
    const reducer = (state, action) => {

        if (action.type === 'INCREMENT') {
            return state + action.payloat.count;
        }
        else if (action.type === 'DECREMENT') {
            return state - action.payloat.count;
        }


    }


    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div>

            <h1>User-Reducer </h1>
            <div className='col d-flex justify-content-center'>
                <Card style={{ width: '27rem' }}>
                    <Card.Body>
                        <Card.Title>Counter</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            <h3>Count : {state}</h3>
                        </Card.Text>
                        <Button variant="outline-danger" onClick={() => dispatch({ type: 'INCREMENT', payloat: { count: 5 } })} >Increment</Button>{' '}
                        <Button variant="outline-info" onClick={() => dispatch({ type: 'DECREMENT', payloat: { count: 5 } })} >Decrement</Button>{' '}
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default CounterApp;