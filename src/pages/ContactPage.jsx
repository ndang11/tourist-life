import Button from "../component/Button";
import Hero from "../component/HeroSections/Hero";
import HeroSectionHeading from "../component/HeroSections/HeroSectionHeading";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email Sent to: ${formData.email}\nSMS Sent to: ${formData.phone}`);
    // Here you would integrate with an email/SMS API like EmailJS or Twilio
  };

  return (
    <>
      <Hero />
      <section>
        <HeroSectionHeading
          image="/images/Vector (1).png"
          tionHeading
          title="Contact"
          name="Home"
          description="Contact"
        />
      </section>
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
      {/* <section>
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
            <Button label="Submit" />
          </div>
        </div>
      </section> */}

      <section className="flex justify-center p-6">
        <div className="submit-detail">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="name-info">
              <div className="first-name">
                <h5>First Name</h5>
                <input
                  type="text"
                  id="name"
                  name="First Name"
                  placeholder="Input your First Name Here"
                  required
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
            <div className="message-input">
              <h5>Message</h5>
              <textarea
                id="message"
                name="message"
                placeholder="Write a message"
              ></textarea>
            </div>
            <Button label="Submit" />
          </form>
        </div>
      </section>
      <section>
        <div className="info-media">
          <div className="social-media1">
            <h3>Social media</h3>
            <span>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/facebook.png" alt="Facebook" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/twitter.png" alt="Twitter" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/linkin.png" alt="LinkedIn" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/insta.png" alt="Instagram" />
              </a>
            </span>
          </div>
          <div className="email-phone-info">
            <h3>Email & phone</h3>
            <div className="phone-contact1">
              <img src="/images/phone.png" alt="phone" />
              <span>+255 791 844 342</span>
            </div>
            <div className="email-contact1">
              <img src="/images/email.png" alt="email" />
              <span>rebaseproject@gmail.com</span>
            </div>
          </div>
          <div className="address-info">
            <h3>Address</h3>
            <p>
              kk 600 <br />
              Kigali, Rwanda
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
