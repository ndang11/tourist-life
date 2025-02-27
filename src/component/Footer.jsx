import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-item">
            <h3>
              If you have any question,<br></br>Let us help you!
            </h3>
            <div className="footer-item-detail">
              <p className="footer-paragraph">
                If you have any questions or would like to book a tour with us,
                please do not hesitate to contact us.
              </p>
              <div className="footer-span">
                <span className="phone-number">Phone: +250 788 123 456</span>
                <span className="email"> Email: info@rwandatourism.com</span>
                <span className="address">Address: Kigali, Rwanda</span>
              </div>
            </div>
            <div className="footer-subscribe">
              <p>Subscribe to out newspaper</p>
              <div className="footer-input">
                <input
                  type="email"
                  id="input"
                  placeholder="Input your email here"
                />
                <button className="subscribe-btn">
                  <img src="/images/subscribe.png" alt="subscribe button" />
                </button>
              </div>
            </div>
          </div>
          <div className="footer-item2">
            <div className="footer-logo-media">
              <Logo />
              <SocialMedia />
            </div>
            <p className="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <div className="footer-item-wrap">
              <ul className="detail-list">
                <li>Home</li>
                <li>Testimonials</li>
                <li>Destination</li>
                <li>Sign In</li>
              </ul>
              <ul className="detail-list">
                <li>About Us</li>
                <li>Package</li>
                <li>Event</li>
                <li>Gallery</li>
              </ul>
              <ul className="detail-list">
                <li>Our Team</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-contact">
            <p className="footer-contact-p">Copyright Africa Wizzy Safari 2022</p>
        </div>
      </footer>
    </>
  );
}
