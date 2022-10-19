import React from 'react'
import { Navbar } from './components/Navbar';
import { Blog } from './components/Blog';
import data from './data/data.json';

function App() {
  const cards = data.map(info => {
    return (
      <Blog 
      key={info.id}
      info={info}
      />
    )
  })
  return (
    <div class="container">
      <Navbar />
      <div>
        { cards }
      </div>
    </div>
  );
}

export default App;
