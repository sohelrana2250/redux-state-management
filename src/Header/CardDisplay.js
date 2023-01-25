import React, { useContext } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { ContextProvider } from '../Context/USEContext';
import { productAction } from '../state/ProductAction';



const CardDisplay = ({ card }) => {

    const { dispatch } = useContext(ContextProvider)

    const { name, email, body } = card;
    return (
        <div>
            <Col className='m-3'>
                <Card>

                    <Card.Body>
                        <Card.Title className='fs-3'>
                            {name}
                        </Card.Title>

                        <Card.Text className='fs-4'>{email}</Card.Text>
                        <Card.Text>{body}</Card.Text>

                    </Card.Body>
                    <Button variant="outline-danger" onClick={() => dispatch({ type: productAction.PRODUCT_ADDTOCARD, payload: card })} > Add-to-Card</Button>
                </Card>

            </Col>

        </div>
    );
};

export default CardDisplay;