import { useState } from "react";

export default function Contact() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [elClicked, setState] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameInput('');
    setEmailInput('');
    setMessageInput('');
  };

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleMsgChange = (e) => {
    setMessageInput(e.target.value);
  };

  const handleClick = (e) => {
    if(e.target) {
      setState(true);
      // console.log(elClicked);
    } else {
      setState(false);
      // console.log(elClicked);
    }
  };

  document.addEventListener('click', (e) => {
    if(!elClicked) {
      setErrorMsg('All inputs must be filled.');
    }
  });

  return (
    <div className="container">
      <form id="messageForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" id="nameInput" value={nameInput} onChange={handleNameChange} onFocus={handleClick}></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="emailInput" value={emailInput} onChange={handleEmailChange} onFocus={handleClick}></input>
        </div>
        <div>
          <label className="form-label">Message</label>
          <textarea className="form-control" id="messageInput" rows={3} value={messageInput} onChange={handleMsgChange} onFocus={handleClick}></textarea>
        </div>
        <div className="mt-3">
          <p>{errorMsg}</p>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}