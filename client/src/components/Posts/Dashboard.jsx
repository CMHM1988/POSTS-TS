import { Card } from "components/common/Card";
import React from "react";

export const Dashboard = () => {
   return (
      <div className="columns is-multiline">
         <div className="column is-one-fifth">
            <Card />
         </div>
         <div className="column is-one-fifth">
            <Card />
         </div>
      </div>
   );
};
