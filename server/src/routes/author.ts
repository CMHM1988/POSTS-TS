import { getAllAuthors } from './../controllers/author';
// Importando herramientas de express.
import { Router } from "express";

// Generando router desde la biblioteca de express.
const authorRouter = Router();

// Build routers.
authorRouter.get('/author', getAllAuthors);

// Exportando routers.
export default authorRouter;