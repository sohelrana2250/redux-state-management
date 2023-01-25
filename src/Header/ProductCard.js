import React, { useContext } from 'react';
import { ContextProvider } from './../Context/USEContext'
import CardDisplay from './CardDisplay';
import { Row } from 'react-bootstrap';

const ProductCard = () => {

    const { state } = useContext(ContextProvider);

    return (
        <div>
            <h1>Product Card :{state.products.length}</h1>

            {state.isLoading && <h3>Is-Loading-Count-Down</h3>}
            {
                state.errorMesage && <h3>{state.errorMessage}</h3>
            }

            <Row xs={12} lg={3} md={2}>

                {

                    state.products.map((v, index) => <CardDisplay key={index} card={v}></CardDisplay>)

                }
            </Row>

        </div>
    );
};

export default ProductCard;