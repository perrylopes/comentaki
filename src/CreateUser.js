import React, { useContext, useState } from "react";

import { AuthContext } from "./auth";

import {Button, FormControl, InputGroup} from "react-bootstrap";

const CreateUser = () => {
  const auth = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", passwd: "" });
  const onChange = (campo) => (evt) => {
    setForm({
      ...form,
      [campo]: evt.target.value,
    });
  };
  if (auth.user !== null) {
    return null;
  }
  return (
    <>
      <h3>Criar nova conta:</h3>
      {auth.createUser.createUserState.error !== "" && (
        <p>{auth.createUser.createUserState.error}</p>
      )}
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={onChange("email")}
        />
        <FormControl
          type="password"
          placeholder="Sua senha"
          value={form.passwd}
          onChange={onChange("passwd")}
        />
         <Button variant="success ml-1"
        onClick={() => {
          auth.createUser.createUser(form.email, form.passwd);
        }}
      >
        Cadastrar
      </Button>
      </InputGroup>
     
    </>
  );
};

export default CreateUser;
