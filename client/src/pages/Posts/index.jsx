import React from "react";
//
import { Info } from "components/Posts/Info";
import { Dashboard } from "components/Posts/Dashboard";
//
import "styles/scss/pages/posts.scss";

//
export const Posts = () => {
   return (
      <main className="posts-app is-grid">
         <Info />
         <Dashboard />
      </main>
   );
};

