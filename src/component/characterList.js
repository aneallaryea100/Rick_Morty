/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import { getCharacterData } from '../redux/characters';

function CharacterList(props) {
  const { characters, handleDetails, characterd } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const filteredCharacter = characters.filter((character) => (
    character.name.toLowerCase().includes(searchTerm.toLowerCase())));

  useEffect(() => {
    dispatch(getCharacterData());
  }, [searchTerm]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  return (
    <div className="layoutCharInput">
      <input
        type="text"
        className="inputField"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
      <div className="theCardHolders">
        {filteredCharacter.map((character) => (
          <div key={character.id} className="cardMaincontainer">
            <CharacterCard
              name={character.name}
              id={character.id}
              image={character.image}
              handleDetails={handleDetails}
              characterd={characterd}
            />
          </div>
        ))}

      </div>

    </div>

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
