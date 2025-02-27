import PropTypes from "prop-types";

export default function SectionHeading({ title, heading }) {
  return (
    <>
      <div className="headline">
        <h4 className="section-heading">{title}</h4>
        <h2>{heading}</h2>
      </div>
    </>
  );
}

SectionHeading.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
};
