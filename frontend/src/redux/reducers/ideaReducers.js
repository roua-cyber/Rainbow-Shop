import * as actionTypes from "../constants/ideaConstants";

export const getIdeasReducer = (state = { ideas: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_IDEAS_REQUEST:
      return {
        loading: true,
        ideas: [],
      };
    case actionTypes.GET_IDEAS_SUCCESS:
      return {
        ideas: action.payload,
        loading: false,
      };
    case actionTypes.GET_IDEAS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
