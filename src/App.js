import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Character from './component/character';
import Header from './component/Header';
import Footer from './component/Footer';
import CharacterDetails from './component/CharacterDetails';
import { getCharacterData } from './redux/characters';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterData());
  }, []);

  const [charId, setCharId] = useState(7);

  const handleDetails = (event) => {
    const btn = event.target.id;
    setCharId(Number(btn));
  };

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Character handleDetails={handleDetails} />} />
          <Route path="/details/:id" element={<CharacterDetails buttonId={charId} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
