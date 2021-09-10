import * as actionTypes from "../constants/productConstants";

export const getCollectionsReducer = (state = { collections: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_COLLECTIONS_REQUEST:
      return {
        loading: true,
        collections: [],
      };
    case actionTypes.GET_COLLECTIONS_SUCCESS:
      return {
        collections: action.payload,
        loading: false,
      };
    case actionTypes.GET_COLLECTIONS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
