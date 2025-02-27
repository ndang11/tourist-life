import PropTypes from "prop-types";

export default function AboutCard({ image, description }) {
  return (
    <>
      <div className="my-about-card">
        <div className="about-detail">
          <img src={image} alt="image" className="client-img" />
          <p className="about-card-p">{description}</p>
        </div>
      </div>
    </>
  );
}

AboutCard.propTypes = {
  image: PropTypes.object,
  description: PropTypes.string,
};
