// Importando libreria de react.
import React from "react";
// Importando componentes.
import { Info } from "components/Login/Info";
import { SigninForm } from "components/Login/SignInForm";
// Estilos
import "styles/scss/pages/login.scss";

// Exportando componente.
export const Login = () => {
   return (
      <div className="app-login is-flex is-flex-center has-background-white-ter">
         <div className="columns is-vcentered">
            <Info />
            <SigninForm />
         </div>
      </div>
   );
};
