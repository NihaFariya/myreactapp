import './App.css';
import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<News pageSize={5} country="us" category="general" />}
          />
          <Route
            path="/business"
            element={<News pageSize={5} country="us" category="business" />}
          />
          <Route
            path="/entertainment"
            element={<News pageSize={5} country="us" category="entertainment" />}
          />
          
          <Route
            path="/health"
            element={<News pageSize={5} country="us" category="health" />}
          />
          <Route
            path="/science"
            element={<News pageSize={5} country="us" category="science" />}
          />
          <Route
            path="/sports"
            element={<News pageSize={5} country="us" category="sports" />}
          />
        </Routes>
      </Router>
    );
  }
}
