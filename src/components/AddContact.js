import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";

const AddContact = () => {
  const { addContact } = useContext(DataContext);
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const[showSuccessPopup,setShowSuccessPopUp]=useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target; //object destructuring to extract the two properties from e.target object
    setContactData((prevData) => ({
      ...prevData,
      [name]: value, //dynamically updating value for the name in inputs
    }));
  };
  const handleAdd = (e) => {
    if (
      contactData.name === "" ||
      contactData.email === "" ||
      contactData.phone === ""
    ) {
      alert("Please fill all the details");
      return;
    }
    e.preventDefault();
    addContact(contactData);
    setContactData({ name: "", phone: "", email: "" });
    setShowSuccessPopUp(true)
    setTimeout(() => {
        setShowSuccessPopUp(false);
      }, 1500);
    };
  

  return (
    <div className="formHeader">
      <div className="add-contact">AddContact</div>
      <form className="contactForm">
        <div className="inputGroup">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={contactData.name}
            onChange={handleChange}
            className="inputField"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="phone" className="label">
            Phone Number:
          </label>
          <br />
          <input
            type="number"
            inputMode="tel"
            pattern="[0-9]*" 
            keyboardType="numeric" 
            placeholder="Enter Mobile Number"
            name="phone"
            value={contactData.phone}
            onChange={handleChange}
            className="inputField"
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <br />
          <input
            type="email"
            placeholder="Enter Mail Id"
            name="email"
            value={contactData.email}
            onChange={handleChange}
            className="inputField"
            required
          />
        </div>
        <button onClick={handleAdd} className="btn">
          Add Contact
        </button>
      </form>
      {showSuccessPopup && (
        <div className="success-popup">Contact added successfully!</div>
      )}
    </div>
  );
};
export default AddContact;
