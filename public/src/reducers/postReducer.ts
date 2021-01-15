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
        posts: [...state.posts, action.payload],
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
          if (post._id === action.payload._id) {
            post.title = action.payload.title;
            post.body = action.payload.body;
          }
          return post;
        }),
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post: Post) => post._id !== action.meta._id),
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
