//selectors
export const searchInputValue = state => state.search;

//actions
const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// action creators
export const updateSearchString = payload => ({type: UPDATE_SEARCHSTRING, payload});

const searchReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCHSTRING:
        return action.payload
      default:
        return statePart;
    }
}

export default searchReducer;