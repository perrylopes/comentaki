import React, { useContext } from "react";

import Time from "./Time";
import { AuthContext } from "./auth";

import * as S from './Styled'

const Comment = ({ comment }) => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <S.Coment>{comment.content}</S.Coment> por: <S.Name>{comment.user.name}</S.Name> em
      <Time timestamp={comment.createdAt} />
    </div>
  );
};

export default Comment;
