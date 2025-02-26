import Button from "./Button";
import PropTypes from "prop-types";

export default function PackageCard({image, description }) {
  return (
    <>
      <div className="card-item">
        <img src={image} alt="" />
        <p>{description}</p>
        <Button label="Learn More" />
      </div>
    </>
  );
}

PackageCard.propTypes = {
    image: PropTypes.object,
    description: PropTypes.string,
}


