const {
    ADD_ITEM,
    REMOVE_ITEM,
    CHANGE_QUANTITY,
    EMPTY_CART,
} = require("../constants/constants");

export const cart_reducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
        case REMOVE_ITEM:
        case CHANGE_QUANTITY:
        case EMPTY_CART:
        default:
    }
};
