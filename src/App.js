import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/404/NotFound';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Footer from './pages/shared/footer/Footer';
import Header from './pages/shared/header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
