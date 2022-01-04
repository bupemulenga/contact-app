import React from "react";

export default function ContactCard(props) {
  const { id, name, email, number } = props.contact;
  return (
    <div className="item" key={id}>
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="header">{name}</div>
        {email}
        <div className="description">{number}</div>
      </div>
      <i
        className="trash middle aligned alternate outline icon"
        style={{ color: "red" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
}
