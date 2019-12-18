import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { create } from "../helpers/create";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  align-self: flex-end;
`;

const InputForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = () => {
    if (title || content)
      create({ title, content })
        .then(() => {
          setTitle("");
          setContent("");
        })
        .catch(err => {
          console.error(err);
        });
  };

  return (
    <StyledForm>
      <StyledForm.Group controlId="title">
        <StyledForm.Control
          as="textarea"
          value={title}
          placeholder="タイトルを入力してください"
          onChange={event => setTitle(event.target.value)}
        />
      </StyledForm.Group>
      {title && (
        <StyledForm.Group controlId="content">
          <StyledForm.Control
            as="textarea"
            value={content}
            rows="3"
            placeholder="概要を入力してください"
            onChange={event => setContent(event.target.value)}
          />
        </StyledForm.Group>
      )}
      <StyledDiv>
        <Button
          id="create"
          disabled={!title || !content}
          onClick={onSubmit}
          variant="primary"
        >
          create
        </Button>
      </StyledDiv>
    </StyledForm>
  );
};

export default InputForm;
