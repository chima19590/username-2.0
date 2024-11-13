import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import UserCard from './UserCard';  // Importing the UserCard component

const App = () => {
  // Example user data
  const user = {
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',  // Example avatar URL
    email: 'john.doe@example.com',
    location: 'New York, USA'
  };

  return (
    <div className="App">
      <h1>User Profile</h1>
      <UserCard 
        name={user.name} 
        avatar={user.avatar} 
        email={user.email} 
        location={user.location} 
      />
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
