import React from "react";
import arrow from "../../assets/icons/arrow_left.svg";
import filter from "../../assets/icons/filter_button.svg";
import search from "../../assets/icons/search_icon.svg";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router";

const SearchBar = ({ navigateLink, isShowSearch, isShowTitle }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div>
        <img
          src={arrow}
          alt="arrow navigate"
          onClick={() => {
            navigate(navigateLink);
          }}
        />
        {!isShowTitle ? <span>Все статьи</span> : null}
      </div>
      {isShowSearch ? (
        <div>
          <form>
            <label htmlFor="search">
              <img src={search} alt="" />
            </label>
            <input type="text" placeholder="Поиск статей" id="search" />
          </form>
          <img src={filter} alt="" />
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default SearchBar;
