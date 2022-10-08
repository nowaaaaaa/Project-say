import React from 'react';
import './Footer.css';

export function Footer() {
  const root = document.getElementsByTagName("html")[0];

  const toggleMode = () => {
    if (localStorage.theme === "light"){
      root.setAttribute("class", "dark");
      localStorage.theme = "dark";
    }
    else {
      root.removeAttribute("class");
      localStorage.theme = "light";
    }
  }
  
  return (
    <>
      <p className="footer-text text-center text-black dark:text-slate-400">Viscon Group</p>
      <footer className="footer bg-slate-500 dark:bg-slate-900">
        <img className="icon" src="theme-icon.png" draggable="false" onClick={toggleMode} alt='' />
      </footer>
    </>
  );
}