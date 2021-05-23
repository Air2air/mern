import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import BeatLoader from "react-spinners/BeatLoader";
import NextPrevious from "../../components/next-previous/buttons";
import "./styles.scss";

const TopicPage = ({ match }) => {
  const {
    params: { topicId },
  } = match;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("./../../data.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [topicId]);

  return (
    <>
      <Row>
        {isLoading ? (
          <>
            <Col className="topic-content">
              <BeatLoader color="white" size={20} />
            </Col>
          </>
        ) : (
          <>
            <Col className="topic-content">
              <div>
                <p>
                  Name: {data.name} {topicId}
                </p>
                <p>Height: {data.height}</p>
              </div>
            </Col>
          </>
        )}
      </Row>
      <Row>
        <NextPrevious topicId={topicId} topicType="question"/>
      </Row>
    </>
  );
};

export default TopicPage;
