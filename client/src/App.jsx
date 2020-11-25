//
import React from "react";
// React Routers
import { BrowserRouter as Router} from "react-router-dom";
import { Header } from "layout/Header";
import { Pages } from "routes";
import { Footer } from "layout/Footer";

//
export const App = () => {
   return (
      <Router>
         {/* Header section --------------------------------------------- */}
         <Header />
         {/* Body section ----------------------------------------------- */}
         <Pages />
         {/* Footer section --------------------------------------------- */}
         <Footer />
      </Router>
   );
};
