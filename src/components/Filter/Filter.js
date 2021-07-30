import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/phonebook/phonebook-actions";
import { getPhonebookFilter } from "../../redux/phonebook/contacts-selectors";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getPhonebookFilter);
  const onChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
