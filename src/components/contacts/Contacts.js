import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Contacts = ({ contacts, personName, changeChat, currentUser }) => {
  const [token, setToken] = useState("");
  const [currentSelected, setCurrentSelected] = useState(undefined);
  const [currrentuserName, setCurrrentUserName] = useState(undefined);

  const changeCurrrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <div className="main-contacts">
      <div className="contacts">
        {contacts.map((contact, index) => {
          return (
            <div
              className={`contact ${
                index === currentSelected ? "selected" : ""
              }`}
              key={index}
              onClick={() => changeCurrrentChat(index, contact)}
            >
              <div className="userName">
                <h3>{contact.first_name}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="current-user">
        <p>{personName}</p>
      </div>
    </div>
  );
};

export default Contacts;
