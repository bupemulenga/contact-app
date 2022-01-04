import React from "react";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
  const deleteContactHandler = (id) => {
    alert(`Passed id: ${id}`);
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

  return <div className="ui celled list">{renderContactList}</div>;
}
