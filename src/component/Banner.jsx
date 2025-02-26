import SocialMedia from "./SocialMedia";

export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner-items">
          <div className="banner-item1">
            <div className="phone-contact">
              <img src="/images/phone.png" alt="phone" />
              <span>+255 791 844 342</span>
            </div>
          </div>
          <div className="banner-item2">
            <div className="email-contact">
              <img src="/images/email.png" alt="email" />
              <span>rebaseproject@gmail.com</span>
            </div>
          </div>
        </div>
        <SocialMedia />
      </div>
      
    </>
  );
}
