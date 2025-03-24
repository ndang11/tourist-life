import { useState } from "react";
import Hero from "../component/HeroSections/Hero";
import HeroSectionHeading from "../component/HeroSections/HeroSectionHeading";
import SectionHeading from "../component/HeroSections/SectionHeading";
// import PackageCard from "../component/PackageCard";

export default function PackagePage() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (packageName) => {
    setWishlist((prev) =>
      prev.includes(packageName)
        ? prev.filter((item) => item !== packageName)
        : [...prev, packageName]
    );
  };

  const packages = [
    {
      title: "PAris Tower",
      image:
        "https://th.bing.com/th/id/OIP.XJV8sAkHM9UDOBITw2h2PwHaE5?rs=1&pid=ImgDetMain",
      description:
        "Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.",
    },
    {
      title: "Bisoke Hike",
      image: "/images/lakeside.png",
      description:
        "Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.",
    },
    {
      title: "Lake Kivu Trip",
      image: "/images/river.png",
      description:
        "Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks.",
    },
  ];

  return (
    <>
      <Hero />
      <section>
        <HeroSectionHeading
          title="Tour Package"
          name="Home"
          image="/images/Vector (1).png"
          description="Tour Package"
        />
      </section>
      <section>
        <SectionHeading
          title="Choose your Package"
          heading="Select your Best Package for your Travel"
        />
      </section>
      <section>
        <div className="pac-1">
          {packages.map((pkg) => (
            <div key={pkg.title} className="card-item">
              <img src={pkg.image} alt={pkg.title} className="package-img" />
              <div className="package-detail">
                <h3>{pkg.title}</h3>
                <p className="package-p">{pkg.description}</p>
              </div>
              <button
                onClick={() => toggleWishlist(pkg.title)}
                className="primary"
                id="add-wishlist"
              >
                {wishlist.includes(pkg.title)
                  ? "❤️ Remove from Wishlist"
                  : "🤍 Add to Wishlist"}
              </button>
            </div>
          ))}
          {packages.map((pkg) => (
            <div key={pkg.title} className="card-item">
              <img src={pkg.image} alt={pkg.title} className="package-img" />
              <div className="package-detail">
                <h3>{pkg.title}</h3>
                <p className="package-p">{pkg.description}</p>
              </div>
              <button
                onClick={() => toggleWishlist(pkg.title)}
                className="primary"
                id="add-wishlist"
              >
                {wishlist.includes(pkg.title)
                  ? "❤️ Remove from Wishlist"
                  : "🤍 Add to Wishlist"}
              </button>
            </div>
          ))}

          {packages.map((pkg) => (
            <div key={pkg.title} className="card-item">
              <img src={pkg.image} alt={pkg.title} className="package-img" />
              <div className="package-detail">
                <h3>{pkg.title}</h3>
                <p className="package-p">{pkg.description}</p>
              </div>
              <button
                onClick={() => toggleWishlist(pkg.title)}
                className="primary"
                id="add-wishlist"
              >
                {wishlist.includes(pkg.title)
                  ? "❤️ Remove from Wishlist"
                  : "🤍 Add to Wishlist"}
              </button>
            </div>
          ))}
          {packages.map((pkg) => (
            <div key={pkg.title} className="card-item">
              <img src={pkg.image} alt={pkg.title} className="package-img" />
              <div className="package-detail">
                <h3>{pkg.title}</h3>
                <p className="package-p">{pkg.description}</p>
              </div>
              <button
                onClick={() => toggleWishlist(pkg.title)}
                className="primary"
                id="add-wishlist"
              >
                {wishlist.includes(pkg.title)
                  ? "❤️ Remove from Wishlist"
                  : "🤍 Add to Wishlist"}
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* <div className="pac-1">
          <PackageCard
            image="/images/giraff.png"
            title="Akagera National Park"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
          <PackageCard
            image="/images/lakeside.png"
            title="Bisoke Hike"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
          <PackageCard
            image="/images/river.png"
            title="Lake Kivu trip"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
        </div>
        <div className="package-card1">
          <PackageCard
            image="/images/giraff.png"
            title="Akagera National Park"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
          <PackageCard
            image="/images/lakeside.png"
            title="Bisoke Hike"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
          <PackageCard
            image="/images/river.png"
            title="Lake Kivu trip"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
        </div>
        <div className="package-card1">
          <PackageCard
            image="/images/giraff.png"
            title="Akagera National Park"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
          <PackageCard
            image="/images/lakeside.png"
            title="Bisoke Hike"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
          <PackageCard
            image="/images/river.png"
            title="Lake Kivu trip"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
        </div>
        <div className="package-card1">
          <PackageCard
            image="/images/giraff.png"
            title="Akagera National Park"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
          <PackageCard
            image="/images/lakeside.png"
            title="Bisoke Hike"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
          <PackageCard
            image="/images/river.png"
            title="Lake Kivu trip"
            description="Visitors to Akagera National Park can take part in a range of activities, including game drives, boat safaris, bird watching, and nature walks."
          />
        </div> */}
      <section>
        <div className="arrow">
          <img src="/images/Button-direc1.png" alt="image" />
          <img src="/images/Button-direc2.png" alt="image" />
        </div>
      </section>
    </>
  );
}
