import './App.css';
import React from 'react';
import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import DesignNotes from './pages/DesignNotes';
import Illustration from './pages/Illustration';
import GraphicDesign from './pages/GraphicDesign';
import Multimedia from './pages/Multimedia';
import Writing from './pages/Writing';
import Commissions from './pages/Commissions';
import Links from './pages/Links';
import Toggle from './components/Toggle';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>PORTFOLIO</title>
          <meta name="description"
                content="Hi there! Call me Carol. I am an artist, writer, and creative coder studying immersive media design. Welcome to my creative portfolio!"
          />
        </Helmet>
        <Router>
        <div className="sidebar">

        <Link to="/"><img class="profile" src="images/titan-top.svg"></img></Link>
          <Link to="/"><h1 id="title">CAROL DINH ✦</h1></Link>
      
            <Link className="navlink" to="/art">Art</Link>
            <Link className="navlink" to="/design">Design</Link>
            <Link className="navlink" to="/tech">Tech</Link>
            <Link className="navlink" to="/writing">Writing</Link>

            <Toggle></Toggle>
                    
        </div>

        <div className="gallery">
        <Switch> 
          <Route path="/art">
            <h1>ART & ILLUSTRATION ✦</h1>
            <Illustration />
          </Route>
          <Route path="/design">
            <h1>GRAPHIC DESIGN ✦</h1>
            <GraphicDesign />
          </Route>
          <Route path="/tech">
            <h1>TECH ✦</h1>
            <Multimedia />
          </Route>
          <Route path="/commissions">
            <h1>COMMISSION ME ✦</h1>
            <Commissions />
          </Route>
          <Route path="/writing">
            <h1>WRITING ✦</h1>
            <Writing />
          </Route>
          <Route path="/design-notes">
            <h1>DESIGN NOTES ✦</h1>
            <DesignNotes />
          </Route>
          <Route path="/links">
            <Links />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home/>
            
          </Route>
        </Switch>
        </div>
        </Router>

      </div>
    )
  }
}

export default App;
