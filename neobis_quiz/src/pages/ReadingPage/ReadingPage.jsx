import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar/SearchBar";

const ReadingPage = () => {
  return (
    <MainLayout>
      <div>
        <SearchBar
          navigateLink={"/articles"}
          isShowSearch={false}
          isShowTitle={true}
        />
        <p>
          Наполеон I Бонапарт - французский полководец и государственный
          деятель. Император Франции (1804-1814 и в марте - июне 1815). В 1799
          году совершил государственный переворот и стал первым консулом; в 1804
          году был провозглашен императором. Значительно расширил территорию
          империи, поставил в зависимость от Франции большинство стран Западной
          и Центральной Европы. В 1814 году отрекся от престола. Вновь занял
          престол в 1815 году. После поражения при Ватерлоо (июнь 1815) был
          сослан на остров Святой Елены. Наполеон Буонапарте (Бонапарт) родился
          15 августа 1769 года в Аяччо, в семье адвоката Карло Буонапарте,
          происходившего из мелкопоместного корсиканского дворянства, и Летиции
          Рамолино, принадлежавшей к старинному патрицианскому роду. Карло
          Буонапарте, у которого из двенадцати детей выжило восемь, в награду за
          лояльность к Франции получил возможность отдать старших сыновей,
          Жозефа и Наполеона, в 1779 году в колледж. Наполеон через два месяца
          перешел в военную школу в Бриене. В 1784 году, получив звание кадета,
          он продолжил обучение в военной школе в Париже. Через год Наполеон был
          произведен в лейтенанты артиллерии и отправлен в престижный полк ла
          Фер. Бонапарт служил в Валансе и Оксонне. Его работоспособность была
          феноменальной: на сон ему требовалось не более 4-5 часов в сутки. Он
          много читал, продолжал заниматься самообразованием. Во время Великой
          французской революции (1789-1794) Наполеон встал на сторону
          жирондистов.
        </p>
      </div>
    </MainLayout>
  );
};

export default ReadingPage;