import React, { useEffect, useState } from "react";
import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const fridge = "public/fridge.svg";
const Navbar = () => {
  const [location, setLocation] = useState(window.location.pathname);
  const navigate = useNavigate();
  const handleNav = () => {
    if (location == "/") {
      setLocation("store");
      navigate("/store");
    } else {
      setLocation("/");
      navigate("/");
    }
  };
  return (
    <NavbarBs sticky="top" className="bg-black shadow-sm mb-3">
      <Container>
        {" "}
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="p-2 rounded-lg d-flex align-items-center justify-content-center"
          onClick={handleNav}
        >
          {location == "/" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 1 16 14"
              fill="currentColor"
              width="2rem"
              height="2rem"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          ) : (
            <svg
              fill="currentColor"
              width="2rem"
              height="2rem"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 0C8.355469 0 7 1.355469 7 3L7 18.6875C6.941406 18.882813 6.941406 19.085938 7 19.28125L7 44C7 45.644531 8.355469 47 10 47L10 48C10 49.09375 10.90625 50 12 50L15 50C16.09375 50 17 49.09375 17 48L17 47L33 47L33 48C33 49.09375 33.90625 50 35 50L38 50C39.09375 50 40 49.09375 40 48L40 47C41.644531 47 43 45.644531 43 44L43 19.1875C43.027344 19.054688 43.027344 18.914063 43 18.78125L43 3C43 1.355469 41.644531 0 40 0 Z M 10 2L40 2C40.5625 2 41 2.4375 41 3L41 18L9 18L9 3C9 2.4375 9.4375 2 10 2 Z M 13.90625 5.96875C13.863281 5.976563 13.820313 5.988281 13.78125 6C13.316406 6.105469 12.988281 6.523438 13 7L13 14C12.996094 14.359375 13.183594 14.695313 13.496094 14.878906C13.808594 15.058594 14.191406 15.058594 14.503906 14.878906C14.816406 14.695313 15.003906 14.359375 15 14L15 7C15.011719 6.710938 14.894531 6.433594 14.6875 6.238281C14.476563 6.039063 14.191406 5.941406 13.90625 5.96875 Z M 9 20L41 20L41 44C41 44.5625 40.5625 45 40 45L10 45C9.4375 45 9 44.5625 9 44 Z M 13.90625 22.96875C13.863281 22.976563 13.820313 22.988281 13.78125 23C13.316406 23.105469 12.988281 23.523438 13 24L13 31C12.996094 31.359375 13.183594 31.695313 13.496094 31.878906C13.808594 32.058594 14.191406 32.058594 14.503906 31.878906C14.816406 31.695313 15.003906 31.359375 15 31L15 24C15.011719 23.710938 14.894531 23.433594 14.6875 23.238281C14.476563 23.039063 14.191406 22.941406 13.90625 22.96875 Z M 12 47L15 47L15 48L12 48 Z M 35 47L38 47L38 48L35 48Z" />
            </svg>
          )}
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
