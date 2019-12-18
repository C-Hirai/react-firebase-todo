import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collectionData } from "rxfire/firestore";
import { firestore } from "firebase/app";
import CardList from "./CardList";
import InputForm from "./InputForm";

const StyledDiv = styled.div`
  width: 80%;
  margin: auto;
`;

const PageHome = () => {
  const [threads, setThreads] = useState([]);

  const query = firestore()
    .collection("threads")
    .orderBy("createdAt", "desc");

  useEffect(() => {
    const subscription = collectionData(query, "id").subscribe(data => {
      setThreads(data);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <StyledDiv>
      <h2>Input</h2>
      <InputForm />
      <h2>List</h2>
      {threads.map(thread => (
        <CardList key={thread.id} thread={thread} />
      ))}
    </StyledDiv>
  );
};

export default PageHome;
