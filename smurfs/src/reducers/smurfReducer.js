import {
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_SUCCESS,
  FETCH_SMURF_DATA_FAILURE,
  POST_SMURF_DATA_START,
  POST_SMURF_DATA_SUCCESS,
  POST_SMURF_DATA_FAILURE
} from "../actions/smurfActions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_SMURF_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: ""
      };
    case FETCH_SMURF_DATA_FAILURE:
      return {
        ...state,
        smurfs: null,
        isLoading: false,
        error: action.payload
      };
    case POST_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case POST_SMURF_DATA_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isLoading: false,
        error: ""
      };
    case POST_SMURF_DATA_FAILURE:
      return {
        ...state,
        smurfs: null,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
