import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Button from '@material-ui/core/Button';


  const PetInfo = (props) => {
  const [pet, setPet] = useState({})

  const getPet = () => {
    axios.get("http://localhost:8000/api/pets/" + props._id)
      .then(response => {
        setPet(response.data)
        console.log(response)
    })
      .catch(err => console.log("Error:", err))
  }

  useEffect( () => {
    getPet();
  })

  const deleteObject = (_id) => {
    axios.delete(`http://localhost:8000/api/pets/${_id}`)
      .then(res => {
        console.log(res)
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container">
      <h2>Details about {pet.name}</h2>
        <p>Pet type: {pet.type}</p>
        <p>Description: {pet.description}</p>
        <p>Skills: 
          <ul>
            {pet.skillOne ? <li>{pet.skillOne}</li> : "" }
            {pet.skillTwo ? <li>{pet.skillTwo}</li> : "" }
            {pet.skillThree ? <li>{pet.skillThree}</li> : "" }
          </ul>
        </p>
        <Button 
          variant="contained" 
          onClick={ e => {deleteObject(pet._id)}} 
          color="secondary">
          Adopt This Pet!
        </Button>
        
    </div>
  )
}

export default PetInfo;
