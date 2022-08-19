import './App.css';
import React,{ Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App=(props) => {
  const pageSize=18;
  const apiKey=process.env.REACT_APP_NEWS_API //imports api key from .env.local which is a file storing the key in the parent app folder, create the file if you don't have it already by the name 'REACT_APP_NEWS_API', make sure to store key as a string.
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category='general' />} />
          <Route path='general' element={<News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category='general' />} />
          <Route path='business' element={<News key="business" apiKey={apiKey} pageSize={pageSize} country="in" category='business' />} />
          <Route path='entertainment' element={<News key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category='entertainment' />} />
          <Route path='health' element={<News key="health" apiKey={apiKey} pageSize={pageSize} country="in" category='health' />} />
          <Route path='science' element={<News key="science" apiKey={apiKey} pageSize={pageSize} country="in" category='science' />} />
          <Route path='sports' element={<News key="sports" apiKey={apiKey} pageSize={pageSize} country="in" category='sports' />} />
          <Route path='technology' element={<News key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category='technology' />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
