import React from "react";
import { Post as PostType } from "../types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import { deletePost, editPost, showForm } from "../actions/postActions";
import { useDispatch } from "react-redux";

export default function Post(props: { post: PostType }) {
  const { id, title, body } = props.post;
	const dispatch = useDispatch();
	
	const onDeletePost = (id: string) => {
		dispatch(deletePost(id))
	}

	const onEditPost = (post: PostType) => {
		dispatch(editPost(post))
		dispatch(showForm())

	}

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{body}</TableCell>
      <TableCell>
        <Button variant="contained" color="primary" onClick={() => onEditPost(props.post)}>
          edit
        </Button>
        <Button variant="contained" color="secondary" onClick={() => onDeletePost(id)}>
          delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
