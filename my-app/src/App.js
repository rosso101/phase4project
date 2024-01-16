import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage'; // Correct path
import PostPage from './pages/PostPage';
import UserProfilePage from './pages/UserProfile' // Correct path

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/" exact component={HomePage} />
        <Route path="/post/:postId" component={PostPage} />
        <Route path="/user/:userId" component={UserProfilePage} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
