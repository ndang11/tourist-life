import PropTypes from "prop-types";

export default function HeroSectionHeading({
  title,
  name,
  image,
  description,
}) {
  return (
    <>
      <div className="tour-pac">
        <h2 className="hero-title">{title}</h2>
        <div className="tour-1">
          <h5 className="sec-title">{name}</h5>
          <img src={image} alt="image" />
          <p className="hero-sec-paragraph">{description}</p>
        </div>
      </div>
    </>
  );
}

HeroSectionHeading.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  name: PropTypes.string,
};
