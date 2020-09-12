import React, { useContext } from "react";

import NewComment from "./NewComment";
import Comments from "./Comments";
import { AuthProvider } from "./auth";
import CreateUser from "./CreateUser";
import UserInfo from "./UserInfo";
import SignInUser from "./SignInUser";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Jumbotron} from 'react-bootstrap'
import * as S from './Styled'
// Prop drilling estudar o termo usa-se o contextAPI para solucionar o drilling

function App() {
  return (
    <AuthProvider>
      <Jumbotron>
        <h1>Comenta Ki</h1> 
      </Jumbotron>
      <Container className="d-flex flex-column align-items-center justify-content-center mt-3">
        <S.Wrapper>
          <NewComment />
          <Comments />
          <CreateUser />
          <SignInUser />
          <UserInfo />
        </S.Wrapper>
      </Container>
    </AuthProvider>
  );
}

export default App;
