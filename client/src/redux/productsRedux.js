//selectors
export const allProducts = ({products}) => products;
export const getProductById = ({ products }, productId) => products.find(product => product.id == productId);

// actions
const createActionName = actionName => `app/products/${actionName}`;

// action creators
const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default productsReducer;