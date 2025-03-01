import Button from "../component/Button";
import Hero from "../component/HeroSections/Hero";

export default function ContactPage() {
  return (
    <>
      <Hero />
      <section>
        <div className="contact-head">
          <h1>Get in Touch</h1>
          <p>
            We would love to hear from you! If you have any comments or
            suggestions about our website or our tours, please do not hesitate
            to get in touch. We are always looking for ways to improve and make
            your travel experience even better.
          </p>
        </div>
      </section>
      <section>
        <div className="submit-detail">
          <h3>Contact us</h3>
          <div className="name-info">
            <div className="first-name">
              <h5>First Name</h5>
              <input
                type="text"
                id="name"
                name="First Name"
                placeholder="Input your First Name Here"
                required
              />
            </div>
            <div className="last-name">
              <h5>Last Name</h5>
              <input
                type="text"
                id="last"
                name="Last Name"
                placeholder="Input your Last Name Here"
                required
              />
            </div>
          </div>
          <div className="mail-input">
            <h5>Email Address</h5>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Input your Email Address Here"
              required
            />
          </div>
          <div className="phone-input">
            <h5>Phone Number</h5>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Input your Phone Number Here"
              required
            ></input>
            <div className="message-input">
              <h5>Message</h5>
              <textarea
                id="message"
                name="message"
                placeholder="Write a message"
              ></textarea>
            </div>
            <Button label="Submit"/>
          </div>
        </div>
      </section>
    </>
  );
}
