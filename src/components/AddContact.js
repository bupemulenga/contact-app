//Example Class Componment
import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    number: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, number } = this.state;
    if (name === "" || email === "" || number === "") {
      alert("Please fill in all fields");
      return;
    } else {
      this.props.addContact(this.state);
      this.setState({ name: "", email: "", number: "" });
      console.log(this.props.history);
    }
  };

  render() {
    return (
      <div className="ui main">
        <h3>
          <strong>Add Contact</strong>{" "}
        </h3>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="name">Contact Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Contact Name"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="field">
            <label htmlFor="number">Contact Number</label>
            <input
              type="text"
              name="number"
              value={this.state.number}
              placeholder="Contact Number"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Email Address"
              onChange={this.handleOnChange}
            />
          </div>
          <button className="ui button blue">Save</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
