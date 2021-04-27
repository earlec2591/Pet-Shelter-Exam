// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { navigate } from '@reach/router';

// const EditPetForm = (props) => {
//   const [ name, setName ] = useState("");
//   const [ type, setType ] = useState("");
//   const [ description, setDescription ] = useState("");
//   const [ skillOne, setSkillOne ] = useState("");
//   const [ skillTwo, setSkillTwo ] = useState("");
//   const [ skillThree, setSkillThree ] = useState("");
//   const [ errors, setErrors ] = useState({});

//   useEffect(() => {
//     axios.get(`http://localhost:8000/api/pets/${props._id}`)
//       .then((res) => {
//         setName(res.data.name);
//         setType(res.data.type);
//         setDescription(res.data.description);
//         setSkillOne(res.data.skillOne);
//         setSkillTwo(res.data.skillTwo);
//         setSkillThree(res.data.setSkillThree);
        
//         console.log(res.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [props._id])

//   const onSubmitHandler = (e) => {
//     e.prevantDefault();
//     axios.put(`http://localhost:8000/api/pets/${props._id}`, {
//       name,
//       type,
//       description,
//       skillOne,
//       skillTwo,
//       skillThree,
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
//       <h2>Know A Pet Needing A Home?</h2>
//       <form onSubmit={onSubmitHandler}>
//         <div className="form-group">
//           <label>Pet Name: </label>
//           <input
//             type="text"
//             onChange={ (e) => setName(e.target.value)}
//             className="form-control"
//             value={name}
//           />
//           <span className="text-danger">{errors.type ? errors.type.message: ""}</span>
//         </div>
//         <div className="form-group">
//           <label>Type: </label>
//           <input
//             type="text"
//             onChange={ (e) => setType(e.target.value)}
//             className="form-control"
//             value={type}
//           />
//           <span className="text-danger">{errors.type ? errors.type.message: ""}</span>
//         </div>
//         <div className="form-group">
//           <label>Description: </label>
//           <input
//             type="text"
//             onChange={ (e) => setDescription(e.target.value)}
//             className="form-control"
//             value={description}
//           />
//           <span className="text-danger">{errors.description ? errors.description.message: ""}</span>
//         </div>
//         <div className="form-group">
//           <label>Skill 1: </label>
//           <input
//             type="text"
//             onChange={ (e) => setSkillOne(e.target.value)}
//             className="form-control"
//             value={skillOne}
//           />
//           <span className="text-danger">{errors.skillOne ? errors.skillOne.message: ""}</span>
//         </div>
//         <div className="form-group">
//           <label>Skill 2: </label>
//           <input
//             type="text"
//             onChange={ (e) => setSkillTwo(e.target.value)}
//             className="form-control"
//             value={skillTwo}
//           />
//           <span className="text-danger">{errors.skillTwo ? errors.skillTwo.message: ""}</span>
//         </div>
//         <div className="form-group">
//           <label>Skill 3: </label>
//           <input
//             type="text"
//             onChange={ (e) => setSkillThree(e.target.value)}
//             className="form-control"
//             value={skillThree}
//           />
//           <span className="text-danger">{errors.skillThree ? errors.skillThree.message: ""}</span>
//         </div>
//         <input 
//           type="submit"
//           value="Edit Pet"
//           className="btn btn-success" 
//         />
//       </form>
//     </div>
//   )
// }

// export default EditPetForm;