export const FETCH_POSTS = "FETCH_POSTS";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const UPDATE_POST = "UPDATE_POST";
export const SHOW_FORM = "SHOW_FORM";

interface FetchPostsAction {
  type: typeof FETCH_POSTS;
  payload: Post;
}

interface DeletePostsAction {
  type: typeof DELETE_POST;
  meta: { _id: string };
}

interface AddPostsAction {
  type: typeof ADD_POST;
  payload: newPost;
}

interface EditPostsAction {
  type: typeof EDIT_POST;
  payload: Post;
}

interface UpdatePostsAction {
  type: typeof UPDATE_POST;
  payload: Post;
}

interface ShowFormAction {
    type: typeof SHOW_FORM;
  }
  
export interface Post {
  _id: string;
  userId: number;
  id: string;
  title: string;
  body: string;
}

export interface newPost {
  userId: number;
  id: string;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[] | any;
  postEdit: Post | null;
  showForm: boolean;
}

export type PostActionTypes =
  | FetchPostsAction
  | DeletePostsAction
  | AddPostsAction
  | EditPostsAction
  | UpdatePostsAction
  | ShowFormAction;
