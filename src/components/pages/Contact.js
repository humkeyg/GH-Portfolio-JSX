import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div>
      <h5 className="contact-header">Contact</h5>

      <form action="mailto:humkeyg@gmail.com" method="post" encType="text/plain" onSubmit="this.submit(); this.reset(); return false;" className="form" id="form">

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name-text"/>
        </div>

        <div className="mb-3">
          <label htmlFor="email-text" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email-text" aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
          <label htmlFor="message-text">Message</label>
          <textarea type="text" className="form-control" id="message-text" name="message" rows="3"></textarea>
        </div>
        
        <button type="submit" value="Submit" className="btn btn-submit btn-warning">Submit</button>

        <p className="email">Email me directly at: <a href="mailto:humkeyg@gmail.com">humkeyg@gmail.com</a></p>

      </form>

    </div>
  );
}