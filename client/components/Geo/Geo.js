import React from "react";
import { usePosition } from "use-position";
import BeatLoader from "react-spinners/BeatLoader";

const Position = () => {
  const watch = true;
  const { latitude, longitude } = usePosition(watch);

  return (
    <>
      {!latitude ? (
        <BeatLoader color="red" size={10} />
      ) : (
        <>
          latitude: {latitude}
          <br />
          longitude: {longitude}
          <br />
        </>
      )}
    </>
  );
};

export default Position;
