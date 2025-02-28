import Hero from "../component/HeroSections/Hero";
import SectionHeading from "../component/HeroSections/SectionHeading";
import PackageCard from "../component/PackageCard";
import DestinationCard from "../component/DestinationCard";
import OptionCard from "../component/OptionCard";
import ClientCard from "../component/ClientCard";
import Search from "../component/Search";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Search/>
      <section>
        <SectionHeading
          title="Choose your Package"
          heading="Select your Best Package for your Travel"
        />
      </section>
      <section className="package-section">
        <div className="package-card">
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

        <div className="package-card">
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
        <SectionHeading
          title="Popular Destinations"
          heading="Select Our Best Popular Destinations"
        />
      </section>
      <section>
        <div className="destination-card">
          <DestinationCard
            image="/images/kigali-img.png"
            title="Kigali"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit."
          />
          <DestinationCard
            image="/images/huye-img.png"
            title="Huye"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit."
          />
          <DestinationCard
            image="/images/rubavu-img.png"
            title="Rubavu"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit."
          />
          <DestinationCard
            image="/images/musanze-img.png"
            title="Musanze"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit."
          />
        </div>
      </section>
      <section>
        <SectionHeading
          title="Why us?"
          heading="Why Travel with Africa wizzy Safari"
        />
      </section>
      <section id="option">
        <div className="option-cardbox">
          <OptionCard
            image="/images/card-img1.png"
            description="100+ tours around Rwanda"
          />
          <OptionCard
            image="/images/card-img2.png"
            description="100% Trusted travel agency"
          />
          <OptionCard
            image="/images/card-img3.png"
            description="10 years of travel experience"
          />
          <OptionCard
            image="/images/card-img4.png"
            description="90% of travelors are happy"
          />
        </div>
      </section>
      <section>
        <SectionHeading
          title="Our Traveller Say"
          heading="What our clients say about us"
        />
      </section>
      <section className="client">
        <div className="client-info">
          <ClientCard
            image="/images/Ellipse profile-img.png"
            title="Emma Waston"
            description="I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization."
          />
          <ClientCard
            image="/images/Ellipse profile-img.png"
            title="Emma Waston"
            description="I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization."
          />
          <ClientCard
            image="/images/Ellipse profile-img.png"
            title="Emma Waston"
            description="I recently went on a tour with XYZ Tourism Company and was extremely impressed with the level of professionalism and organization."
          />
        </div>
        <div className="dash">
          <img src="/images/dash.png" alt="slider" />
        </div>
      </section>
    </>
  );
}
