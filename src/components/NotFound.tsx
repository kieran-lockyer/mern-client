import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Container>
      <h1>Error 404</h1>
      <p>The page you are looking for could not be found.</p>
    </Container>
  );
};

const Container = styled.div`
  flex: 1 1 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Error;
