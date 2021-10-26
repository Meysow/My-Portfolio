import React from "react";
import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav";

const Contacts = () => {
  return (
    <>
      <Nav chemin={"/"}>Home</Nav>
      <div className="contacts">
        <div className="contactsContainer">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contacts;
