import React from "react";
import example from "../../assets/pictures/articles_card_example.png";
import styles from "./ArticlesCard.module.css";

const ArticlesCard = () => {
  return (
    <div className={styles.articleCardContainer}>
      <div>
        <h3>Жизнь и правление Наполеона Бонапарта </h3>
      </div>
      <div className={styles.pictiresBlock}>
        <div>#История</div>
        <div>
          <img src={example} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
