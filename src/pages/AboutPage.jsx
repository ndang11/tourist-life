import AboutCard from "../component/AboutCard";
import AboutHero from "../component/HeroSections/AboutHero";
import Search from "../component/Search";

export default function AboutPage() {
  return (
    <>
      <section className="travel">
        <div className="about-page">
          <AboutHero
            title="We are dedicated to 
providing the best travel experience."
            description="Discover the Land of a Thousand Hills"
            image="/images/about-img-header.png"
          />
        </div>
        <Search />
      </section>
      <section>
        <AboutHero title="Welcome to Africa Wizzy Safari" />
        <img src="/images/Line 2.png" alt="line" />
      </section>
      <section>
        <div className="card-about-details">
          <div className="sec-1">
            <AboutCard
              image="/images/about-sec-img1.png"
              description="Welcome to Africa Wizzy Safari, a leading tourism company based in Rwanda. We have been in business for over 5 years and are committed to providing top-quality tours and services to our clients. Our mission is to showcase the beauty and culture of Rwanda to visitors from around the world, and to contribute to the sustainable development of the country through responsible tourism practices."
            />
          </div>
          <div className="sec-2">
            <AboutCard
              description="At Africa Wizzy safari, we offer a wide range of tours and activities, including cultural and historical tours, wildlife safaris, mountain gorilla trekking, and more. Our experienced and knowledgeable guides will ensure that you have a safe and enjoyable experience while exploring the stunning landscapes and rich culture of Rwanda."
              image="/images/about-sec-img2.png"
            />
          </div>
          <div className="sec-3">
            <AboutCard
              image="/images/about-sec-img3.png"
              description="We are proud to have received numerous awards and accolades for our commitment to excellence, including the RDD award and the Excellence award. 


Thank you for choosing Africa Wizzy Safari for your travel needs in Rwanda. We look forward to welcoming you on one of our tours soon!"
            />
          </div>
        </div>
      </section>
    </>
  );
}
