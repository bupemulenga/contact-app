import { useState, useEffect } from "react";
import "./App.css";
import { uuid } from "uuidv4";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
    console.log(contact.id);
  };

  //Get our persisted contacts from localstorage and render them even after refreshing the page
  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts !== []) setContacts(retrieveContacts);
  }, []);

  //Set our contacts in local storage so that we can persist them and use them later
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
