import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleInput(e) {
    const contactInfo = e.target.value;
    const inputName = e.target.name;

    setContact((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: contactInfo,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (inputName === "lName") {
        return {
          lName: contactInfo,
          fName: prevValue.fName,
          email: prevValue.email
        };
      } else if (inputName === "email") {
        return {
          email: contactInfo,
          fName: prevValue.fName,
          lName: prevValue.lName
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleInput}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleInput}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleInput}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
