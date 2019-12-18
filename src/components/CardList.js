import React from "react";
import styled from "styled-components";
import { Button, Card } from "react-bootstrap";
import { firestore } from "firebase/app";

const StyledCard = styled(Card)`
  margin-top: 10px;
`;

const StyledDiv = styled.div`
  margin: auto 0px auto auto;
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

const StyledCardHeader = styled(Card.Header)``;

const StyledCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
`;

const CardList = ({ thread }) => {
  const onSubmit = () => {
    firestore()
      .collection("threads")
      .doc(thread.id)
      .update({
        title: thread.title,
        content: thread.content,
        doneFlg: 1,
        createdAt: thread.createdAt
      });
  };

  return (
    <>
      <StyledCard>
        <StyledCardHeader
          style={{
            textDecoration: thread.doneFlg ? "line-through" : ""
          }}
        >
          {thread.title}
        </StyledCardHeader>
        {!thread.doneFlg && (
          <StyledCardBody>
            <Card.Text>{thread.content}</Card.Text>
            <StyledDiv>
              <StyledButton variant="success" onClick={onSubmit}>
                done
              </StyledButton>
            </StyledDiv>
          </StyledCardBody>
        )}
      </StyledCard>
    </>
  );
};

export default CardList;
