import * as actionTypes from "../constants/productConstants";
import axios from "axios";

export const getCollections = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_COLLECTIONS_REQUEST });

    const { data } = await axios.get("/shopdrop");

    dispatch({
      type: actionTypes.GET_COLLECTIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_COLLECTIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};