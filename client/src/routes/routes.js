import { Login } from "pages/Login";
import { Author }from "pages/Author";
import { EditAuthor } from "pages/Author/Edit";
import { NewAuthor } from "pages/Author/New";
import { Posts } from "pages/Posts";
import { EditPost } from "pages/Posts/Edit";
import { NewPost } from "pages/Posts/New";
import { Settings } from "pages/Settings";

//
export default [
   {
      path: "/",
      component: Posts
   },
   {
      path: "/posts/edit",
      component: EditPost
   },
   {
      path: "/posts/new",
      component: NewPost
   },
   {
      path: "/login",
      component: Login
   },
   {
      path: "/author",
      component: Author
   },
   {
      path: "/author/edit",
      component: EditAuthor
   },
   {
      path: "/author/new",
      component: NewAuthor
   },
   {
      path: "/settings",
      component: Settings
   }
];
