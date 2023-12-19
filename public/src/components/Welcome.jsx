import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}
// Welocome component for aftering login or regist regist and load chat route.
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fdfffc;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #ff9f1c;
  }
`;
