import React, { createContext, useEffect, useState, useReducer } from 'react';
import { initialState, ProductReducer } from './../state/ProductReducer';
import { productAction } from "./../state/ProductAction"

export const ContextProvider = createContext();



const USEContext = ({ children }) => {

    const [count, setCount] = useState(0);

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    useEffect(() => {

        dispatch({ type: productAction.PRODUCT_REQUEST });

        fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json()).then((data) => {
            // console.log(data);
            dispatch({ type: productAction.PRODUCT_SUCCESS, payload: data });
        }).catch((error) => {
            // console.error(error.mesage);

            dispatch({ type: productAction.PRODUCT_ERROR, payload: error.message })
        })

    }, [])




    const valueProvider = { count, setCount, state, dispatch };
    return (
        <ContextProvider.Provider value={valueProvider}>
            {children}

        </ContextProvider.Provider>
    );
};




export default USEContext;