export const ADD_TO_CART = 'ADD_TO_CART';
export const DEL_CART = 'DEL_CART';

export function addToCart(product, quantity, unitCost) {
    return {
        type: ADD_TO_CART,
        payload: { product, quantity, unitCost }
    }
}

export function removeCart() {

    return {
        type:DEL_CART
    }

}