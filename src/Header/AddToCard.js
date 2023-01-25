import React, { useContext } from 'react';
import { ContextProvider } from '../Context/USEContext';
import { Card } from 'react-bootstrap';
const AddToCard = () => {
    const { state } = useContext(ContextProvider);

    //const { name, email, body } = state.card;
    return (
        <div>
            <h1>Add-To-Card :{state.card.length}</h1>

            {state.card.map((v, index) => <div key={index} className=' m-3 col d-flex justify-content-center'>
                <Card style={{ width: '50rem' }}>
                    <Card.Body>
                        <Card.Title>{v.name}</Card.Title>
                        <Card.Text className='fs-3'>
                            {v.email}
                        </Card.Text>

                        <Card.Text className='fs-4'>{v.body}</Card.Text>

                    </Card.Body>
                </Card>
            </div>)}



        </div>
    );
};

export default AddToCard;