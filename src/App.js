import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    console.log(contact);
    setContacts([...contacts, contacts]);
  };

  return (
    <div className="ui container">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
