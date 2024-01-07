import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import QuizCard from "../../components/QuizCard/QuizCard";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import styles from "./QuizPage.module.css";

const QuizPage = () => {
  const slides = [
    { key: 4, content: <QuizCard /> },
    { key: 3, content: <QuizCard /> },
    {
      key: 2,
      content: <QuizCard />,
    },
    {
      key: 1,
      content: <QuizCard />,
    },
  ];
  const table = slides.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });
  const [goToSlide, setGoToSlide] = useState();
  const [cards] = useState(table);

  return (
    <MainLayout>
      <section>
        <SearchBar navigateLink={"/"} isShowSearch={false} />
        <div className={styles.containerWrap}>
          <Carousel
            slides={cards}
            goToSlide={goToSlide}
            offsetRadius={2}
            showNavigation={false}
            animationConfig={config.gentle}
          />
        </div>
      </section>
    </MainLayout>
  );
};

export default QuizPage;