import React from "react";
import MainLayout from "../../layouts/MainLayout";
import styles from "./FinishQuizPage.module.css";
import Buttton from "../../components/Button/Buttton";

const FinishQuizPage = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h2>Поздравляем!</h2>
        <div>
          <h3>Вы ответили правильно на </h3>
          <span>8 вопросов из 10</span>
        </div>
        <p>
          У вас всегда есть возможность пройти квиз заново, чтобы еще раз
          проверить свои знания!
        </p>

        <Buttton text={"Вернуться "} isAnswers={true} navigate={"/"} />
      </div>
    </MainLayout>
  );
};

export default FinishQuizPage;
