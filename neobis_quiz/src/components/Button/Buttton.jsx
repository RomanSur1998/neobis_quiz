import React from "react";
import styles from "./Button.module.css";

const Buttton = ({ text, isAnswers, navigate }) => {
  return (
    <div
      onClick={() => {
        navigate("/quizsPreview");
      }}
    >
      <button className={isAnswers ? styles.button : styles.buttonAnswer}>
        {text}
      </button>
    </div>
  );
};

export default Buttton;
