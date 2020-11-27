import React from "react";
import { useLocation } from "react-router-dom";
import "styles/scss/layout/footer.scss";

export const Footer = () => {
   // Inicializamos el hook de location.
   let location = useLocation();
   // Broke component.
   if (location.pathname !== "/login") return null;
   return (
      <footer className="is-flex is-flex-center">
         <div className="content has-text-centered">
            <p>
               <strong>Posts Project</strong> by
               <a href="#"> Carlos Manuel Hernandez Mendez</a>.
               The source code is licensed by
               <a href="#"> ME</a>.
            </p>
         </div>
      </footer>
   );
};
