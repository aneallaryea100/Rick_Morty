import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacterData } from '../redux/characters';

function CharacterDetails(props) {
  const { buttonId } = props;
  console.log('checkk', Number(buttonId));
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characterSlice);
  const checkCharacterId = characters.filter((item) => item.id === Number(buttonId));
  console.log([checkCharacterId, Number(buttonId)]);

  useEffect(() => {
    dispatch(getCharacterData()).unwrap();
  }, []);
  return (
    <>
      {checkCharacterId.map((character) => (
        <div key={character.id} className="containerDetail">
          <div className="imageCharacter">
            <img alt={character.name} src={character.image} className="mainImage" />
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
              Type:
              {character.type}
            </li>
            <li>
              Gender:
              {character.gender}
            </li>
            <li>
              Origin:
              {character.origin.name}
            </li>
            <li>
              Location:
              {character.location.name}
            </li>
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
