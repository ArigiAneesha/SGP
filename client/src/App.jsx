import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ChatButton from './Pages/ChatButton';
import Preloader from './components/Preloader';
import ElectricalSkyline from './components/ElectricalSkyline';
import BottomNavbar from './components/BottomNavbar'; 

const App = () => {
  return (
    <>
    <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ElectricalSkyline />
      <Footer />
      {/* <ChatButton /> */}
      <BottomNavbar />
    </>
  );
};

export default App;
