import React from "react";
import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav";

const Contacts = () => {
  return (
    <>
      <div className="navigation">
        <Nav chemin={"/random"}>404</Nav>
        <Nav chemin={"/"}>home</Nav>
      </div>
      <div className="contacts">
        <div className="contactsContainer">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contacts;
