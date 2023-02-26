import axios from "axios";
import React, { DOMElement, ReactElement, useEffect, useState } from "react";
import { foodByGroup, item } from "../utilities/interfaces";
import { Card, InputGroup, Row, Form } from "react-bootstrap";
import StoreModal from "../components/StoreModal";

const Store = () => {
  return (
    <div>
      <h1 className="text-white mt-5">Shopping List</h1>
      <div
        style={{ gap: "4px", maxWidth: "40rem" }}
        className="d-flex flex-wrap justify-content-between"
      >
        <Row
          id="stockBox"
          style={{
            minHeight: "7rem",
            maxHeight: "20rem",
            overflowY: "scroll",
            border: "1.5px #AAAAAA solid",
            maxWidth: "40rem",
            background: "#141414",
            gap: "12px",
          }}
          className="shadow-lg my-3 mx-1 position-relative p-2 w-100 rounded align-items-end"
          sm={5}
        ></Row>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Default
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default Store;
