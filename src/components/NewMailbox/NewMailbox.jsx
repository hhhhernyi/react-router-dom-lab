// had quite abit of trouble doing this lab
// needed to refer to pokemon form example alot to make things work
// need to practice alot more on this


import { useState } from "react";
import { useNavigate } from "react-router";

export default function NewMailbox(props) {
    const initialState={
        name:'',
        size:'',
        title:''
    }
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate()

// handleSubmit function: once submit button is clicked, we will prevent default refresh of page
// next, we will set formdata back to initial state which is blank
// next, we will run the function to update the mail state in app.jsx
// then we navigate to /mailbox
  function handleSubmit(event) {
    event.preventDefault();
    setFormData(initialState);
    props.addToMail(formData)
    navigate("/mailbox");
  }
  
  function handleChange(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <>
      <h2>Create your new mailbox!</h2>
      <form onSubmit={handleSubmit}>
        <label id="nameInput" htmlFor="name">enter your name: </label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange}></input>

        <label id="titleInput" htmlFor="title">enter your title:</label>
        <input id="title" name="title" type="text" value={formData.title} onChange={handleChange}></input>

        <label id="selectMailboxSizeLabel" htmlFor="size">  Mailbox size:</label>
        <select id="size" name="size" onChange={handleChange}>
        <option value="" selected disabled hidden>Choose here</option>
          <option id="small" value='small' name='size'>small</option>
          <option id="medium" value='medium' name='size'>medium</option>
          <option id="large" value='large' name='size'>large</option>
        </select>
        <button type='submit'>Create mailbox</button>
      </form>
    </>
  );
}
