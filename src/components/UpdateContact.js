import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../context/DataContext';

const UpdateContact = () => {
  const { selectedContact, handleUpdateContact, setSelectedContact } = useContext(DataContext);
  const [updateData, setUpdateData] = useState({ name: '', phone: '', email: '' });

  // Set initial updateData when selectedContact changes
  useEffect(() => {
    if (selectedContact) {
      setUpdateData(selectedContact.data);
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateContact({ ...selectedContact, data: updateData });
    setSelectedContact(null);
  };

  const handleCancel = () => {
    setSelectedContact(null);
  };

  
  if (!selectedContact) {
    return null;
  }

  return (
    <div className="update-contact-modal">
      <h2 >Update Contact</h2>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="name" >Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={updateData.name}
          onChange={handleChange}
        />
        <label htmlFor="phone" >Phone:</label>
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*" 
          keyboardType="numeric" 
          name="phone"
          value={updateData.phone}
          onChange={handleChange}
        />
        <label htmlFor="email" >Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={updateData.email}
          onChange={handleChange}
        />
        <button type="submit" >Update</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default UpdateContact;
