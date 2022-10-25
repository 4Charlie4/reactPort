import React from "react";

function ContactForm() {
  //With JSX we need to use htmlFor instead of for
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contactFrom">
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
