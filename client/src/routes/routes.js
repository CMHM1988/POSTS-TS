import { Author } from "pages/Author";
import { Login } from "pages/Login";
import { Posts } from "pages/Posts";
import { Settings } from "pages/Settings";

//
export default [
   {
      path: "/login",
      component: Login
   },
   {
      path: "/",
      component: Posts
   },
   {
      path: "/author",
      component: Author
   },
   {
      path: "/settings",
      component: Settings
   }
];
