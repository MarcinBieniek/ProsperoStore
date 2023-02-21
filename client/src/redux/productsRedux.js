//selectors
export const allProducts = state => state.products;

// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators
const productsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default productsReducer;