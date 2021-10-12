// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Header from './components/Header/Header';
import Definations from './components/Definations/Definations';

function App() {

  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const [lightMode, setLightMode] = useState(false);

  const DarkMode = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async() => {
    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      console.log(data);
      setMeanings(data.data);
      // console.log(meanings);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    dictionaryApi();
    // eslint-disable-next-line
  }, [category, word]);
  
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
        <div style={{position:"absolute", top:0, right:15, justifyContent:"space-evenly"}}> 
          <span>{(lightMode) ? "Light" : "Dark"} Mode: </span>
          <DarkMode checked={lightMode} onChange={()=>setLightMode(!lightMode)} />
        </div>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
        { meanings && 
          (<Definations category={category} word={word} meanings={meanings}/>)
        }
      </Container>
    </div>
  );
}

export default App;
