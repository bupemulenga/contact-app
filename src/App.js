import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const deleteContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
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
    <Router>
      <div className="ui container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                deleteContactFromList={deleteContact}
              />
            }
          />
          <Route
            path="/addcontact"
            element={<AddContact addContact={addContact} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
