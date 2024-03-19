import { useState } from 'react';
import NavBar from './scenes/navbar'
function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  return (
  <>
    <NavBar 
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
    />
  </>
    );
}

export default App;
