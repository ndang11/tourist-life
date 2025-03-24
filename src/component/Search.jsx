// import Button from "./Button";

// export default function Search() {
//   return (
//     <>
//       <div className="search-bar">
//         <div className="search-info">
//           <input type="text" placeholder="Search activities or Destinations" className="input" />
//           <div className="select">
//             <span>Guest</span>
//             <select name="user" id="guest">
//               <option value="user">Adult</option>
//             </select>
//             <select name="date" id="date">
//               <p>Date</p>
//               <option value="Calender">12-13 April 2022</option>
//             </select>
//             <select name="package" id="package">
//               <p>Packages</p>
//               <option value="package">All</option>
//             </select>
//           </div>
//         </div>
//         <Button label="Book Now" />
//       </div>
//     </>
//   );
// }

import { useState } from "react";
import Button from "./Button";

export default function Search() {
  const [searchData, setSearchData] = useState({
    destination: "",
    guests: 1,
    date: "",
    package: "All",
  });

  // Handle input changes
  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  // Handle booking submission
  const handleBooking = (e) => {
    e.preventDefault();

    if (!searchData.destination || !searchData.date) {
      alert("Please select a destination and date.");
      return;
    }

    alert(`✅ Booking confirmed for ${searchData.destination} on ${searchData.date} for ${searchData.guests} guest(s).`);

    // Clear form fields after successful booking
    setSearchData({
      destination: "",
      guests: 1,
      date: "",
      package: "All",
    });
  };

  return (
    <form onSubmit={handleBooking}>
      <div className="search-bar">
        <div className="search-info">
          {/* Destination Input */}
          <input 
            type="text" 
            name="destination"
            value={searchData.destination}
            onChange={handleChange}
            placeholder="Enter Destination (e.g., Akagera National Park)" 
            className="input"
            required
          />

          {/* Select Number of Guests */}
          <div className="select">
            <label>Guests</label>
            <select name="guests" value={searchData.guests} onChange={handleChange} id="guest">
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div className="select">
            <label  id="date">Date</label>
            <input 
              type="date" 
              name="date" 
              value={searchData.date} 
              onChange={handleChange}
              required 
            />
          </div>

          {/* Select Package */}
          <div className="select">
            <label>Package</label>
            <select name="package" value={searchData.package} onChange={handleChange} id="package">
              <option value="All">All</option>
              <option value="Safari">Safari Tour</option>
              <option value="Hiking">Hiking Adventure</option>
              <option value="City">City Exploration</option>
            </select>
          </div>
        </div>

        {/* Book Now Button */}
        <Button label="Book Now" type="submit" />
      </div>
    </form>
  );
}
