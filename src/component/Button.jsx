import Proptypes from "prop-types";

export default function Button({ onClick, label, style = "primary" }) {
  return (
    <>
      <button className={`button ${style}`} onClick={onClick}>
        {label}
      </button>
    </>
  );
}

Button.propTypes = {
  onClick: Proptypes.func,
  label: Proptypes.string,
  style: Proptypes.string,
};
