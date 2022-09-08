/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterData = createAsyncThunk(
  './characters/getCharacterData',
  async () => {
    const fetchCharacters = await axios.get(url).catch((err) => err);
    const characterData = fetchCharacters.data.results;
    const fetchAllCharacters = characterData.map((newCharacter) => ({
      id: newCharacter.id,
      name: newCharacter.name,
      status: newCharacter.status,
      type: newCharacter.type,
      gender: newCharacter.gender,
      origin: newCharacter.origin.name,
      location: newCharacter.location.name,
      image: newCharacter.image,
    }));
    return fetchAllCharacters;
  },
);

const characterSlice = createSlice({
  name: 'characters',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacterData.fulfilled, (state, action) => action.payload);
  },
});

export const { displayCharacters } = characterSlice.actions;
export default characterSlice.reducer;
