import React from "react";

// Exportando componente.
export const SigninForm = () => {
   return (
      <aside className="column">
         <form className="box">
            <div className="field has-text-centered">
               <h1>Register easily and quickly</h1>
            </div>
            <div className="field">
               <input className="input is-rounded" type="name" placeholder="Name" />
            </div>
            <div className="field">
               <input className="input is-rounded" type="lastname" placeholder="Last Name" />
            </div>
            <div className="field">
               <input className="input is-rounded" type="email" placeholder="Email" />
            </div>
            <div className="field">
               <input className="input is-rounded" type="password" placeholder="Password" />
            </div>
            <div className="field is-flex is-justify-content-flex-end">
               <button className="button is-rounded is-link">Register</button>
            </div>
         </form>
      </aside>
   );
};
