import React from 'react';

const Contact = () => (
  <section className="Contact">
    <div className="Contact__container">
      <h1 className="Contact__title heading">Get in touch</h1>
      <p className="Contact__text">
        I'm currently looking for work.<br /> I'd love to hear from you if you
        are hiring.
      </p>
      <p className="Contact__text">
        You can{' '}
        <a href="mailto:barnes.kai@gmail.com" target="_top">
          email me{' '}
        </a>
        or use this form
      </p>

      <form action="https://formspree.io/barnes.kai@gmail.com" method="POST">
        <div>
          <p className="Contact__form-label">
            <label htmlFor="name">Name</label>
          </p>
          <input
            className="Contact__form-input"
            type="text"
            id="name"
            name="Name"
          />
        </div>
        <div>
          <p className="Contact__form-label">
            <label htmlFor="name">Email</label>
          </p>

          <input
            className="Contact__form-input"
            type="email"
            id="email"
            name="Email"
          />
        </div>
        <div>
          <p className="Contact__form-label">
            <label htmlFor="name">Message</label>
          </p>

          <textarea
            className="Contact__form-textarea"
            id="message"
            name="Message"
          />
        </div>

        <input className="Contact__form-button" type="submit" value="Send" />
      </form>
    </div>
  </section>
);

export default Contact;
