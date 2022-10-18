// 1. Components are JavaScript Functions.
// 2. Function name should start with uppercase letter
// 3. Function should return a single JSX element.
// 4. Function should be exported in its file.

import React from 'react';
import './Home.css';

const Home = () => {

  let myname = "Adarsh";
  let loggedIn = true;

  return (
    <div className='my-bg vh-100'>
      <h1 className="text-center" style={{color : 'red', backgroundColor: 'yellow' }} >Home Component</h1>
      <input value={myname} type="text" className='form-control' />
      <h1>{myname}</h1>
      <button className={loggedIn ? 'btn btn-danger' : 'btn btn-primary'}>{ loggedIn ? 'Logout' : 'Login' }</button>
    </div>
  )
}

export default Home;