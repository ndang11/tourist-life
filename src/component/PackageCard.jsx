import Button from "./Button";
import PropTypes from "prop-types";

export default function PackageCard({ image, title, description }) {
  return (
    <>
      <div className="card-item">
        <img src={image} alt="image" className="package-img" />
        <div className="package-detail">
          <h3 className="package-title">{title}</h3>
          <p className="package-p">{description}</p>
          <Button label="Learn More" />
        </div>
      </div>
    </>
  );
}

PackageCard.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};
