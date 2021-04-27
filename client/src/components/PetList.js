// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from '@reach/router';

// const PetList = (props) => {
//     const [ pets, setPets ] = useState([]);
//   useEffect( () => {
//     getAll();
//   }, [])
  
//   const getAll = () => {
//     axios.get('http://localhost:8000/api/pets')
//       .then((res) => {
//         setPets(res.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }

//   return(
//     <div className="container">
//       <h2>Pet Shelter</h2>
//       <h4>These Pets Are Looking For A Good Home!</h4>
//       <table className="table table-hover table-striped">
//         <tbody>
//           <tr>
//             <th>Name</th>
//             <th>Type</th>
//             <th>Actions</th> 
//           </tr>
//       {
//         pets.map( pet =>
//           <tr key={pet._id}>
//             <td><Link to={`/pet/${pet._id}`}>{pet.name}</Link></td>
//             <td>{pet.type}</td>
//             <td>
//               <Link to={`/edit/${pet._id}`} className="btn-link" >
//               Edit
//               </Link>
//             </td>
//           </tr>
//         )
//       }
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default PetList;