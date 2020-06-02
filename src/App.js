import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Logo from "./components/Logo.js"
import Search from "./components/Search.js"

import Navbar from "./components/Navbar.js"

import AlbumArt from "./components/AlbumArt.js"
import PlayBack from "./components/PlayBack.js"
import Recommended from "./components/Recommended.js"
import Page2 from "./components/Page2.js"
import Discover from "./components/Discover.js"
import Trending from "./components/Trending.js"
import Following from "./components/Following.js"
import Library from "./components/Library.js"

import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
          <Logo />
          <Search />
          <Navbar />
          <AlbumArt /> 
          <PlayBack />
          <Recommended />
          <Switch>
            <Route path="/" exact component={Discover} /> 
            <Route path="/Page2" component={Page2} />
            <Route path="/Trending" component={Trending} />
            <Route path="/Following" component={Following} /> 
            <Route path="/Library" component={Library} /> 
          </Switch>
      </div>  
    </Router>
  );
}

export default App;
