import React from "react";
import styles from "./ModalFilter.module.css";
import { checkboxName } from "../../helpers/checkboxName";

const ModalFilter = () => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.header}>
        <span>Фильтр</span>
        <span>Cбросить все</span>
      </div>

      <form className={styles.form}>
        {checkboxName.map((elem) => {
          return (
            <label className={styles.label}>
              <input type="checkbox" className={styles.input} />
              <span>{elem}</span>
            </label>
          );
        })}

        <button className={styles.formButton} type="submit">
          Применить{" "}
        </button>
      </form>
    </div>
  );
};

export default ModalFilter;
