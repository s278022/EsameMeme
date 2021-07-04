import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import API from './API';
import { Navbar } from 'react-bootstrap';
import Sfondo from './SfondiComponents.js';
import sfondo1 from './SfondiPerMeme/Sfondo1.jpg';
import { fakeMeme } from './fakeData';
import elencoMeme from './MemeComponents';


function App() {

  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // at the beginning, no user logged in


  const doLogin = async (credenziali) => {
    try {
      const user = await API.logIn(credenziali);
      setLoggedIn(true);
      setMessage({ msg: `Benvenuto, $[user]!`, type: 'success' });
    }
    catch (error) {
      setMessage({ msg: error, type: 'danger' });
    }
  }



  return (
    <>

      <div className='container'>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Page 1</a></li>
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
            </ul>
          </div>
        </nav>
       </div>


      <elencoMeme memes = {elencoMeme}></elencoMeme>


      
      

    </>
  );
}

/*
<div className='row'>
<Sfondo
  immagine={sfondo1}
  titolo="Prova sfondo 1" />
</div>
*/ 
export default App;
