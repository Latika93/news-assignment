import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; import Navbar from './components/Navbar';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('general');
  return (

    <Router>
      <Navbar setCategory={setCategory} />
      <Routes>
        <Route path="/" element={<BlogPostList category={category} />} />
        <Route path="/news-detail" element={<BlogPostDetails />} />
      </Routes>

    </Router>

  );
}

export default App;
