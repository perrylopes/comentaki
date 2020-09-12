import React, { useState, useContext } from "react";

import firebase from "./firebase";
import { useDatabasePush } from "./database";
import { AuthContext } from "./auth";

import {Button, Textarea, FormControl} from 'react-bootstrap'

const NewComment = (props) => {
  const [, save] = useDatabasePush("comments");
  const [comment, setComment] = useState("");
  const auth = useContext(AuthContext);

  if (auth.user === null) {
    return null;
  }

  const { displayName } = auth.user;
  const [alternativeDisplayName] = auth.user.email.split("@");

  const createComment = () => {
    if (comment !== "") {
      return save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: auth.user.uid,
          name: displayName || alternativeDisplayName,
        },
      });
    }
    setComment("");
  };
  return (
    <div>
      <FormControl
        as="textarea"
        value={comment}
        onChange={(evt) => setComment(evt.target.value)}
      />
      <br />
      <Button variant="primary mb-2" onClick={createComment}>Comentar</Button>
    </div>
  );
};

export default NewComment;
