import PropTypes from "prop-types"

export default function HeroHeading({title, description, image, name}){
    return<>
    <h2 className="sub-heading">
        {title}
    </h2>
    <p className="hero-paragraph">{description}</p>
    <img src={image} alt="image" />
    <h5 className="heading5">{name}</h5>
    
    </>
}

HeroHeading.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.object,
    name: PropTypes.string,
}

