import React, { useState } from "react";
import { useLocation } from "react-router-dom";
//
import "styles/scss/layout/header.scss";

export const Header = () => {
   const [navbar, setNavbar] = useState({
      activeBrand: false,
      openDrop: false
   });
   // Inicializamos el hook de location.
   let location = useLocation();
   // Broke component.
   if (location.pathname === "/login") return null;
   // Return current component.
   return (
      <header className="navbar is-light" role="navigation" aria-label="main navigation">
         <div className="navbar-brand is-flex is-align-items-center">
            <div className="navbar-item">
               <h1 className="title is-4 has-text-link-dark" href="https://bulma.io">
                  Posts Manager
               </h1>
            </div>

            <a
               onClick={() => {
                  setNavbar({
                     ...navbar,
                     activeBrand: !navbar.activeBrand
                  });
               }}
               role="button"
               className={`navbar-burger burger ${navbar.activeBrand ? "is-active" : ""}`}
               aria-label="menu"
               aria-expanded="false"
            >
               <span aria-hidden="true"></span>
               <span aria-hidden="true"></span>
               <span aria-hidden="true"></span>
            </a>
         </div>

         <div className={`navbar-menu ${navbar.activeBrand ? "is-active" : ""}`}>
            <div className="navbar-end">
               <a className="navbar-item is-active" href="#">
                  Posts
               </a>
               <a className="navbar-item" href="#">
                  Auhor
               </a>
               <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                     <i className="fa fa-user" />
                     Usuario loggeado
                  </a>
                  <div className="navbar-dropdown">
                     <a className="navbar-item">
                        <i className="fa fa-cog" />
                        Settings
                     </a>
                     <a className="navbar-item">
                        <i className="fa fa-sign-out" />
                        Log Out
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};
