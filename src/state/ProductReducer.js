import { productAction } from "./ProductAction"


export const initialState = {

    isLoading: false,
    products: [],
    errorMessage: null,
    card: []
}

export const ProductReducer = (state, action) => {

    //console.log(state);

    switch (action.type) {
        case productAction.PRODUCT_REQUEST: return {

            ...state,
            isLoading: true,
            errorMessage: null
        }

        case productAction.PRODUCT_SUCCESS: return {
            ...state,
            isLoading: false,
            products: action.payload,
            errorMessage: null
        }

        case productAction.PRODUCT_ERROR: return {
            ...state,
            isLoading: false,
            products: action.payload,
            errorMessage: null
        }

        case productAction.PRODUCT_ADDTOCARD: return {
            ...state,
            isLoading: false,
            card: [...state.card, action.payload],
            errorMessage: null
        }


        default:
            return state;
    }

}
