import PropTypes from "prop-types";

export default function ClientCard({image, title, description}) {
  return (
    <>
      <div className="card-item " id="destination-card">
        <img src={image} alt="image" className="destination-img" />
        <div className="destination-detail">
          <h3 className="package-title">{title}</h3>
          <p className="package-p">{description}</p>
        </div>
      </div>
    </>
  );
}

ClientCard. propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};
