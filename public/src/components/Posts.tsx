import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { fetchPosts, showForm as actionShowForm } from "../actions/postActions";
import { Post as PostType } from "../types";
import Post from "./Post";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import Button from "@material-ui/core/Button";
import AddPost from "./AddPost";

export default function Posts() {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const showForm = useSelector((state: RootState) => state.posts.showForm);
  const dispatch = useDispatch();

  const onShowForm = () => {
    dispatch(actionShowForm());
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1 data-testid="app">Posts</h1>
      {showForm ? (
        <AddPost />
      ) : (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onShowForm()}
          >
            Add post
          </Button>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Body</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((post: PostType, index: number) => (
                  <TableRow>
                    <Post key={index} post={post} />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}
