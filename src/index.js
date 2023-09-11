import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import Splash from './components/Splash/Splash'
import Ingredients from './components/Ingredients/Ingredients';
import Recipe from './components/Recipe/Recipe';
import Header from './components/Header/Header';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/app' element={<App />} />
        <Route path='/pantry' element={<Ingredients />} />
        <Route path='/recipes' element={<Recipe />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals()
