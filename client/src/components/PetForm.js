// import React, { useState } from 'react';
// import axios from 'axios';
// import { navigate } from '@reach/router';

// const PetForm = (props) => {
//   const [ name, setName ] = useState("");
//   const [ type, setType ] = useState("");
//   const [ description, setDescription ] = useState("");
//   const [ skillOne, setSkillOne ] = useState("");
//   const [ skillTwo, setSkillTwo ] = useState("");
//   const [ skillThree, setSkillThree ] = useState("");
//   const [ errors, setErrors ] = useState({});

//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8000/api/pets', {
//       name,
//       type,
//       description,
//       skillOne,
//       skillTwo,
//       skillThree
//     })
//     .then((res) => {
//       if(res.data.errors) {
//         setErrors(res.data.errors);
//       } else {
//         navigate('/')
//       }
//       console.log(res)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//   }

//   return(
//     <div className="container">
//       <h2>Pet Shelter</h2>
//       <h4>Know A Pet Needing A Home?</h4>
//       <form onSubmit={onSubmitHandler}>
//         <div className="form-group">
//           <label>Pet Name:</label>
//           <input 
//             type="text"
//             className="form-control"
//             onChange={ (e) => setName(e.target.value)}
//           />
//           <span className="text-danger">{errors.name ? errors.name.message: ""}</span>
//         </div>
//         <div className="form-group">
//           <label>Type:</label>
//           <input 
//             type="text"
//             className="form-control"
//             onChange={ (e) => setType(e.target.value)}
//           />
//           <span className="text-danger">{errors.type ? errors.type.message: ""}</span>
//         </div>
//         <div className="form-group">
//           <label>Description:</label>
//           <input 
//             type="text"
//             className="form-control"
//             onChange={ (e) => setDescription(e.target.value)}
//           />
//           <span className="text-danger">{errors.description ? errors.description.message: ""}</span>
//         </div>
//         <div className="form-group">
//           <label>Skill 1:</label>
//           <input 
//             type="text"
//             className="form-control"
//             onChange={ (e) => setSkillOne(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Skill 2:</label>
//           <input 
//             type="text"
//             className="form-control"
//             onChange={ (e) => setSkillTwo(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Skill 3:</label>
//           <input 
//             type="text"
//             className="form-control"
//             onChange={ (e) => setSkillThree(e.target.value)}
//           />
//         </div>
//         <input 
//           type="submit"
//           value="Add Pet"
//           className="btn btn-primary"
//           />
//           <button onClick={ (e) => {navigate("/")}} className="btn btn-danger">Cancel</button>
//       </form>
//     </div>
//   )
// }

// export default PetForm;