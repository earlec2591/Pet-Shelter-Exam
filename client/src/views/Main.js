import React from 'react'
import { Router, Link } from '@reach/router'
import PetForm from '../components/PetForm';
import PetList from '../components/PetList';
import EditPetForm from '../components/EditPetForm';
import PetInfo from '../components/PetInfo';


const Main = () => {
    return (
      <div>
      <div className="container">
        <h2>Chenae's Pet Shelter</h2>
        <Link to='/'>Home</Link><br />
        <Link to='/new'>Add A Pet To The Shelter</Link>
      
      <Router>
        <PetList default />
        <PetForm path='/new' />
        <PetInfo path='/pets/:_id' />
        <EditPetForm path='/edit/:id' />
      </Router>
      </div>
      </div>
    )
}
export default Main;