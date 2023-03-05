import React, { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "",
      data: { name, email, message },
    })
      .then((response) => {
        if (response.data.status === "success") {
          alert("Message Sent.");
          resetForm();
        } else if (response.data.status === "fail") {
          alert("Message failed to send.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="dashboard-nav mh-100 col-2">
          <Navbar />
        </div>
      </div>
      <div className="App col-6">
        <div
          style={{
            backgroundColor: "#eaf9ff",
            maxHeight: "100%",
            width: "100%",
          }}
          className="dashboard-main mh-100 col-10"
        >
          <form
            id="contact-form"
            className="contact-form"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                id="name"
                value={name}
                onChange={onNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                id="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={onEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                rows="5"
                id="message"
                placeholder="Leave us your message"
                value={message}
                onChange={onMessageChange}
              />
            </div>
            <div className="submit-button">
              <button type="submit" className="btn btn-primary" id="submit-button">
                Submit
              </button>
            </div>
          </form>
          <div className="Contacts">
            <h4>Contact us through:</h4>
            <h3>Email : bebenibernard.gmail.co.ke</h3>
            <h3>Phone number : +254715012201</h3>
            <h2>Nairobi</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
