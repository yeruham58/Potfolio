import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Javascript",
          "Node.JS",
          "React",
          "GraphQL",
          "Postgres",
          "Project architecture",
          "Leadership & Ownership",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
