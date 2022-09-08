import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterCard(props) {
  const {
    id, image, name, handleDetails,
  } = props;
  return (
    <div key={id}>
      <div className="imageContainer">
        <img src={image} alt={name} className="imageCharacterCard" />
      </div>
      <div className="cardFooter">
        <p className="nameCharacter">{name}</p>
        <button type="button" onClick={handleDetails} className="clickBtnCard">
          <Link className="detailedLink" id={id} to={`/details/${id}`}>Details</Link>
        </button>
      </div>

    </div>
  );
}

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleDetails: PropTypes.func.isRequired,
};

export default CharacterCard;
