import PropTypes from "prop-types";

export default function AboutHeading({ title }) {
  return (
    <>
      <div className="headline">
        <h1 className="sec-heading">{title}</h1>
      </div>
    </>
  );
}

AboutHeading.propTypes = {
  title: PropTypes.string,
};
