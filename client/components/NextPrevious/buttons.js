import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./styles.scss";



/*

Get next and prev url 

click handlers

Button text

Animations

*/






const NextPrevious = (props) => {
  /* -- Router --*/
  const index = parseInt(props.topicId);
  const nextId = index + 1;
  const prevId = index - 1;
  let history = useHistory();
  function handlePrevClick() {
    history.push("/person/" + prevId);
    setReactionLeft(1);
  }
  function handleNextClick() {
    history.push("/person/" + nextId);
    setReactionRight(1);
  }

  /*-- Button Text --*/
  const topic = props.topicType;
  let textleft = "";
  let textright = "";

  if (topic == "preference") {
    textleft = "Nah";
    textright = "oh yeah";
  } else if (topic == "suggestion") {
    textleft = "Nope";
    textright = "Will do";
  } else {
    // topic == opinion
    textleft = "Sucks";
    textright = "Rocks";
  }

  /*-- Animation --*/
  const [reactionleft, setReactionLeft] = useState(0);
  const [reactionright, setReactionRight] = useState(0);

  return (
    <>
      <Col
        className="topics-button left"
        onClick={handlePrevClick}
        onAnimationEnd={() => setReactionLeft(0)}
        reaction={reactionleft}
      >
        {textleft}
      </Col>
      <Col
        className="topics-button right"
        onClick={handleNextClick}
        onAnimationEnd={() => setReactionRight(0)}
        reaction={reactionright}
      >
        {textright}
      </Col>
    </>
  );
};

export default NextPrevious;
