import React from "react";
import { useLocation } from "react-router-dom";

export const Footer = () => {
   // Inicializamos el hook de location.
   let location = useLocation();
   // Broke component.
   if (location.pathname !== "/login") return null;
   return (
      <footer>
         <span>Footer</span>
      </footer>
   );
};
