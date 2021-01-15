import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { fetchPosts, showForm as actionShowForm } from "../actions/postActions";
import { Post as PostType } from "../types";
import Post from "./Post";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import AddPost from "./AddPost";

export default function Posts() {
  const posts = useSelector((state: RootState) => state.posts.posts);
  const showForm = useSelector((state: RootState) => state.posts.showForm);
  const dispatch = useDispatch();

	const onShowForm = () => {
		dispatch(actionShowForm())
	}

  useEffect(() => {
    dispatch(fetchPosts());
	}, [dispatch]);
	
  return (
    <div>
      <h1>Posts</h1>
      {showForm ? (
        <AddPost />
      ) : (
        <div>
          <Button variant="contained" color="primary" onClick={() => onShowForm()}>
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
                  <Post key={index} post={post} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}
