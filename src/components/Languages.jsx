import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Languages() {
  const [languages, setLanguages] = useState([]);

  async function fetchLanguages() {
    try {
      const response = await axios.get("https://www.dnd5eapi.co/api/languages");
      const datos = await response.data;
      setLanguages(datos.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchLanguages();
  });

  return (
    <div className="languages-div">
      <h1 className="h1">Languages</h1>
      {languages.map((language) => (
        <Idioma key={language.index} {...language} />
      ))}
    </div>
  );
}

const Idioma = (props) => {
  const { name, index } = props;
  return (
    <>
      <p className="language-name">{name}</p>
      <NavLink to={`/api/languages/${index}`} className='link'>Click to discover more</NavLink>
      <br></br>
    </>
  );
};

export default Languages;
