import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const Footer = () => {
  const { contact,length,search } = useContext(DataContext);
  const filteredContacts = contact.filter((con) =>
  con.data.name.toLowerCase().includes(search.toLowerCase()) ||
  con.data.phone.includes(search)
);
  return (
    <footer style={{ textAlign: "center" }}>
      {filteredContacts.length!==0&&(
      <span style={{ fontWeight: "bold" }}>Total Number of Contacts {length}</span>
      )}
    </footer>
  );
};

export default Footer;
