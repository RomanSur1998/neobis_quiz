import React, { useState } from "react";
import styles from "./ModalFilter.module.css";
import { checkboxName } from "../../helpers/checkboxName";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/slices/ArticlesSlice";

const ModalFilter = () => {
  const { filter } = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  const [newFilter, setNewFilter] = useState(null);
  console.log(newFilter, "newFilter");

  function handleSetFilter() {
    dispatch(setFilter(newFilter));
  }
  const formik = useFormik({
    initialValues: {
      input: null,
    },
    onSubmit: (values) => {
      // console.log(values.input, "values");
      dispatch(setFilter(values.input));
    },
  });

  console.log(filter, "filter");

  return (
    <div className={styles.modalContainer}>
      <div className={styles.header}>
        <span className={styles.headerTitle}>Фильтр</span>
        <span className={styles.headerCancel}>Cбросить все</span>
      </div>

      <form
        className={styles.form}
        // onSubmit={() => {
        //   handleSetFilter;

        // }}
        onSubmit={formik.handleSubmit}
      >
        {checkboxName.map((elem) => {
          return (
            <label className={styles.label} key={elem.id}>
              <input
                type="checkbox"
                className={styles.input}
                name="input"
                onChange={formik.handleChange}
                // onChange={(e) => setNewFilter(e.target.value)}
                value={elem.title}
              />
              <span>{elem.title}</span>
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
