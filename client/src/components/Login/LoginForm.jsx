import React from "react";

// Exportando componente.
export const LoginForm = () => {
   return (
      <aside className="column">
         <form className="box">
            <div className="field">
               <p className="control has-icons-left has-icons-right">
                  <input className="input is-rounded" type="email" placeholder="Email" />
                  <span className="icon is-small is-left">
                     <i className="fa fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                     <i className="fa fa-check"></i>
                  </span>
               </p>
            </div>
            <div className="field">
               <p className="control has-icons-left">
                  <input className="input is-rounded" type="password" placeholder="Password" />
                  <span className="icon is-small is-left">
                     <i className="fa fa-lock"></i>
                  </span>
               </p>
            </div>
            <div className="field is-grouped is-justify-content-center">
               <div className="control">
                  <button className="button is-rounded is-link">Accept</button>
               </div>
               <div className="control">
                  <button className="button is-rounded is-primary">Sign Up</button>
               </div>
            </div>
         </form>
      </aside>
   );
};
