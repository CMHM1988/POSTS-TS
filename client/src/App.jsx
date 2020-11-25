//
import React from "react";
//
import { Footer } from "layout/Footer";
import { Header } from "layout/Header";
// React Routers
import { BrowserRouter as Router} from "react-router-dom";
import { Pages } from "routes";

//
export const App = () => {
   return (
      <Router>
         <Header />
         <Pages />
         <Footer />
      </Router>
   );
};
