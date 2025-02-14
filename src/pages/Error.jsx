import React from "react";
import { useNavigate } from "react-router";
import Container_2 from '../components/common/Container_2'
import Title from "../components/common/title";
import Button from "../components/common/Button";

const Error = () => {
  let navigate = useNavigate();

  const goTo = () => {
    navigate("/");
  };

  return (
    <>
      <Container_2 className=" h-screen flex flex-col justify-center items-center gap-8">
        <Title>Page not found.</Title>
        <Button onClick={goTo}>Go to Home Page</Button>
      </Container_2>
    </>
  );
};

export default Error;