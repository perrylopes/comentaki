import React, { useState, useContext } from "react";
import { AuthContext } from "./auth";
import {Button, InputGroup, FormControl} from "react-bootstrap";
import { auth } from "firebase";

const FormDisplayName = ({ displayName, user }) => {
  const [newDisplayName, setNewDisplayName] = useState(displayName);
  const onChange = (evt) => {
    setNewDisplayName(evt.target.value);
  };
  const save = () => {
    if (newDisplayName !== "") {
      user.updateProfile({ displayName: newDisplayName });
    }
  };
  return (
    <>
      <InputGroup>
        <FormControl type="text" value={newDisplayName} onChange={onChange} ></FormControl>
        <Button variant="primary ml-1 mr-1" onClick={save}>Save Display Name</Button>
      </InputGroup>
    </>
  );
};

const UserInfo = () => {
  const auth = useContext(AuthContext);

  if (auth.user === null) {
    return null;
  }

  const { displayName } = auth.user;
  const [alternativeDisplayName] = auth.user.email.split("@");
  const dn = displayName || alternativeDisplayName;

  return (
    <>
      <p>Olá {dn}!</p>
      <FormDisplayName displayName={dn} user={auth.user} />
      <Button variant="danger mt-2" onClick={auth.signout}>Sair</Button>
    </>
  );
};

export default UserInfo;
