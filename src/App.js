import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material'

function App() {

  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async() => {
    try{
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane');
      console.log(data);
      setMeanings(data.data);
      // console.log(meanings);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    dictionaryApi();
  }, []);
  
  return (
    <div className="App" 
      style={{
      height: "100vh",
      backgroundColor: "#282c34",
      color: "white",
      transition: "all 0.5s linear",
    }}>
      <Container maxWidth="md"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-evenly",
      }}>
        Dictionary
      </Container>
    </div>
  );
}

export default App;
