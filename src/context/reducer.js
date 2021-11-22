export const USER_SEARCH_RESPONSE = "USER_SEARCH_RESPONSE";
export const SELECT_USER = "SELECT_USER";

export const initialState = {
  searchedUsers: [],
  selectedUser: null,
};

export const AppReducer = (state = initialState, action) => {
  if (action.type === USER_SEARCH_RESPONSE) {
    return { ...state, searchedUsers: action.payload };
  }
  if (action.type === SELECT_USER) {
    return { ...state, selectedUser: action.payload };
  }
  return state;
};
