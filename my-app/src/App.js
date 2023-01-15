import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'; //need to do (npm install react-router-dom --save)

import Home from './components/Home';
import Dog from './components/Dog';

import Cat from './components/Cat';
import Bird from './components/Bird';
import Fish from './components/Fish';
import './App.css';


class App extends Component {
  render() {
    return (
    <Router>
        <div className='App'>
          
          <nav className="navbar navbar-expand-sm navbar-dark ">
            
              
                <div className="navbar-brand text-light">
                    PET SHOP
                </div>
                <button 
                    className="navbar-toggler" 
                    type ="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navmenu">
                    
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ml-auto">
                  <li className='nav-item'><NavLink 
                                              to={'/'}  
                                              style={({ isActive }) => ({
                                                color: isActive ? '#FFA500' : '#fff',
                                                // background: isActive ? '#7600dc' : 'none',
                                                borderBottom: isActive ? '3px solid #FFA500' : 'none',
                                              })}  className="nav-link "> Home </NavLink></li>
                  <li className='nav-item'><NavLink 
                  to={'/dog'} 
                  style={({ isActive }) => ({
                    color: isActive ? '#FFA500' : '#fff',
                                                borderBottom: isActive ? '3px solid #FFA500' : 'none',
                    
                  })}
                  className="nav-link ">Dog</NavLink></li>
                  <li className='nav-item'><NavLink to={'/cat'}
                                              style={({ isActive }) => ({
                                                color: isActive ? '#FFA500' : '#fff',
                                                borderBottom: isActive ? '3px solid #FFA500' : 'none',
                                                
                                              })} className="nav-link ">Cat</NavLink></li>
                  <li className='nav-item'><NavLink to={'/bird'}
                  style={({ isActive }) => ({
                    color: isActive ? '#FFA500' : '#fff',
                                                                    borderBottom: isActive ? '3px solid #FFA500' : 'none',

                  })} className="nav-link ">Bird</NavLink></li>
                  <li className='nav-item'><NavLink to={'/fish'} 
                  style={({ isActive }) => ({
                    color: isActive ? '#FFA500' : '#fff',
                                                                    borderBottom: isActive ? '3px solid #FFA500' : 'none',

                  })}className="nav-link ">Fish</NavLink></li>

                </ul>
                </div>

            
         
          </nav>
          <hr />
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/dog' element={<Dog/>} />
              <Route path='/cat' element={<Cat/>} />
              <Route path='/bird' element={<Bird/>} />
              <Route path='/fish' element={<Fish/>} />

          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;