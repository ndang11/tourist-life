import PropTypes from "prop-types";


export default function OptionCard({image, description}) {
  return (
    <>
      <div className="option-item " id="option-card">
        <img src={image} alt="image" className="option-img" />
        <div className="option-detail">
          <p className="option-p">{description}</p>
        </div>
      </div>
    </>
  );
}

OptionCard.propTypes = {
  image: PropTypes.object,
  description: PropTypes.string,
};

