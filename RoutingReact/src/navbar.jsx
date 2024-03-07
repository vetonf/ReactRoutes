import './index.css';
import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (    
                <div className='navBar'>
                    <h1>Veton's route</h1>
                    <div className='contact'>
                        <Link to="contact">Contact</Link>
                    </div>
                    <div className='stuff'>
                        <Link to="/home">Home</Link>
                </div>
                    <div className='stuff'>
                        <Link to="/stuff">Stuff</Link>
                    </div>
                </div>
    )

}

export default Navbar;