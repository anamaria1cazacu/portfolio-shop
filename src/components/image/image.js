import PropTypes from "prop-types";
import "./image.css";

const Image = (props) => {
  return (
    <div className="container">
      <div className="preview">
        <img alt={"PreviewPhoto"} src={props.link} />
      </div>
      <div className="name">
        <span>Title:</span>
        <p>{props.name}</p>
      </div>
      <div className="tags">
        <span>TAGS:</span>
        <p>{props.tags}</p>
      </div>
    </div>
  );
};

Image.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Image;
