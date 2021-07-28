import React, { useEffect } from "react";
import Form from "../../Form";
import styles from "../../container.module.css";
import ContactsList from "../../ContactList";
import Filter from "../../Filter";
import { connect } from "react-redux";
import { getLoading } from "../../redux/phonebook/contacts-selectors";
import { fetchContacts } from "../../redux/phonebook/phonebook-operation";

const PhonebookView = ({ fetchContacts }, { isLoadingContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

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
};

const mapStateToProps = (state) => ({
  isLoadingContacts: getLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
