import React, { useEffect, useState } from 'react'
import {useParams, NavLink} from 'react-router-dom'
import axios from 'axios'

function Language() {

  const {_id} = useParams(); // Obtener parametro de la URL
  const [language, setLanguage] = useState({})

  const fetchLanguage = async () => {
    try {
      const response = await axios.get (`https://www.dnd5eapi.co/api/languages/${_id}`)
      const datos = await response.data
      setLanguage(datos)
    } catch (error) {
      console.error ('error', error)
    }
  }

  useEffect( () => {
    fetchLanguage()
  }, [] )

  


  return (
    <div className='language-div'>
        <p className='language-title'>Language Detail</p>
         <p className='language-name'>{language.name}</p>
      <p className='language-p'>Type: {language.type}</p>
      <p className='language-p'>Script: {language.script}</p>
      <p className='flecha'><NavLink to = '/' className='link-flecha'>←</NavLink></p>
    </div>
  )
}

export default Language
