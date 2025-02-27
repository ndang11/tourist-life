import PropTypes from "prop-types";

export default function ClientCard({image, title, description}) {
  return (
    <>
      <div className="client-item " id="detail-card">
        <img src={image} alt="image" className="client-img" />
        <div className="profile-detail">
          <h3 className="card-title">{title}</h3>
          <p className="card-p">{description}</p>
        </div>
      </div>
    </>
  );
}

ClientCard. propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};
