import { getAllPosts } from './../controllers/posts';
// Importando herramientas de express.
import { Router } from "express";

// Generando router desde la biblioteca de express.
const postsRouter = Router();

/* Build Routes */
postsRouter.get('/posts', getAllPosts);

// Exportando routers.
export default postsRouter;