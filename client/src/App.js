import './App.css';
import AllPets from './components/AllPets';
import PetDetails from './components/PetDetails';
import NewPets from './components/NewPets';
import EditPets from './components/EditPets';

function App() {
  return(
    <div className='App'>
      <AllPets />
      <PetDetails />
      <NewPets />
      <EditPets />
    </div>
  );
}

// import React from 'react';
// import Main from './views/Main';

// function App() {
//   return (
//     <div className="App">
//       <Main />
//     </div>
//   );
// }
export default App;


