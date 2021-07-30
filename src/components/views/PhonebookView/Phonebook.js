import React, { useEffect } from "react";
import Form from "../../Form";
import styles from "../../container.module.css";
import ContactsList from "../../ContactList";
import Filter from "../../Filter";
import { useDispatch, useSelector } from "react-redux";
import { getLoading } from "../../../redux/phonebook/contacts-selectors";
import { fetchContacts } from "../../../redux/phonebook/phonebook-operation";

export default function PhonebookView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <h1>Phonebook</h1>
      {isLoadingContacts && <h1>Downloading...</h1>}
      <Form />
      <h2>Contact List</h2>
      <Filter />
      <ContactsList />
    </section>
  );
}
