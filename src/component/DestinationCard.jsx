import PropTypes from "prop-types";

export default function DestinationCard({ image, title, description }) {
  return (
    <>
      <div className="card-item1 " id="destination-card">
        <img src={image} alt="image" className="destination-img" />
        <div className="destination-detail">
          <h3 className="package-title">{title}</h3>
          <p className="package-p">{description}</p>
        </div>
      </div>
    </>
  );
}

DestinationCard.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};
