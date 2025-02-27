import Proptypes from "prop-types";

export default function Button({ onClick, label, style = "primary" }) {
  return (
    <>
      <div className="button">
        <button className={`button ${style}`} onClick={onClick}>
          {label}
        </button>
      </div>
    </>
  );
}

Button.propTypes = {
  onClick: Proptypes.func,
  label: Proptypes.string,
  style: Proptypes.string,
};
