import React, { useState } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { BsFillGearFill } from "react-icons/bs";
import Position from "./../geo/useposition";
import "./styles.scss";

function Header() {
  /*-- Animation --*/
  const [reaction, setReaction] = useState(0);

  function handleAvatarClick() {
    setReaction(1);
  }

  return (
    <>
      <Navbar className="d-flex justify-content-between align-items-center p-4">
        <Position />
        <Nav.Link href="#settings" className="nav-icon-link px-3">
          <BsFillGearFill size="1.5em" className="nav-icon" />
        </Nav.Link>
        <Nav.Link
          href="#/"
          className="nav-icon-link p-0 px-3"
          onClick={handleAvatarClick}
          onAnimationEnd={() => setReaction(0)}
          reaction={reaction}
        >
          <Image
            className="avatar"
            src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.18169-9/1376555_10202425465584781_437188855_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=FAnZcD2j_8QAX8C-b00&_nc_ht=scontent-sjc3-1.xx&oh=fa27574f72cae18a2e222af1590ca630&oe=60C9219D"
            roundedCircle
            alt="Me"
            height="44"
          />
        </Nav.Link>
      </Navbar>
    </>
  );
}

export default Header;
