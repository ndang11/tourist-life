import PropTypes from "prop-types";

export default function SectionHeading({ title, heading }) {
  return (
    <>
      <div className="headline">
        <h5 className={`h5 ${title}`}></h5>
        <h2>{heading}</h2>
      </div>
    </>
  );
}

SectionHeading.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
};
