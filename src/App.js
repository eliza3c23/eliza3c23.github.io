import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Github from './pages/Github';
import Interest from './pages/Interest';
import Resume from './pages/Resume';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { css, jsx } from "@emotion/core";
import styled from '@emotion/styled'


function App() {
  return (
    <div className="App">
      <main>
          <Router>
              <Switch>
                <Route exact path = "/" component={Home}/>
                <Route path = "/home" component={Home}/>
                <Route path = "/about" component={About}/>
                <Route path = "/blog" component={Blog}/>
                <Route path = "/github" component={Github}/>
                <Route path = "/interest" component={Interest}/>
                <Route path = "/resume" component={Resume}/>
              </Switch>
        </Router>
        <Navbar />
      
      </main>
    </div>
  );
}

export default App;
