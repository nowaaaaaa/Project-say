import React, { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import './Navbar.css';
import './Sidebar.css';
import { Translate } from '../Languages/Translator';
import { LanguageSwitch } from '../../Components/Languages/LanguageSwitch'

import { info } from '../../BackendManager/endpoints';

var location:string = "";

let ref = new Map<string, string>();
ref.set('/', 'all')
ref.set("/login", 'all')
ref.set('/machines', 'werknemer')
ref.set('/userpage', 'werknemer')
ref.set('/problemSolver', 'werknemer')
ref.set('/visconPage', 'viscon werknemer')
ref.set('/visconpage', 'viscon werknemer')
ref.set('/userCreation', 'viscon werknemer')

export function NavbarContent({bar, toggleMode} : {bar:any, toggleMode:any}) {
  location = useLocation().pathname;
  const user = ref.get(location);
  
  useEffect(() => {
    axios.get(info)
      .then((response: AxiosResponse<any>) => {
        console.log(response.data);
      })
  }, [])
  
  // no user selected
  if (user === 'all') {
    // navbar
    if (bar === 'n') {
      return (
        <>
          <div className="navbar-menu text-cyan-800 dark:text-cyan-400">
            <a className="navbar-link text-cyan-800 dark:text-cyan-400 cursor-default">
              {Translate("Viscon Service Application")}
            </a>
          </div>
          <div className="navbar-button">
            <LanguageSwitch/>
            <svg className="icon stroke-cyan-800 dark:stroke-cyan-400 mr-[1vw]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={toggleMode}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            <a href="/login" className="navbar-button-link bg-vBlue dark:bg-slate-500 text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600">
            {Translate("Log In")}
            </a>
          </div>
        </>
      );
    }
    // sidebar
    if (bar === 's') {
      return (
        <>
          <div className='sidebar-menu'>
            <a href="/" className="sidebar-link text-black dark:text-white cursor-pointer">
            {Translate("Home")}
            </a>
          </div>
          <div className='sidebar-button'>
            <a href="/login" className="sidebar-button-link bg-vBlue dark:bg-slate-500 text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600">
            {Translate("Log In")}
            </a>
          </div>
        </>
      );
    }
  }

  // werknemer
  if (user === 'werknemer') {
    // navbar
    if (bar === 'n') {
      return (
        <>
          <div className="navbar-menu text-cyan-800 dark:text-cyan-400">
            <a href="/userpage" className="navbar-link text-cyan-800 dark:text-cyan-400 cursor-pointer">
            {Translate("Home")}
            </a>
            <a href="/machines" className="navbar-link text-cyan-800 dark:text-cyan-400 cursor-pointer">
            {Translate("Machines")}
            </a>
            <a href="/problemSolver" className="navbar-link text-cyan-800 dark:text-cyan-400 cursor-pointer">
            {Translate("Problem Solver")}
            </a>
          </div>
          <div className="navbar-button">
            <LanguageSwitch/>
            <svg className="icon stroke-cyan-800 dark:stroke-cyan-400 mr-[1vw]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={toggleMode}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            <a href="/login" className="navbar-button-link bg-vBlue dark:bg-slate-500 text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600">
            {Translate("Log Out")}
            </a>
          </div>
        </>
      );
    }
    // sidebar
    if (bar === 's') {
      return (
        <>
          <div className='sidebar-menu'>
            <a href="/userpage" className="sidebar-link text-black dark:text-white cursor-pointer">
            {Translate("Home")}
            </a>
            <a href="/machines" className="sidebar-link text-black dark:text-white cursor-pointer">
            {Translate("Machines")}
            </a>
            <a href="/problemSolver" className="sidebar-link text-black dark:text-white cursor-pointer">
            {Translate("Problem Solver")}
            </a>
          </div>
          <div className='sidebar-button'>
            <a href="/login" className="sidebar-button-link bg-vBlue dark:bg-slate-500 text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600">
            {Translate("Log Out")}
            </a>
          </div>
        </>
      );
    }
  }

  // viscon werknemer
  if (user === 'viscon werknemer') {
    // navbar
    if (bar === 'n') {
      return (
        <>
          <div className="navbar-menu text-cyan-800 dark:text-cyan-400">
            <a href="/" className="navbar-link text-cyan-800 dark:text-cyan-400 cursor-pointer">
            {Translate("Home")}
            </a>
            <a href="/visconPage" className="navbar-link text-cyan-800 dark:text-cyan-400 cursor-pointer">
            {Translate("Issues")}
            </a>
          </div>
          <div className="navbar-button">
            <LanguageSwitch/>
            <svg className="icon stroke-cyan-800 dark:stroke-cyan-400 mr-[1vw]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={toggleMode}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            <a href="/login" className="navbar-button-link bg-vBlue dark:bg-slate-500 text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600">
            {Translate("Log Out")}
            </a>
          </div>
        </>
      );
    }
    // sidebar
    if (bar === 's') {
      return (
        <>
          <div className='sidebar-menu'>
            <a href="/" className="sidebar-link text-black dark:text-white cursor-pointer">
            {Translate("Home")}
            </a>
            <a href="/visconPage" className="sidebar-link text-cyan-black dark:text-white cursor-pointer">
            {Translate("Issues")}
            </a>
          </div>
          <div className='sidebar-button'>
            <a href="/login" className="sidebar-button-link bg-vBlue dark:bg-slate-500 text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600">
            {Translate("Log Out")}
            </a>
          </div>
        </>
      );
    }
  }

  return (<></>);
}
