import React from "react";
import styles from "./QuizPreviewPage.module.css";
import history_logo from "../../assets/pictures/history_logo.svg";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import Buttton from "../../components/Button/Buttton";

const QuizPreviewPage = () => {
  return (
    <MainLayout>
      <SearchBar navigateLink={"/quiz"} isShowSearch={false} />
      <div className={styles.QuizPreviewPageContainer}>
        <h2 className={styles.title}>Квиз "История"</h2>
        <img src={history_logo} alt="" />
        <p className={styles.desription}>
          Добро пожаловать на квиз по истории. Это увлекательное путешествие
          через века и эпохи, которые сформировали наш мир таким, каким мы его
          знаем сегодня. В этом квизе вы окунетесь в важнейшие события, великих
          личностей и ключевые моменты, которые оказали огромное влияние на
          развитие человечества.
        </p>
        <Buttton
          text={"Начать квиз"}
          isAnswers={true}
          navigateName={"/answers"}
        />
      </div>
    </MainLayout>
  );
};

export default QuizPreviewPage;
