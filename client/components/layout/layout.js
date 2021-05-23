import React from "react";
import { Container } from "react-bootstrap";
import Header from "./../header/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container fluid>
            {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;
