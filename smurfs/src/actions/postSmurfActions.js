import axios from "axios";

export const POST_SMURF_DATA_START = "POST_SMURF_DATA_START";
export const POST_SMURF_DATA_SUCCESS = "POST_SMURF_DATA_SUCCESS";
export const POST_SMURF_DATA_FAILURE = "POST_SMURF_DATA_FAILURE";

export const postSmurfData = values => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", { data: values })
    .then(response => {
      dispatch({ type: POST_SMURF_DATA_SUCCESS, payload: response });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: POST_SMURF_DATA_FAILURE, payload: error.response });
    });
};
