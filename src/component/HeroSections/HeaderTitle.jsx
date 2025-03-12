import PropTypes from "prop-types";



export default function HeaderTitle({ title, description }) {
  return (
    <>
      <div className="header-info1">
        <h1>{title}</h1>
        <p className="pic">{description}</p>
      </div>
    </>
  );
}

HeaderTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
