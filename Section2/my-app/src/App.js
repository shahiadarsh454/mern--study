import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import React from 'react';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import Todo from './components/Todo';
import Signup from './components/Signup';
import Chat from './components/Chat';
import { AnimatePresence } from 'framer-motion';
import ManageUser from './components/ManageUser';
function App() {
  return (
    <div>
      <AnimatePresence>
      <BrowserRouter>
        {/* <Link to="/homepage">Home</Link>
        <Link to="/login">Login</Link> */}
        <Navbar />
          <Routes>
              <Route element={<Home></Home>} path="/" />
              <Route element={<Home></Home>} path="homepage" />
              <Route element={<Login />} path="login" />
              <Route element={<EventHandling />} path="event" />
              <Route element={<Todo />} path="todo" />
              <Route element={<Signup />} path="signup" />
              <Route element={<Chat />} path="chat" />
              <Route element={<NotFound />} path="*" />
              <Route element={<ManageUser />} path="manage"/>
          </Routes>
      </BrowserRouter>

      </AnimatePresence>

    </div>
  );
}

export default App;