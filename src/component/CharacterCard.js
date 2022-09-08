import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterCard(props) {
  const {
    id, image, name, handleDetails,
  } = props;
  return (
    <div key={id}>
      <p>{name}</p>
      <img src={image} alt={name} />
      <button type="button" onClick={handleDetails}>
        <Link className="detailedLink" id={id} to={`/details/${id}`}>Details</Link>
      </button>
    </div>
  );
}

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleDetails: PropTypes.func.isRequired,
};

// handleDetails
export default CharacterCard;
