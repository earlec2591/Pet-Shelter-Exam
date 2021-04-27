// import './App.css';
// import { Router } from '@reach/router';
// import AllPets from './components/AllPets';
// import PetDetails from './components/PetDetails';
// import NewPets from './components/NewPets';
// import EditPets from './components/EditPets';

// function App() {
//   return(
//     <div className='App'>
//       <Router>
//         <AllPets default />
//         <NewPets path='/pets/new' />
//         <PetDetails path='/pets/:id' />
//         <EditPets path='/pets/:id/edit' />
//       </Router>
//     </div>
//   );
// }

import React from 'react';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}
export default App;
