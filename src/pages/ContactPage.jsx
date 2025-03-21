import Button from "../component/Button";
import Hero from "../component/HeroSections/Hero";
import HeroSectionHeading from "../component/HeroSections/HeroSectionHeading";

export default function ContactPage() {
  return (
    <>
      <Hero />
      <section>
        <HeroSectionHeading
          image="/images/Vector (1).png"tionHeading
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
            <Button label="Submit" />
          </div>
        </div>
      </section>
      <section>
        <div className="info-media">
          <div className="social-media1">
            <h3>Social media</h3>
            <span>
              <img src="/images/facebook.png" alt="icon" />
              <img src="/images/twitter.png" alt="" />
              <img src="/images/linkin.png" alt="" />
              <img src="/images/insta.png" alt="" />
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
            <p>kk 600 <br/>Kigali, Rwanda</p>
          </div>
        </div>
      </section>
    </>
  );
}
