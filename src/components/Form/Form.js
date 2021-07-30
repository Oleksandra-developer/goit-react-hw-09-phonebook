import React, { useState, useCallback } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import styles from "./Form.module.css";
import PropTypes from "prop-types";
import { getAllContacts } from "../../redux/phonebook/contacts-selectors";
import { addContact } from "../../redux/phonebook/phonebook-operation";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    // setName(e.target.value);
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const names = contacts.map((contact) => contact.name);
      names.includes(name)
        ? alert(`${name}  is alredy in contacts`)
        : dispatch(addContact({ name, number }));
      reset();
    },
    [dispatch, contacts, name, number]
  );

  return (
    <form className={styles.addForm} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          onChange={handleChange}
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) => {
    dispatch(addContact({ name, number }));
  },
});
export default connect(null, mapDispatchToProps)(Form);
