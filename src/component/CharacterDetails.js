import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacterData } from '../redux/characters';

function CharacterDetails(props) {
  const { buttonId } = props;
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characterSlice);
  const checkCharacterId = characters.filter(
    (item) => item.id === buttonId,
  );

  useEffect(() => {
    dispatch(getCharacterData()).unwrap();
  }, []);
  return (
    <>
      {checkCharacterId.map((character) => (
        <div key={character.id} className="containerDetail">
          <div className="imageCharacter">
            <img
              alt={character.name}
              src={character.image}
              className="mainImage"
            />
          </div>
          <div className="listDetail">
            <li>
              Name:
              {character.name}
            </li>
            <li>
              Status:
              {character.status}
            </li>
            <li>
              Gender:
              {character.gender}
            </li>
            <li>
              Origin:
              {character.origin}
            </li>
            <li>
              Location:
              {character.location}
            </li>
            <Link to="/">
              <button className="backBtn" type="button">
                Back
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default CharacterDetails;

CharacterDetails.propTypes = {
  buttonId: PropTypes.number.isRequired,
};
