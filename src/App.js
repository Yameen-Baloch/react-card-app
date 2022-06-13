import React, {useEffect, useState} from 'react';

import './App.css';

import SearchBox from './components/search-box/SearchBox';
import CardList from './components/card-list/CardList';

function App() {

  // Call Use State for Handle Search
  const [searchFeild, setSearchField] = useState('');
  
  // Call useState for calling Monsters
  const [monster, setMonsters] = useState([]);

  // call useEffect for api call
  useEffect(() =>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))
  }, [])

  

  // HandleSearch method for OnchangeHandler
  const handleSearch = (e) => {
    const searchText = e.target.value.toLocaleLowerCase();
    setSearchField(searchText);
  }

  // Function for filtering monsters

  const filteredMonsters = monster.filter((monster) =>{
    return monster.name.toLocaleLowerCase().includes(searchFeild);
  })

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>

      {/* Here is the searchBox component Called */}

      <SearchBox 
      className='search-box'
      onChangeHandler={handleSearch}
      placeholder='Search Mosnter' />

      {/* Call the Card List Component Here */}
      <CardList  monster={filteredMonsters}/>
      
    </div>
  );
}

export default App;
