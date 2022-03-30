export const addToCart = obj => ({
  type: 'ADD_ITEM_TO_CART',
  payload: obj,
});

export const removeFromCart = id => ({
  type: 'REMOVE_ITEM_FROM_CART',
  payload: id,
});