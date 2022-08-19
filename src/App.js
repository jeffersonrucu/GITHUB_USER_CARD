import React, { useEffect, useState } from "react";
import api from "./services/api";
import './App.css';

function App() {
  const userNameGithub = 'jeffersonrucu';
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get(`/users/${userNameGithub}`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <div className='container'>
        <div className='card'>
          <figure className='card__image'>
            <img src={user?.avatar_url} alt="Imagem do usuario"/>
          </figure>
          
          <div className='card__content'>
            <h1 className='card__name'>{user?.name}</h1>
            <p className='card__bio'>{user?.bio}</p>
          </div>
          <a className='card__link' href={user?.html_url}>GitHub</a>
        </div>
      </div>
    </>
  );
}

export default App;
