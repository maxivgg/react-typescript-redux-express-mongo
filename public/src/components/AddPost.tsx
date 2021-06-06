import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { v4 as uuidv4 } from "uuid";
import { addPost, updatePost, showForm } from "../actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";

export default function AddPost() {
  const postEdit = useSelector((state: RootState) => state.posts.postEdit);
  const [_id, set_Id] = useState("");
  const [id] = useState(uuidv4());
  const [userId] = useState(2);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const onShowForm = () => {
    dispatch(showForm());
  };

  const handleSubmit = () => {
    if (_id) {
      if (title) {
        dispatch(updatePost({ _id, userId, id, title, body }));
        set_Id("");
        setTitle("");
        setBody("");
        onShowForm();
      } else {
        setError("Please provide a title");
      }
    } else {
      if (title) {
        dispatch(addPost({ userId, id, title, body }));
        set_Id("");
        setTitle("");
        setBody("");
        onShowForm();
      } else {
        setError("Please provide a title");
      }
    }
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
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {error && (
          <Grid item xs={12} md={8}>
            <Alert role="alert" severity="error">
              {error}
            </Alert>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            name="title"
            multiline
            rows={4}  
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Body"
            variant="outlined"
            name="body"
            multiline
            rows={4}  
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={1}>
          <Button variant="contained" onClick={event => window.location.href='/'}>
            Back
          </Button>
        </Grid>
        <Grid item xs={12} md={1}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            value="Submit"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
