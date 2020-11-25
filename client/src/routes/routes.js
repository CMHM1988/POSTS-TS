import { Login } from "pages/Login";
import { Posts } from "pages/Posts";
import { Settings } from "pages/Settings";

//
export default [
   {
      path: "/",
      component: Posts
   },
   {
      path: "/login",
      component: Login
   },
   {
      path: "/settings",
      component: Settings
   }
];
