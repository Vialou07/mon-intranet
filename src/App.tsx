import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import DocumentsPage from './pages/DocumentsPage';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            {/* Ajoutez d'autres routes ici */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
