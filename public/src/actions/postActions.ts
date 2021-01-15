import { Dispatch } from "redux";
import axios from "axios";
import {
  FETCH_POSTS,
  ADD_POST,
  DELETE_POST,
  PostActionTypes,
  Post,
  EDIT_POST,
  UPDATE_POST,
  SHOW_FORM,
  newPost,
} from "../types";

const URL =
  window.location.hostname === "localhost"
    ? "http://localhost:2000/api/posts"
    : "https://app-react-express-mongo.herokuapp.com/api/posts";

export const fetchPosts = () => async (dispatch: Dispatch<PostActionTypes>) => {
  await axios
    .get(URL)
    .then((response) =>
      dispatch({
        type: FETCH_POSTS,
        payload: response.data,
      })
    )
    .catch((error) => console.log(error));
};

export const addPost = (request: newPost) => async (
  dispatch: Dispatch<PostActionTypes>
) => {
  await axios
    .post(URL, request)
    .then((response) =>
      dispatch({
        type: ADD_POST,
        payload: response.data,
      })
    )
    .catch((error) => console.log(error));
};

export const editPost = (post: Post) => {
  return {
    type: EDIT_POST,
    payload: post,
  };
};

export const updatePost = (request: Post) => async (
  dispatch: Dispatch<PostActionTypes>
) => {
  await axios
    .put(URL + "/" + request._id, request)
    .then((response) =>
      dispatch({
        type: UPDATE_POST,
        payload: request,
      })
    )
    .catch((error) => console.log(error));
};

export const showForm = () => {
  return {
    type: SHOW_FORM,
  };
};

export const deletePost = (_id: string) => async (
  dispatch: Dispatch<PostActionTypes>
) => {
  await axios
    .delete(URL + "/" + _id)
    .then((response) =>
      dispatch({
        type: DELETE_POST,
        meta: {
          _id,
        },
      })
    )
    .catch((error) => console.log(error));
};
