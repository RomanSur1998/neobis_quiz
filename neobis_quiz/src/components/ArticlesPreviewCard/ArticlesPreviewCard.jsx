import React from "react";
import example from "../../assets/pictures/arist.svg";
import styles from "./ArticlesPreviewCard.module.css";

const ArticlesPreviewCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        <h3>
          Философия <br /> Аристотеля
        </h3>
        <div>
          <span>#Философия</span>:<span>15 минут </span>
        </div>
      </div>
      <div>
        <img src={example} alt="" />
      </div>
    </div>
  );
};

export default ArticlesPreviewCard;
