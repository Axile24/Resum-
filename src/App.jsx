import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route for routing
import Styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { About } from './components/About/About';
import Experience from './components/Experience/Experience';
import Swedavia from './components/pages/Swedavia'; // Import Swedavia component

function App() {
  return (
    <Router>
      <div className={Styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Routes>
          <Route path="/" element={<Experience />} />  {/* Route to Experience component */}
          <Route path="/Swedavia/:title" element={<Swedavia />} />  {/* Route for detailed Software Engineer page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
