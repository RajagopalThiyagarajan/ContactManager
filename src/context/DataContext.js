import uuid4 from "uuid4";
import { createContext, useState, useEffect } from "react";
const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const localStorageKey = "contact";
  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);
  const [search, setSearch] = useState("");
  const contactlength = contact.length;
  const [selectedContact, setSelectedContact] = useState(null);
  const addContact = (data) => {
    setContact([...contact, { id: uuid4(), data }]);
  };
  const removeContact = (id) => {
    const filteredList = contact.filter((val) => {
      return val.id !== id;
    });
    setContact(filteredList);
  };
  const handleEditClick = (id) => {
    //finds the contact id for editing and set it as the selected contact for editing
    const contactToUpdate = contact.find((val) => val.id === id);
    setSelectedContact(contactToUpdate);
  };
  const handleUpdateContact = (updatedData) => {
    const updatedContacts = contact.map((val) => {
      if (val.id === updatedData.id) {
        return updatedData; //In this case, the current contact (val) needs to be replaced with the updated data (updatedData).
      }
      return val;
    });
    setContact(updatedContacts);
    setSelectedContact(null);
  };
  return (
    <DataContext.Provider
      value={{
        addContact,
        search,
        setSearch,
        selectedContact,
        handleUpdateContact,
        setSelectedContact,
        length: contactlength,
        contact,
        handleEditClick,
        removeContact,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
