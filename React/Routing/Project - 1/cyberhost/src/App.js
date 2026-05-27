import './App.css';
// import './Componet/About.css';
// import './Componet/Contact.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Route, Routes } from "react-router-dom";
import Home from './Componet/Home';
import About from './Componet/About';
import Serve from './Componet/Serve';
import Contact from './Componet/Contact';
import Header from './Componet/Header';
import Foter from './Componet/Foter';
import Domain from './Componet/Domain';

// https://html.dynamiclayers.net/it/cyberhost/

function App() {

  const red = {
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 5,
      }
    }

  }

  return (
    <div>
      <Header/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/serve' element={<Serve />} />
          <Route path='/Domain' element={<Domain />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      <Foter/>
    </div>
  );
}

export default App;
