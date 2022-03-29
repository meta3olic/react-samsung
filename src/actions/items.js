export const setProducts = products => ({
  type: 'SET_ITEMS',
  payload: products
});

export const isReady = ready => ({
  type: 'SET_IS_READY',
  payload: ready
});