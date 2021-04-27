import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const AllPets = (props) => {
  return(
    <div>
      <h2>Pet Shelter</h2>
      <h4>These Pets Are Looking For A Good Home</h4>
    </div>
  )
}

export default AllPets;