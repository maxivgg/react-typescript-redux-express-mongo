import {
  PostState,
  PostActionTypes,
  FETCH_POSTS,
  DELETE_POST,
  ADD_POST,
  EDIT_POST,
  Post,
  UPDATE_POST,
  SHOW_FORM
} from "../types";

const initialState: PostState = {
  posts: [],
  postEdit: null,
  showForm: false
};

export function postReducer(
  state = initialState,
  action: PostActionTypes
): PostState {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.meta],
      };
    case EDIT_POST:
      return {
        ...state,
        postEdit: action.payload,
      };

    case UPDATE_POST:
      return {
        ...state,
        postEdit: null,
        posts: state.posts.map((post: Post) => {
          if (post.id === action.meta.id) {
            post.title = action.meta.title;
            post.body = action.meta.body;
          }
          return post;
        }),
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post: Post) => post.id !== action.meta.id),
      };

      case SHOW_FORM:
        return {
          ...state,
          showForm: !state.showForm,
        };
  
    default:
      return state;
  }
}
