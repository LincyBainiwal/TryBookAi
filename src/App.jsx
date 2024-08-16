import { BrowserRouter } from "react-router-dom";

import { Models, Roadmap, Hero, Navbar, Works, API, Prices } from "./components";
import hero from '../src/assets/hero.gif'
import SampleBook from "./components/SampleBook";

const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-[#2E236C] bg-cover bg-no-repeat bg-center min-h-screen'>
    <div className='relative z-0 '>
        
      
          <Navbar />
          <Hero />
        </div>
       
      
        <SampleBook/>
        
        <Prices />
      
        
        <div className='relative z-0'>
          <Models/>
          <Works />
          <Roadmap />
        <API/>
        </div>
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;