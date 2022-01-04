import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

export default function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.deleteContactFromList(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deleteContactHandler}
      />
    );
  });

  return (
    <div class="main">
      <h3>Contact List</h3>
      <Link to="/addcontact">
        <button className="ui button teal right">Add Contact</button>
      </Link>

      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
}
