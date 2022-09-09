/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
  const { characters, handleDetails } = props;

  return (
    <>
      {characters.map((character) => (
        <div key={character.id} className="cardMaincontainer">
          <CharacterCard
            name={character.name}
            id={character.id}
            image={character.image}
            handleDetails={handleDetails}
          />
        </div>
      ))}
    </>

  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    handleDetails: PropTypes.func,
  })).isRequired,
};
export default CharacterList;
