import Button from "./Button";

export default function Search() {
  return (
    <>
      <div className="search-bar">
        <div className="search-info">
          <input type="text" placeholder="Search activities or Destinations" className="input" />
          <div className="select">
            <select name="user" id="guest">
              <p>Guest</p>
              <option value="user">Adult</option>
            </select>
            <select name="date" id="date">
              <p>Date</p>
              <option value="Calender">12-13 April 2022</option>
            </select>
            <select name="package" id="package">
              <p>Packages</p>
              <option value="package">All</option>
            </select>
          </div>
        </div>
        <Button label="Book Now" />
      </div>
    </>
  );
}
