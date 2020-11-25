import React from "react";
import { useLocation } from "react-router-dom";


export const Header = () => {
   // Inicializamos el hook de location.
   let location = useLocation();
   // Broke component.
   if (location.pathname === "/login") return null;
   // Return current component.
   return (
      <header>
         <span>Header</span>
      </header>
   );
};
