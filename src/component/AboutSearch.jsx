// import Button from "./Button";

export default function AboutSearch() {
  return (
    <>
      <div className="search-tap">
        <div className="select">
          <div className="guest-holder">
            <span className="guest-span">Guest</span>
            <select name="user" id="about-guest">
              <option value="user" className="adult">
                Adult
              </option>
            </select>
          </div>
          <div className="date-holder">
            <span className="span-date"> Date</span>
            <select name="date" id="about-date">
              <option value="Calender" className="calendar">
                12-13 April 2022
              </option>
            </select>
          </div>
          <div className="package-holder">
            <span className="span-package"> Package</span>
            <select name="package" id="about-package">
              <option value="package" className="package-option">
                Akagera Tour
              </option>
            </select>
          </div>
        </div>
        <button className="button" id="secondary-button">
          Book Now
        </button>
      </div>
    </>
  );
}
