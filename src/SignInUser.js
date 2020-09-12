import React, { useContext, useState } from "react";

import { AuthContext } from "./auth";

import {Button, InputGroup, FormControl} from "react-bootstrap";

const SignInUser = () => {
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
      <h3>Entrar na sua conta:</h3>
      {auth.signInUser.signInUserState.error !== "" && (
        <p>{auth.signUser.signUserUserState.error}</p>
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
      <Button
        variant="success ml-1"
        onClick={() => {
          auth.signInUser.signInUser(form.email, form.passwd);
        }}
      >
        Entrar
      </Button>
      </InputGroup>
    </>
  );
};

export default SignInUser;
