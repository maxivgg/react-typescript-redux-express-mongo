import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { v4 as uuidv4 } from "uuid";
import { addPost, updatePost, showForm} from '../actions/postActions'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";

export default function AddPost() {
	const [id, setId] = useState("");
  const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const dispatch = useDispatch()
	const postEdit = useSelector((state: RootState) => state.posts.postEdit);
	
	const onShowForm = () => {
		dispatch(showForm())
	}

  const handleSubmit = () => {
    if (id) {
      dispatch(updatePost(id, title, body));
    } else {
      dispatch(addPost(uuidv4(), title, body));
    }
    setId("");
    setTitle("");
		setBody("");
		onShowForm();
  };

  useEffect(() => {
    if (postEdit) {
      setId(postEdit.id);
      setTitle(postEdit.title);
      setBody(postEdit.body);
    }
    return () => {};
  }, [postEdit]);

  return (
    <div>
      <h3>{id !== "" ? "Edit post" : "Add new post"}</h3>
      <TextField
        label="Title"
        variant="outlined"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Body"
        variant="outlined"
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        value="Submit"
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
	</div>)
}
