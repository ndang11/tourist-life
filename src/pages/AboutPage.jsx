import AboutSearch from "../component/AboutSearch";
import AboutHero from "../component/HeroSections/AboutHero";

export default function AboutPage() {
  return (
    <>
      <div className="travel">
        <div className="about-page">
          <AboutHero
            title="We are dedicated to 
             providing the best travel experience."
            description="Discover the Land of a Thousand Hills"
            image="/images/about-img-header.png"
          />
        </div>
        <AboutSearch />
      </div>
      <section>
        <div className="heading-h1">
          <h2 className="about-heading">Welcome to Africa Wizzy Safari</h2>
          <img src="/images/Line 2.png" alt="line" />
        </div>
      </section>
      <section>
        <div className="card-about-details">
          <div className="sec-1">
            <div className="sec-1-image">
              <img src="/images/about-sec-img1.png" alt="" />
            </div>
            <div className="sec-1-p">
              <div className="p">
                Welcome to Africa Wizzy Safari, a leading tourism company based
                in Rwanda. We have been in business for over 5 years and are
                committed to providing top-quality tours and services to our
                clients. Our mission is to showcase the beauty and culture of
                Rwanda to visitors from around the world, and to contribute to
                the sustainable development of the country through responsible
                tourism practices.
              </div>
            </div>
          </div>

          <div className="sec-2">
            <div className="sec-2-p">
              <div className="p">
                At Africa Wizzy safari, we offer a wide range of tours and
                activities, including cultural and historical tours, wildlife
                safaris, mountain gorilla trekking, and more. Our experienced
                and knowledgeable guides will ensure that you have a safe and
                enjoyable experience while exploring the stunning landscapes and
                rich culture of Rwanda.
              </div>
            </div>
            <div className="sec-2-image">
              <img src="/images/about-sec-img2.png" alt="" />
            </div>
          </div>
          <div className="sec-3">
            <div className="sec-3-image">
              <img src="/images/about-sec-img3.png" alt="" />
            </div>
            <div className="sec-3-p">
              <div className="p">
                We are proud to have received numerous awards and accolades for
                our commitment to excellence, including the RDD award and the
                Excellence award.
                <br />
                <br />
                <br />
                <br />
                Thank you for choosing Africa Wizzy Safari for your travel needs
                in Rwanda. We look forward to welcoming you on one of our tours
                soon!
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
