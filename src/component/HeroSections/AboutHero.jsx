import PropTypes from "prop-types";

export default function AboutHero({ title, description, image }) {
  return (
    <>
      <div className="about-main">
        <div className="sub-title">
          <h1 className="about-title">{title}</h1>
          <p className="about-graph">{description}</p>
        </div>
        <div className="img-about">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}

AboutHero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
};
