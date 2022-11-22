import React, { createContext, useState } from 'react';
import ShowData from './ShowData';

import './Home.css'
import { Link, Outlet } from 'react-router-dom';
import CustomProfileLink from './CustomProfileLink';
export const MyContext = createContext("Book Name")

const Home = () => {
   
    return (
        
            <div>
                <div className='note-header'>
                    <h3> Note App</h3>
                </div>
                    
               <div className='d-flex'>
                <div className='nav-side'>
                 <ul>
                    <li><CustomProfileLink className='navbar-link' to="/">Add Note</CustomProfileLink>
                </li>
                    <li> <CustomProfileLink className='navbar-link' to="/showData"> Show Note</CustomProfileLink></li>
                 </ul>
                </div>
                <div className='data-show-side p-3'>
                    <Outlet/>
                </div>
               </div>
                


            </div>
        
    );
};

export default Home;