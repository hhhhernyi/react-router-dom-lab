// src/App.jsx

import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Mailbox from "./components/Mailbox/Mailbox";
import NewMailbox from "./components/NewMailbox/NewMailbox";
import { useState } from "react";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

const App = () => {
  const [mailbox, setMailbox] = useState([  ]); // mailbox is set to an empty array state

  function addToMail(newMail) {
    newMail.id=mailbox.length+1
    setMailbox([...mailbox, newMail]);

  }
  return (
    <>
      <h1>My Mailbox</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Welcome to the post office!</h2>} />
        <Route path="/mailbox" element={<Mailbox mailbox={mailbox} />} />
        <Route path="/mailbox/:mailId" element={<MailboxDetails mailbox={mailbox}/>} />
        <Route path="/new-mailbox" element={<NewMailbox addToMail={addToMail}/>} />
        <Route path='/*' element={<h1>Uh Oh, there's nothing here </h1>}/>
      </Routes>
    </>
  );
};

export default App;
