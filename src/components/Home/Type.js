import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Student 🧑🎓 ",
          "Programmer 👨‍💻 ",
          "Computer Science Engineer 💻👷🏼 ",
          "Data Science Engineer 📈🧠 ",
          "Open Source Contributor ⚛️ ",
          "Problem Solver  🧩😕 ",
          "Team Player 🤝🏻 "
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
