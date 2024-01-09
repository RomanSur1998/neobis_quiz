import React from "react";
import styles from "./AnswersPage.module.css";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import Buttton from "../../components/Button/Buttton";

const AnswersPage = () => {
  return (
    <MainLayout>
      <SearchBar navigateLink={"/"} isShowSearch={false} />
      <div className={styles.container}>
        <h3 className={styles.tittle}>
          Вопрос 4. Какое событие считается началом Французской революции?
        </h3>
        <div className={styles.answerBlock}>
          {/* Map bloc */}
          <Buttton text={"Вопрос 1"} />
          <Buttton text={"Вопрос 1"} />
          <Buttton text={"Вопрос 1"} />
          <Buttton text={"Вопрос 1"} />
          {/* Map bloc */}
          <Buttton text={"Следующи вопрос"} isAnswers={true} />
        </div>
      </div>
    </MainLayout>
  );
};

export default AnswersPage;
