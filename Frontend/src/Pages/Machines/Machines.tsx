import React from 'react';
import './Machines.css';

import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'

export function Machines() {
  return (
    <body>
      < Navbar />
      <div className='filler-space bg-white dark:bg-slate-800' />
        <div className='centerBox bg-white dark:bg-slate-700'>
          <h1>Your Machines</h1>
          <div className='machine bg-vBlue dark:bg-orange-700'>
            <input type="radio" name='machacc' id='mach1' className='checkbox'/>
            <label htmlFor="mach1" className='accordionLabel font-'>Machine 1</label>
            <p className='accText bg-white dark:bg-orange-600'>Problem 1</p>
            <p className='accText bg-white dark:bg-orange-600'>Problem 2</p>
            <p className='accText bg-white dark:bg-orange-600'>Problem 3</p>
            <a href="problemsolver" className='accResolve bg-red-800 hover:bg-rose-800'> Problem Not Resolved?</a>
          </div>
          <div className='machine bg-vBlue dark:bg-orange-700'>
            <input type="radio" name='machacc' id='mach2' className='checkbox'/>
            <label htmlFor="mach2" className='accordionLabel'>Machine 2</label>
            <p className='accText bg-white dark:bg-orange-600'>Problem 1</p>
            <p className='accText bg-white dark:bg-orange-600'>Problem 2</p>
            <p className='accText bg-white dark:bg-orange-600'>Problem 3</p>
            <a href="problemsolver" className='accResolve bg-red-800 hover:bg-rose-800'> Problem Not Resolved?</a>
          </div>
          <div className='machine bg-vBlue dark:bg-orange-700'>
            <input type="radio" name='machacc' id='mach3' className='checkbox'/>
            <label htmlFor="mach3" className='accordionLabel'>Machine 3</label>
            <p className='accText bg-white dark:bg-orange-600'>Problem 1</p>
            <p className='accText bg-white dark:bg-orange-600'>Problem 2</p>
            <p className='accText bg-white dark:bg-orange-600'>Problem 3</p>
            <a href="/problemsolver" className='accResolve bg-red-800 hover:bg-rose-800'> Problem Not Resolved?</a>
          </div>
        </div>
      < Footer />
    </body>
  );
}

export default Machines;
