import Hero from "../component/HeroSections/Hero";
import HeroSectionHeading from "../component/HeroSections/HeroSectionHeading";
import SectionHeading from "../component/HeroSections/SectionHeading";
import PackageCard from "../component/PackageCard";

export default function PackagePage() {
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
        </div>
      </section>
      <section>
        <div className="arrow">
          <img src="/images/Button-direc1.png" alt="image" />
          <img src="/images/Button-direc2.png" alt="image" />
        </div>
      </section>
    </>
  );
}
