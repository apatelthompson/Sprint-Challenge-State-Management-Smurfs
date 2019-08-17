import {
  POST_SMURF_DATA_START,
  POST_SMURF_DATA_SUCCESS,
  POST_SMURF_DATA_FAILURE
} from "../actions/postSmurfActions";

const formInitialState = {
  users: { name: "", age: {}, height: "" },
  isLoading: false,
  error: ""
};

const postReducer = (state = formInitialState, action) => {
  switch (action.type) {
    case POST_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case POST_SMURF_DATA_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case POST_SMURF_DATA_FAILURE:
      return {
        ...state,
        users: null,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
