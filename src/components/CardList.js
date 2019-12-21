import React from "react";
import styled from "styled-components";
import { Button, Card } from "react-bootstrap";
import { firestore } from "firebase/app";

const StyledCard = styled(Card)`
  margin-top: 10px;
`;

const StyledCardHeader = styled(Card.Header)`
  display: flex;
`;

const StyledCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
`;

const DeleteButtonContainer = styled.div`
  margin: auto 0 auto auto;
`;

const DoneButtonContainer = styled.div`
  align-self: flex-end;
`;

const CardList = ({ thread }) => {
  const Update = () => {
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

  const Delete = () => {
    firestore()
      .collection("threads")
      .doc(thread.id)
      .delete();
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
          <DeleteButtonContainer>
            <Button variant="danger" onClick={Delete}>
              delete
            </Button>
          </DeleteButtonContainer>
        </StyledCardHeader>
        {!thread.doneFlg && (
          <StyledCardBody>
            <Card.Text>{thread.content}</Card.Text>
            <DoneButtonContainer>
              <Button variant="success" onClick={Update}>
                done
              </Button>
            </DoneButtonContainer>
          </StyledCardBody>
        )}
      </StyledCard>
    </>
  );
};

export default CardList;
