import React from "react";
//
import { EditForm } from "components/Posts/Edit/Form";
import { Card } from "components/common/Card";

export const EditPost = () => {
   return (
      <main className="is-flex is-flex-center">
         <div className="columns">
            <EditForm />
            <div className="column">
               <Card />
            </div>
         </div>
      </main>
   );
};
