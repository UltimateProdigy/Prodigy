import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Techstack from './Pages/Tech Stack/TechStack';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/about" component={About} />
          <Route path="/techstack" component={Techstack}/>
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
