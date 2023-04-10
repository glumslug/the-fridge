import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      className="d-flex justify-content-center justify-content-lg-start"
      style={{
        color: "grey",
        fontSize: "12px",
      }}
    >
      <span className="d-flex align-items-end">
        Copyright &#169; 2023 Eli Ferster
      </span>
    </Container>
  );
};

export default Footer;