import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { v4 as uuidv4 } from "uuid";
import { addPost, updatePost, showForm } from "../actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";

export default function AddPost() {
  const [_id, set_Id] = useState("");
  const [id] = useState(uuidv4());
  const [userId] = useState(2);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const postEdit = useSelector((state: RootState) => state.posts.postEdit);

  const onShowForm = () => {
    dispatch(showForm());
  };

  const handleSubmit = () => {
    if (_id) {
      dispatch(updatePost({ _id, userId, id, title, body }));
    } else {
      dispatch(addPost({ userId, id, title, body }));
    }
    set_Id("");
    setTitle("");
    setBody("");
    onShowForm();
  };

  useEffect(() => {
    if (postEdit) {
      set_Id(postEdit._id);
      setTitle(postEdit.title);
      setBody(postEdit.body);
    }
    return () => {};
  }, [postEdit]);

  return (
    <div>
      <h3>{_id !== "" ? "Edit post" : "Add new post"}</h3>
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
    </div>
  );
}
