import React, { useReducer } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginForm = () => {

    const intialState = {
        firstName: '',
        lastName: '',
        email: '',
        eduction: ''
    };

    const reducer = (state, action) => {




        if (action.type === 'INPUT') {


            // console.log(action);
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        }




    }



    const [state, dispatch] = useReducer(reducer, intialState)

    const handelSubmit = (event) => {




        event.preventDefault()
        console.log(state)



    }



    return (
        <div className='col d-flex justify-content-center'>

            <Form onSubmit={handelSubmit} style={{ width: '30rem' }}>
                <Form.Group className="mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name='firstName' id='firstName' onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} placeholder="First-Name" />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name='lastName'
                        id='lastName' placeholder="Last-Name" onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} />
                </Form.Group>


                <Form.Group className="mb-3" >
                    <Form.Label>Email-Address</Form.Label>
                    <Form.Control type="email" name='email' id='email' onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} placeholder="Email-Address" />
                </Form.Group>


                <Form.Group className="mb-3" >
                    <Form.Select name='eduction' id='eduction' onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} aria-label="Default select example">
                        <option value='msc'>MSC</option>
                        <option value="ssc">SSC</option>
                        <option value="hsc">HSC</option>
                        <option value="bsc" selected>BSC</option>
                    </Form.Select>
                </Form.Group>




                <Button variant="outline-primary" type='submit' size="lg">Form---Submit</Button>{' '}








            </Form>


        </div>
    );
};

export default LoginForm;