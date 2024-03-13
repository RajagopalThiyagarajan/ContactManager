import React, { useContext, useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import DataContext from "../context/DataContext";

export default function ContactList() {
  const { contact, removeContact, handleEditClick, search } =
    useContext(DataContext);
  const [newlyAddedContact, setNewlyAddedContact] = useState(null);

  useEffect(() => {
    if (newlyAddedContact) {
      setTimeout(() => {
        setNewlyAddedContact(null);
      }, 0);
    }
  }, [newlyAddedContact]);

  const filteredContacts = contact.filter(
    (con) =>
      con.data.name.toLowerCase().includes(search.toLowerCase()) ||
      con.data.phone.includes(search)
  );
  const matchingContactsCount=filteredContacts.length;

  const contactList = filteredContacts.map((val) => (
    
      <div className="wrappingCD" key={val.id}>
      <div
        className={`ContactItem ${
          val.id === newlyAddedContact ? "new-contact" : ""
        }`}
        
      >
        <div>
          <PersonIcon
            style={{ marginRight: "15px", marginTop: "5px", fontSize: "64px" }}
          />
        </div>

        <div className="ContactDetails">
          <h3>{val.data.name}</h3>
          <p className="phone">{val.data.phone}</p>
          <p className="email">{val.data.email}</p>
        </div>
      </div> 

      <div className="Icons">
                <span onClick={() => removeContact(val.id)}><DeleteIcon /></span>
                <span onClick={() => handleEditClick(val.id)}><EditIcon /></span>
            </div>

      </div>
  ));

  return (
    <>
    {search&&(
      <div
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "bold",
          color: "black",
          marginBottom: "10px",
          marginTop:"22px"
        }}
      >
        {matchingContactsCount > 0
          ? `Showing ${matchingContactsCount} matching contacts`
          : "No matching contacts found 😓"}
      </div>
      )}

      <div className="ContactsHeaderContainer">
        <div className="ContactsHeader">Contacts List</div>
      </div>
      {contactList.length > 0 ? (
      <div>{contactList}</div>
      ) : (
        <div
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "black",
            fontStyle: "italic",
            marginTop: "20px"
          }}
        >
          No contacts to show
        </div>
      )}
    </>
  );
}