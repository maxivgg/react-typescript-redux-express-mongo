import { Dispatch } from "redux";
import axios from "axios";
import { FETCH_POSTS, ADD_POST, DELETE_POST, PostActionTypes, Post, EDIT_POST, UPDATE_POST, SHOW_FORM } from "../types";

const URL= 'https://app-react-express-mongo.herokuapp.com/api/posts';

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

export const addPost = (id: string, title: string, body:string) => {
    return {
      type: ADD_POST,
      meta: {
        id, title, body
      },
    };
  };
  
  export const editPost = (post: Post) => {
    return {
      type: EDIT_POST,
      payload: post
    };
  };

  export const updatePost = (id: string, title: string, body:string) => {
    return {
      type: UPDATE_POST,
      meta: {
        id, title, body
      },
    };
  };

  export const showForm = () => {
    return {
      type: SHOW_FORM,
    };
  };


  export const deletePost = (id: string) => {
  return {
    type: DELETE_POST,
    meta: {
      id,
    },
  };
};
