import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCharacterData } from '../redux/characters';
import CharacterList from './characterList';

function Character(props) {
  const characters = useSelector((state) => state.characterSlice);
  const dispatch = useDispatch();
  const { handleDetails } = props;

  useEffect(() => {
    dispatch(getCharacterData());
  }, []);

  return (
    <div>
      <CharacterList characters={characters} handleDetails={handleDetails} />
    </div>

  );
}

export default Character;

Character.propTypes = {
  handleDetails: PropTypes.func.isRequired,
};
