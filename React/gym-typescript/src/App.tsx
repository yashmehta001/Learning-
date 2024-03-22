import { useEffect, useState } from 'react';
import NavBar from './scenes/navbar'
import { SelectedPage } from './shared/types';
import Home from './scenes/Home';
import Benefits from './scenes/benefits';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(()=>{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleScroll =()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home);
      } 
      if(window.scrollY !== 0 ) setIsTopOfPage(false);

      window.addEventListener('scroll', handleScroll);
      return ()=> window.removeEventListener("scroll", handleScroll)
    }
  },[]);
  return (
  <>
    <NavBar
      isTopOfPage ={isTopOfPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage}/>
    <Benefits setSelectedPage={setSelectedPage} />
  </>
    );
}

export default App;
